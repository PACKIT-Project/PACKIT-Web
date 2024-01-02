import React from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { motion } from 'framer-motion';
import BackHeader from '@components/common/Header/BackHeader';
import { TYPOGRAPHY } from '@styles/fonts';
import TextButton from '@components/common/TextButton';
import Spacing from '@components/common/Spacing';
import Icon from '@components/common/Icon';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import BottomSheet from '@components/common/BottomSheet';
import LeaveBottomSheet from '@components/MyPage/components/LeaveBottomSheet';
import Hr from '@components/common/Hr';
import ConfirmModal from '@components/common/Modal/ConfirmModal';
import { logout } from '@api/auth';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '@utils/cookie';
import NotificationModal from '@components/SettingPage/NotificationModal';

const SettingPage = () => {
  const navigate = useNavigate();

  const {
    isShowModal: isShowLogoutModal,
    openModal: openLogoutModal,
    closeModal: closeLogoutModal,
  } = useModal();

  const {
    isShowModal: isShowLeaveBottomSheet,
    openModal: openLeaveBottomSheet,
    closeModal: closeLeaveBottomSheet,
  } = useModal();

  const {
    isShowModal: isShowNotificationModal,
    openModal: openNotificationModal,
    closeModal: closeNotificationModal,
  } = useModal();

  const handleClickLogout = async () => {
    const result = await logout();
    if (result.message === '성공적으로 로그아웃되었습니다.') {
      deleteCookie('accessToken');
      closeLogoutModal();
      navigate('/login');
    }
  };

  return (
    <SettingPageWrappr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackHeader text="설정" />
      <Spacing size={15} />
      <Section>
        <div className="section">
          <div className="title">설정</div>
          <div className="content">
            알림 설정{' '}
            <Icon
              icon="Chevron"
              color={COLOR.UI_GRAY_4}
              cursor={true}
              onClick={openNotificationModal}
            />
          </div>
          <Hr height={9.5} color={COLOR.UI_GRAY_1} />
        </div>
        <div className="section">
          <div className="title gap">정보</div>
          <div className="content">
            약관 및 정책
            <Icon icon="Chevron" color={COLOR.UI_GRAY_4} cursor={true} />
          </div>
          <Hr height={1} color={COLOR.UI_GRAY_1} />
          <div className="content">
            개인정보 처리방침
            <Icon icon="Chevron" color={COLOR.UI_GRAY_4} cursor={true} />
          </div>
          <Hr height={9.5} color={COLOR.UI_GRAY_1} />
        </div>
        <div className="section">
          <div className="title gap">기타</div>
          <div className="content">
            고객센터
            <div className="contentText">PPACKITT@gmail.com</div>
          </div>
          <Hr height={1} color={COLOR.UI_GRAY_1} />
          <div className="content">
            버전 정보
            <div className="contentText">최신 버전</div>
          </div>
        </div>
      </Section>
      <BottomButtonWrapper>
        <Button onClick={openLogoutModal}>로그아웃</Button>
        <TextButton text="회원탈퇴" onClick={openLeaveBottomSheet} />
      </BottomButtonWrapper>
      {isShowNotificationModal && (
        <Modal
          isVisible={isShowNotificationModal}
          closeModal={closeNotificationModal}
        >
          <NotificationModal closeModal={closeNotificationModal} />
        </Modal>
      )}
      {isShowLogoutModal && (
        <Modal isVisible={isShowLogoutModal} closeModal={closeLogoutModal}>
          <ConfirmModal
            title="로그아웃 하시겠습니까?"
            yesText="확인"
            closeModal={closeLogoutModal}
            onClick={handleClickLogout}
          />
        </Modal>
      )}
      {isShowLeaveBottomSheet && (
        <BottomSheet
          isVisible={isShowLeaveBottomSheet}
          closeModal={closeLeaveBottomSheet}
        >
          <LeaveBottomSheet closeModal={closeLeaveBottomSheet} />
        </BottomSheet>
      )}
    </SettingPageWrappr>
  );
};

export default SettingPage;

const SettingPageWrappr = styled(motion.div)`
  height: 100%;
  padding: 0 25px;
  background-color: ${COLOR.WHITE};
`;

const Section = styled.div`
  padding: 0 5px;
  .section {
    .title {
      display: flex;
      align-items: center;
      height: 31px;
      box-sizing: border-box;
      ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
      color: ${COLOR.UI_GRAY_4};
    }
    .gap {
      margin-top: 9.5px;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 19px 0;
      ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
      color: ${COLOR.COOL_GRAY_500};

      .contentText {
        ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
        color: ${COLOR.COOL_GRAY_100};
      }
    }
    .border {
      border-bottom: 1px solid ${COLOR.UI_GRAY_1};
    }
  }
`;
const BottomButtonWrapper = styled.div`
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    width: 390px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 8px;
  background-color: ${COLOR.UI_GRAY_3};
  outline: none;

  color: ${COLOR.COOL_GRAY_100};
  ${TYPOGRAPHY.TEXT.BODY1_MEDIUM};
`;
