import React, { useState } from 'react';
import BackHeader from '@components/common/BackHeader';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import BottomButton from '@components/common/BottomButton';
import Input from '@components/common/Input';
import Icon from '@components/common/Icon';
import Spacing from '@components/common/Spacing';

const SignUpPage = () => {
  const [nickname, setNickname] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z\d\s_-]{2,13}$/;
    const isValid = regex.test(inputValue);

    setNickname(inputValue);
    setIsValid(isValid);
  };

  return (
    <SignUpPageWrapper>
      <BackHeader />
      <TextBox>사용하실 닉네임을</TextBox>
      <TextBox>입력해주세요</TextBox>

      <MainWrapper>
        <ProfileWrapper>
          <Icon icon="Profile" />
          <div className="camera">
            <Icon icon="Camera" />
          </div>
        </ProfileWrapper>
        <Spacing size={36} />
        <InputWrapper>
          <Input
            placeholder="닉네임을 입력해주세요"
            onChange={handleChangeNickname}
            type="text"
            value={nickname}
            maxLength={13}
            success={isValid.toString()}
            error={(nickname.length >= 2 && !isValid).toString()}
          />
          <div className="explain text">
            2~13자의 한글, 영문, 숫자, -,_조합 사용 가능
          </div>
          <div
            className={
              isValid
                ? 'success text'
                : nickname.length >= 2 && !isValid
                ? 'error text'
                : 'none'
            }
          >
            {isValid
              ? '사용할 수 있는 닉네임입니다'
              : nickname.length >= 2 && !isValid
              ? '닉네임을 확인해주세요'
              : ''}
          </div>
        </InputWrapper>
      </MainWrapper>

      <BottomButton text="확인" disabled={!isValid} />
    </SignUpPageWrapper>
  );
};

export default SignUpPage;

const SignUpPageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 20px;

  box-sizing: border-box;
`;

const TextBox = styled.div`
  color: ${COLOR.COOL_GRAY_300};
  font-size: 24px;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: -0.5px;
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
`;

const ProfileWrapper = styled.div`
  position: relative;
  .camera {
    position: absolute;
    bottom: 0;
    left: 55%;

    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;

  .text {
    font-size: 13px;
    font-weight: 600;
    line-height: 13px;
  }
  .explain {
    color: ${COLOR.COOL_GRAY_100};
  }
  .success {
    color: ${COLOR.MAIN_BLUE};
  }
  .error {
    color: ${COLOR.ALERT_WARNING};
  }
`;
