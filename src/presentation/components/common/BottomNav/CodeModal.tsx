import React, { useState } from 'react';
import COLOR from '@styles/colors';
import styled from 'styled-components';
import Spacing from '../Spacing';
import { TYPOGRAPHY } from '@styles/fonts';
import { postInvitationCode } from '@api/travel';

const CodeModal = ({ closeCodeModal }: { closeCodeModal: () => void }) => {
  const [code, setCode] = useState('');
  const [authenticationState, setAuthenticationState] = useState('');

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthenticationState('');
    setCode(e.target.value);
  };

  const handleClickAuthentication = async () => {
    const res = await postInvitationCode(code);
    if (res.message === '여행 참여에 성공했습니다.') {
      setAuthenticationState('success');
    } else {
      setAuthenticationState('fail');
    }
  };

  return (
    <CodeModalWrapper>
      <div className="title">공유 받은 초대 코드 입력</div>

      <Spacing size={25} />
      <InputWrapper>
        <input
          type="text"
          placeholder="초대 코드를 입력해주세요"
          value={code}
          onChange={handleChangeCode}
        />
        <AuthenticationButton
          active={String(code.length > 0 && authenticationState !== 'fail')}
          onClick={handleClickAuthentication}
        >
          인증
        </AuthenticationButton>
      </InputWrapper>
      {authenticationState !== '' && (
        <div className={authenticationState + ' stateText'}>
          {authenticationState === 'success'
            ? '인증이 완료되었습니다.'
            : '유효하지 않은 코드입니다. 다시 확인해주세요.'}
        </div>
      )}
      <Spacing size={60} />
      <ConfirmButtonWrapper>
        <TextButton
          active="true"
          onClick={closeCodeModal}
          style={{ color: COLOR.COOL_GRAY_500 }}
        >
          취소
        </TextButton>
        <TextButton
          active={String(authenticationState === 'success')}
          onClick={closeCodeModal}
        >
          확인
        </TextButton>
      </ConfirmButtonWrapper>
    </CodeModalWrapper>
  );
};

export default CodeModal;

const CodeModalWrapper = styled.div`
  width: 82%;
  padding: 22px 17px;

  text-align: center;

  border-radius: 8px;
  background-color: ${COLOR.WHITE};

  @media (min-width: 1024px) {
    width: 390px;
  }

  .title {
    color: ${COLOR.COOL_GRAY_500};
    ${TYPOGRAPHY.TITLE.SUBHEADING2_BOLD};
  }
  .stateText {
    margin-top: 8px;
    text-align: left;
    ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD}
  }
  .success {
    color: ${COLOR.MAIN_BLUE};
  }
  .fail {
    color: ${COLOR.ALERT_WARNING};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  justify-content: space-between;

  input {
    width: 100%;
    padding: 8px 11px;

    border-radius: 4px;
    border: none;
    outline: none;
    background-color: ${COLOR.UI_GRAY_1};

    color: ${COLOR.COOL_GRAY_500};
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.5px;

    caret-color: ${COLOR.MAIN_BLUE};

    &::placeholder {
      color: ${COLOR.UI_GRAY_4};
      font-weight: 500;
      line-height: 18px;
    }
  }
`;

const AuthenticationButton = styled.button<{ active: string }>`
  padding: 9px 11px;

  color: ${COLOR.MAIN_WHITE};
  ${TYPOGRAPHY.TITLE.SUBHEADING1_SEMIBOLD};
  background-color: ${({ active }) =>
    active === 'true' ? COLOR.MAIN_BLUE : COLOR.UI_GRAY_3};

  border: none;
  border-radius: 4px;
  outline: none;
  white-space: nowrap;
`;

const ConfirmButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-end;
`;

const TextButton = styled.button<{ active: string }>`
  color: ${({ active }) => (active === 'true' ? COLOR.MAIN_BLUE : COLOR.UI_GRAY_4)};
  ${TYPOGRAPHY.TITLE.SUBHEADING2_BOLD};
  border: none;
  outline: none;
  background-color: transparent;
`;
