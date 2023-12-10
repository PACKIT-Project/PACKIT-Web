import React from 'react';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../infrastructure/api/user';
import { deleteCookie } from '../../../../application/utils/cookie';

const LogoutModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    const result = await logout();
    if (result.message === '성공적으로 로그아웃되었습니다.') {
      deleteCookie('accessToken');
      closeModal();
      navigate('/login');
    }
  };

  return (
    <LogoutModalWrapper>
      로그아웃 하시겠습니까?
      <ButtonWrapper>
        <button className="exit" onClick={closeModal}>
          취소
        </button>
        <button className="logout" onClick={handleClickLogout}>
          확인
        </button>
      </ButtonWrapper>
    </LogoutModalWrapper>
  );
};

const LogoutModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;
  padding: 24px 56px;

  border-radius: 8px;
  background-color: ${COLOR.MAIN_WHITE};

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${COLOR.COOL_GRAY_300};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 86px;

  button {
    outline: none;
    border: none;
    background-color: transparent;

    font-size: 18px;
    font-weight: 700;
    line-height: normal;

    &.exit {
      color: ${COLOR.COOL_GRAY_100};
    }
    &.logout {
      color: ${COLOR.ALERT_WARNING};
    }
  }
`;
export default LogoutModal;
