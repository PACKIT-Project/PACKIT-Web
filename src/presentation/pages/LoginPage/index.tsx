import React from 'react';
import { styled } from 'styled-components';
import Icon from '../../components/common/Icon';
import COLOR from '@styles/colors';
import { Link } from 'react-router-dom';
import Text from '@components/common/Text';
import Spacing from '@components/common/Spacing';
import AppLayout from '@components/common/AppLayout';

const LoginPage = () => {
  const kakaoUrl = `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/kakao?redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;
  const naverUrl = `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/naver?redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;

  return (
    <AppLayout>
      <LoginPageWrapper>
        <MainWrapper>
          <Icon icon="AuthLogo" />
          <Spacing size={17} />
          <Text
            text="빈틈없는 여행 준비의 시작"
            color={COLOR.MAIN_BLACK}
            fontSize={21}
            fontWeight={600}
            lineHeight="139%"
          />
        </MainWrapper>
        <ButtonWrapper>
          <ButtonContainer>
            <Link to={kakaoUrl}>
              <Icon icon="AuthKakao" cursor={true} />
            </Link>
            <Link to={naverUrl}>
              <Icon icon="AuthNaver" cursor={true} />
            </Link>
            <Link to={naverUrl}>
              <Icon icon="AuthApple" cursor={true} />
            </Link>
          </ButtonContainer>
        </ButtonWrapper>
      </LoginPageWrapper>
    </AppLayout>
  );
};

const LoginPageWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow-y: hidden;
`;

const MainWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default LoginPage;
