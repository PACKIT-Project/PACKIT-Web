import React from 'react';
import BackHeader from '@components/common/BackHeader';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useGetMemberProfile from '../../../infrastructure/queries/members/useGetMemberProfile';
import SettingHeader from '@components/common/Header/SettingHeader';
import Spacing from '@components/common/Spacing';
import Text from '@components/common/Text';
import BottomNav from '@components/common/BottomNav';
import { TYPOGRAPHY } from '@styles/fonts';

const MyPage = () => {
  const navigate = useNavigate();
  const { data } = useGetMemberProfile();

  const handleClickEditInfo = () => {
    navigate('/my/edit');
  };

  return (
    <>
      {data && (
        <MyPageWrapper>
          <SettingHeader />
          <Spacing size={26} />
          <MembersWrapper>
            <div className="profileWrapper">
              <img src={data.profileImageUrl} alt="프로필 이미지" />
            </div>
            <div className="infoWrapper">
              <Text
                text={data.nickname}
                color={COLOR.COOL_GRAY_300}
                fontSize={21}
                fontWeight={700}
                lineHeight="normal"
              />
              <button onClick={handleClickEditInfo}>프로필 편집</button>
            </div>
          </MembersWrapper>
          <BottomNav />
        </MyPageWrapper>
      )}
    </>
  );
};

const MyPageWrapper = styled.div`
  background-color: ${COLOR.WHITE};
  overflow-y: hidden;
`;

const MembersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 100%;
  padding: 0 2rem;

  .profileWrapper {
    width: 100px;
    height: 100px;
    border-radius: 100%;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      object-fit: cover;
    }
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;

    button {
      height: 29px;
      ${TYPOGRAPHY.TEXT.BODY6_MEDIUM};
      padding: 5px 19px;
      border-radius: 4px;
      background-color: ${COLOR.UI_GRAY_1};
      color: ${COLOR.COOL_GRAY_100};
      border: none;
      outline: none;
      box-sizing: border-box;
    }
  }
`;

export default MyPage;
