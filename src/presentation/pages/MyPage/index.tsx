import React from 'react';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useGetMemberProfile from '../../../infrastructure/queries/members/useGetMemberProfile';
import SettingHeader from '@components/common/Header/SettingHeader';
import Spacing from '@components/common/Spacing';
import Text from '@components/common/Text';
import BottomNav from '@components/common/BottomNav';
import { TYPOGRAPHY } from '@styles/fonts';
import MainContent from '@components/MyPage/MainContent';
import { motion } from 'framer-motion';

const MyPage = () => {
  const navigate = useNavigate();
  const { data } = useGetMemberProfile();

  const handleClickEditInfo = () => {
    navigate('/my/edit');
  };

  return (
    <>
      {data && (
        <MyPageWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
          <Spacing size={38} />
          <MainContent />
          <BottomNav />
        </MyPageWrapper>
      )}
    </>
  );
};

const MyPageWrapper = styled(motion.div)`
  height: calc(100% - 84px);
  background-color: ${COLOR.WHITE};
`;

const MembersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0 2rem;

  .profileWrapper {
    width: 80px;
    height: 80px;
    border-radius: 100%;

    img {
      width: 80px;
      height: 80px;
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
