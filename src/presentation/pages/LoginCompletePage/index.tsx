/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';

const LoginCompletePage = () => {
  const { state: nickname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoginCompleteWrapper>
      <TextWrapper>
        <div className="alertText">가입 완료!</div>
        <div className="explainText">
          {nickname}님,
          <br />
          환영합니다!
        </div>
      </TextWrapper>
    </LoginCompleteWrapper>
  );
};

const LoginCompleteWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${COLOR.WHITE};
  .alertText {
    ${TYPOGRAPHY.TITLE.SUBHEADING3_SEMIBOLD};
    color: ${COLOR.MAIN_BLUE};
  }
  .explainText {
    ${TYPOGRAPHY.TITLE.HERO1_BOLD};
    color: ${COLOR.COOL_GRAY_300};
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  text-align: center;
`;
export default LoginCompletePage;
