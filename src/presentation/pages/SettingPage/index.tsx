import React from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { motion } from 'framer-motion';
import BackHeader from '@components/common/Header/BackHeader';
import { TYPOGRAPHY } from '@styles/fonts';
import TextButton from '@components/common/TextButton';
import { logout } from '@api/auth';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '@utils/cookie';
import Spacing from '@components/common/Spacing';
import Icon from '@components/common/Icon';

const SettingPage = () => {
  const navigate = useNavigate();
  const handleClickLogout = async () => {
    const res = await logout();
    if (res.message === '성공적으로 로그아웃 되었습니다.') {
      deleteCookie('accessToken');
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
            알림 설정 <Icon icon="Chevron" color={COLOR.UI_GRAY_4} cursor={true} />
          </div>
        </div>
        <div className="section">
          <div className="title">정보</div>
          <div className="content border">
            약관 및 정책
            <Icon icon="Chevron" color={COLOR.UI_GRAY_4} cursor={true} />
          </div>
          <div className="content">
            개인정보 처리방침
            <Icon icon="Chevron" color={COLOR.UI_GRAY_4} cursor={true} />
          </div>
        </div>
      </Section>
      <BottomButtonWrapper>
        <Button onClick={handleClickLogout}>로그아웃</Button>
        <TextButton text="회원탈퇴" />
      </BottomButtonWrapper>
    </SettingPageWrappr>
  );
};

export default SettingPage;

const SettingPageWrappr = styled(motion.div)`
  position: relative;
  height: 100%;
  padding: 0 25px;
  background-color: ${COLOR.WHITE};
`;

const Section = styled.div`
  padding: 0 5px;
  .section {
    .title {
      padding: 6px 0;
      ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
      color: ${COLOR.UI_GRAY_4};
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 19px 0;
      ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
      color: ${COLOR.COOL_GRAY_500};
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
