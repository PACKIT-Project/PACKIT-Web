/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import BackHeader from '@components/common/BackHeader';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import BottomButton from '@components/common/BottomButton';
import Input from '@components/common/Input';
import Icon from '@components/common/Icon';
import Spacing from '@components/common/Spacing';
import { useDropzone } from 'react-dropzone';
import AppLayout from '@components/common/AppLayout';
import { TYPOGRAPHY } from '@styles/fonts';
import { postImage } from '@api/image';
import { duplicateNickname, postMember } from '@api/member';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store';

const OnBoardingProfilePage = () => {
  const navigate = useNavigate();
  const { enableNotification } = useSelector((state: RootState) => state.termsInfo);

  const [error, setError] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [duplicateNicknameValue, setDuplicateNicknameValue] = useState(false);

  const handleChangeNickname = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z\d\s_-]{2,13}$/;
    const isValid = regex.test(inputValue);

    setNickname(inputValue);
    setIsValid(isValid);
  };

  const handleClickSignUp = async () => {
    const signUpRes = await postMember({
      nickname,
      profileImageUrl,
      enableNotification,
    });
    if (signUpRes.message === '성공적으로 회원가입되었습니다.') {
      navigate('/login/complete', { state: nickname });
    }
  };

  const onDrop = async (acceptedFiles: any) => {
    const formdata = new FormData();
    formdata.append('uploadImage', acceptedFiles[0]);

    const imageRes = await postImage(formdata);
    if (imageRes.message === '성공적으로 이미지가 업로드 되었습니다.') {
      setProfileImageUrl(imageRes.data.savedImageUrl);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
  });

  const getDuplicateValue = async () => {
    const res = await duplicateNickname(nickname);
    if (res) {
      setDuplicateNicknameValue(true);
    } else {
      setDuplicateNicknameValue(false);
    }
    if ((nickname.length >= 2 && !isValid) || res) {
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    getDuplicateValue();
  }, [nickname]);

  return (
    <AppLayout>
      <OnBoardingProfilePageWrapper>
        <BackHeader />
        <TextBox>사용하실 닉네임을</TextBox>
        <TextBox>입력해주세요</TextBox>

        <MainWrapper>
          <ProfileWrapper>
            <div className="profile">
              <Icon icon="Profile" />
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="camera">
                  {profileImageUrl ? (
                    <ProfileImage>
                      <img
                        src={profileImageUrl}
                        alt="프로필 이미지"
                        width={101}
                        height={101}
                      />
                    </ProfileImage>
                  ) : (
                    <Icon icon="Camera" cursor={true} />
                  )}
                </div>
              </div>
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
              success={(isValid && !duplicateNicknameValue).toString()}
              error={error.toString()}
            />
            <div className="explain text">
              2~13자의 한글, 영문, 숫자, -, _ 조합 사용 가능
            </div>
            <div
              className={
                isValid && !duplicateNicknameValue
                  ? 'success text'
                  : error
                  ? 'error text'
                  : 'none'
              }
            >
              {isValid && !duplicateNicknameValue
                ? '사용할 수 있는 닉네임입니다'
                : error
                ? '닉네임을 확인해주세요'
                : ''}
            </div>
          </InputWrapper>
        </MainWrapper>

        <BottomButton text="확인" disabled={!isValid} onClick={handleClickSignUp} />
      </OnBoardingProfilePageWrapper>
    </AppLayout>
  );
};

export default OnBoardingProfilePage;

const OnBoardingProfilePageWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 0 8px;
`;

const TextBox = styled.div`
  color: ${COLOR.COOL_GRAY_400};
  ${TYPOGRAPHY.TITLE.DISPLAY1_BOLD};
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .profile {
    position: relative;
    width: fit-content;

    .camera {
      position: absolute;
      bottom: 3px;
      right: 0;

      cursor: pointer;
    }
  }
`;

const ProfileImage = styled.div`
  width: 101px;
  height: 101px;
  border-radius: 50%;

  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 6px;

  .text {
    ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
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
