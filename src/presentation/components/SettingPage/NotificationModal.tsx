import React from 'react';
import styled from 'styled-components';
import ModalHeader from '@components/common/Header/ModalHeader';
import Spacing from '@components/common/Spacing';
import COLOR from '@styles/colors';
import useGetMemberProfile from '../../../infrastructure/queries/members/useGetMemberProfile';
import { TYPOGRAPHY } from '@styles/fonts';
import ToggleButton from '@components/common/ToggleButton';
import { disableNotification, enableNotification } from '@api/member';

const NotificationModal = ({ closeModal }: { closeModal: () => void }) => {
  const { data, refetch } = useGetMemberProfile();

  const handleToggleNotification = async (state: boolean) => {
    if (!state) {
      const res = await enableNotification();
      if (res === '푸시 알림이 활성화 되었습니다.') {
        refetch();
      }
    } else {
      const res = await disableNotification();
      if (res === '푸시 알림이 비 활성화 되었습니다.') {
        refetch();
      }
    }
  };

  return (
    <NotficationModalWrapper>
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
          state={data.enableNotification}
          onClick={() => handleToggleNotification(data.enableNotification)}
        />
      </Notification>
    </NotficationModalWrapper>
  );
};

export default NotificationModal;

const NotficationModalWrapper = styled.div`
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
