import React from 'react';
import styled from 'styled-components';
import ModalHeader from '@components/common/Header/ModalHeader';
import Spacing from '@components/common/Spacing';
import COLOR from '@styles/colors';
import useGetMemberProfile from '../../../infrastructure/queries/members/useGetMemberProfile';
import { TYPOGRAPHY } from '@styles/fonts';
import ToggleButton from '@components/common/ToggleButton';
import {
  disableActiveNotification,
  disableRemindNotification,
  enableActiveNotification,
  enableRemindNotification,
} from '@api/notification';
import { motion } from 'framer-motion';

const NotificationModal = ({ closeModal }: { closeModal: () => void }) => {
  const { data, refetch } = useGetMemberProfile();

  const handleToggleActiveNotification = async (state: boolean) => {
    if (!state) {
      const res = await enableActiveNotification();
      if (res === '성공적으로 활동 알림 수신이 설정되었습니다.') {
        refetch();
      }
    } else {
      const res = await disableActiveNotification();
      if (res === '성공적으로 활동 알림 수신이 해제되었습니다.') {
        refetch();
      }
    }
  };

  const handleToggleRemindNotification = async (state: boolean) => {
    if (!state) {
      const res = await enableRemindNotification();
      if (res === '성공적으로 여행 리마이드 알림 수신이 설정되었습니다.') {
        refetch();
      }
    } else {
      const res = await disableRemindNotification();
      if (res === '성공적으로 여행 리마이드 알림 수신이 해제되었습니다.') {
        refetch();
      }
    }
  };

  return (
    <NotficationModalWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ModalHeader
        closeModal={closeModal}
        text="앱 알림 설정"
        color={COLOR.COOL_GRAY_400}
      />
      <Spacing size={20} />
      <Notification>
        <div className="notificationInfo">
          <div className="title">활동 알림</div>
          모든 여행의 할 일 완료, 재촉 등 알림
        </div>
        <ToggleButton
          state={data.notificationConfigStatus.enableActiveNotification}
          onClick={() =>
            handleToggleActiveNotification(
              data.notificationConfigStatus.enableActiveNotification
            )
          }
        />
      </Notification>
      <Spacing size={20} />
      <Notification>
        <div className="notificationInfo">
          <div className="title">전체 여행 리마인드 알림</div>
          설정한 전체 여행 리마인드 알림
        </div>
        <ToggleButton
          state={data.notificationConfigStatus.enableTravelRemindNotification}
          onClick={() =>
            handleToggleRemindNotification(
              data.notificationConfigStatus.enableTravelRemindNotification
            )
          }
        />
      </Notification>
    </NotficationModalWrapper>
  );
};

export default NotificationModal;

const NotficationModalWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.MAIN_WHITE};

  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    width: 390px;
  }
`;

const Notification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .notificationInfo {
    display: flex;
    flex-direction: column;
    gap: 9px;

    ${TYPOGRAPHY.TEXT.BODY6_MEDIUM};
    color: ${COLOR.UI_GRAY_5};
    .title {
      ${TYPOGRAPHY.TITLE.SUBHEADING2_BOLD};
      color: ${COLOR.COOL_GRAY_500};
    }
  }
`;
