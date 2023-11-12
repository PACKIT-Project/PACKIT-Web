import React from 'react';
import BackHeader from '@components/common/BackHeader';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import useGetMyInfo from '../../../application/hooks/queries/user/useGetMyInfo';
import { useNavigate } from 'react-router-dom';
import useModal from '../../../application/hooks/useModal';
import Spacing from '@components/common/Spacing';
import Button from '@components/common/Button';
import Text from '@components/common/Text';
import Modal from '@components/common/Modal';
import LogoutModal from '@components/MyPage/components/LogoutModal';
import LeaveModal from '@components/MyPage/components/LeaveModal';
import { requestEmailAuth } from '@api/emailAuth';
import EmailAuthModal from '@components/MainPage/components/EmailAuthModal';

const MyPage = () => {
  const navigate = useNavigate();
  const { data } = useGetMyInfo();
  const {
    isShowModal: isShowLeaveModal,
    toggleModal: toggleLeaveModal,
    closeModal: closeLeaveModal,
  } = useModal();
  const {
    isShowModal: isShowLogoutModal,
    toggleModal: toggleLogoutModal,
    closeModal: closeLogoutModal,
  } = useModal();
  const {
    isShowModal: isShowEmailAuth,
    toggleModal: toggleEmailAuth,
    closeModal: closeEmailAuth,
  } = useModal();

  const handleClickEmailAuth = async () => {
    const res = await requestEmailAuth();
    if (res.message === '성공적으로 인증 메일이 발송되었습니다.') {
      toggleEmailAuth();
    }
  };

  const handleClickLeave = () => {
    toggleLeaveModal();
  };
  const handleClickLogout = () => {
    toggleLogoutModal();
  };

  const handleClickEditInfo = () => {
    navigate('/my/edit');
  };

  return (
    <>
      {data && (
        <MyPageWrapper>
          <BackHeader text="내 정보" color="#191F28" />
          <MembersWrapper>
            <Spacing size={10} />
            <InfoWrapper>
              <div className="profile-wrapper">
                <img src={data.profileImageUrl} alt="프로필 이미지" />
              </div>
              <div className="info-text">
                <div>
                  <span className="name">{data.nickname}</span>님
                </div>
                <Spacing size={8} />
                <span className="email">{data.email}</span>
                <Spacing size={14} />
                <Button
                  width="fit-content"
                  radius={29}
                  padding="8px 16px"
                  background={COLOR.WHITE}
                  border={`1px solid ${COLOR.GRAY_500}`}
                  onClick={handleClickEmailAuth}
                >
                  <Text
                    text="이메일 인증하기"
                    fontSize={13}
                    fontWeight={600}
                    lineHeight="16px"
                    color={COLOR.GRAY_800}
                  />
                </Button>
              </div>
            </InfoWrapper>
            <Spacing size={21} />
            <BottomWrapper>
              <Button
                radius={12}
                padding="24px 30px"
                background={COLOR.WHITE}
                border={`1px solid ${COLOR.GREEN_300}`}
                onClick={() => {}}
              >
                <div className="template-button">
                  <Text
                    text="생성된 여행 템플릿"
                    fontSize={20}
                    fontWeight={500}
                    lineHeight="20px"
                    color={COLOR.GRAY_900}
                  />
                  |
                  <Text
                    text={`${data.travelCount}개`}
                    fontSize={22}
                    fontWeight={500}
                    lineHeight="22px"
                    color={COLOR.MAIN_GREEN}
                  />
                </div>
              </Button>
              <ButtonWrapper>
                <Button
                  width="100%"
                  radius={8}
                  padding="13px"
                  background={COLOR.WHITE}
                  border={`1px solid ${COLOR.GRAY_200}`}
                  onClick={handleClickEditInfo}
                >
                  <Text
                    text="프로필 편집"
                    fontSize={18}
                    fontWeight={500}
                    lineHeight="30px"
                    color={COLOR.GRAY_600}
                  />
                </Button>
                <Button
                  width="100%"
                  radius={8}
                  padding="13px"
                  background={COLOR.WHITE}
                  border={`1px solid ${COLOR.GRAY_200}`}
                  onClick={handleClickLogout}
                >
                  <Text
                    text="로그아웃"
                    fontSize={18}
                    fontWeight={500}
                    lineHeight="30px"
                    color={COLOR.GRAY_600}
                  />
                </Button>
                <Button
                  width="100%"
                  radius={8}
                  padding="13px"
                  background={COLOR.WHITE}
                  border={`1px solid ${COLOR.GRAY_200}`}
                  onClick={handleClickLeave}
                >
                  <Text
                    text="탈퇴하기"
                    fontSize={18}
                    fontWeight={500}
                    lineHeight="30px"
                    color={COLOR.GRAY_600}
                  />
                </Button>
              </ButtonWrapper>
            </BottomWrapper>

            <Modal isVisible={isShowLogoutModal} closeModal={closeLogoutModal}>
              <LogoutModal closeModal={closeLogoutModal} />
            </Modal>
            <Modal isVisible={isShowLeaveModal} closeModal={closeLeaveModal}>
              <LeaveModal closeModal={closeLeaveModal} />
            </Modal>
          </MembersWrapper>
          <Modal isVisible={isShowEmailAuth} closeModal={closeEmailAuth}>
            <EmailAuthModal closeModal={closeEmailAuth} />
          </Modal>
        </MyPageWrapper>
      )}
    </>
  );
};

const MyPageWrapper = styled.div`
  padding: 0 20px;
  height: 100vh;
  background-color: ${COLOR.WHITE};
  overflow-y: hidden;
`;
const MembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .template-button {
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    justify-content: center;

    color: ${COLOR.GRAY_400};
    font-size: 30px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  .profile-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
  }
  .info-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    color: ${COLOR.GRAY_900};
    font-size: 22px;
    font-weight: 500;
    line-height: 22px;

    .name {
      font-size: 30px;
      line-height: 30px;
      margin-right: 6px;
    }
    .email {
      color: ${COLOR.GRAY_500};
      font-size: 18px;
      line-height: 18px;
    }
  }
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;
  margin: 0 -20px;
  padding: 23px 20px 50px 20px;
  background-color: ${COLOR.GRAY_50};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 9%;
`;

export default MyPage;
