import React, { useState } from 'react';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import BackHeader from '@components/common/BackHeader';
import Spacing from '@components/common/Spacing';
import Icon from '@components/common/Icon';
import useGetMemberProfile from '../../../infrastructure/queries/members/useGetMemberProfile';
import BottomButton from '@components/common/BottomButton';
import Input from '@components/common/Input';
import { postImage } from '@api/image';
import { useDropzone } from 'react-dropzone';
import useMutateMemberProfile from '../../../infrastructure/queries/members/useMutateMemberProfile';

const EditMyInfoPage = () => {
  const mutate = useMutateMemberProfile();
  const { data: userData } = useGetMemberProfile();
  const [nickname, setNickname] = useState(userData?.nickname);
  const [profileImageUrl, setProfileImageUrl] = useState(userData?.profileImageUrl);

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

  const handleEditProfile = async () => {
    mutate({ nickname, profileImageUrl });
  };

  return (
    <>
      {userData && (
        <EditMyInfoPageWrapper>
          <BackHeader text="프로필 편집" color="#191F28" />
          <Spacing size={39} />
          <ProfileWrapper>
            <div className="profile">
              <Icon icon="Profile" />
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="camera">
                  {profileImageUrl ? (
                    <div className="profileImage">
                      <img
                        src={profileImageUrl}
                        alt="프로필 이미지"
                        width={101}
                        height={101}
                      />
                    </div>
                  ) : (
                    <Icon icon="Camera" cursor={true} />
                  )}
                </div>
              </div>
            </div>
          </ProfileWrapper>
          <Spacing size={34} />
          <Input
            value={nickname || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNickname(e.target.value)
            }
          />
          <BottomButton text="확인" onClick={handleEditProfile} />
        </EditMyInfoPageWrapper>
      )}
    </>
  );
};
const EditMyInfoPageWrapper = styled.div`
  background-color: ${COLOR.WHITE};
  height: 100%;
  padding: 0 25px;
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

    .profileImage {
      width: 100px;
      height: 100px;
      border-radius: 100%;

      img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }
  }
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${COLOR.MAIN_GREEN};
  padding-bottom: 5px;

  .name {
    input {
      color: ${COLOR.GRAY_900};
      font-size: 20px;
      font-weight: 600;
      line-height: 140%;
      border: none;
      outline: none;
    }
  }
`;

export default EditMyInfoPage;
