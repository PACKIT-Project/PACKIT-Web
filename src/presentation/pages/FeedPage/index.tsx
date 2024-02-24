import React from 'react';
import styled from 'styled-components';
import BottomNav from '@components/common/BottomNav';
import COLOR from '@styles/colors';
import Icon from '@components/common/Icon';
import { motion } from 'framer-motion';

const FeedPage = () => {
  return (
    <FeedPageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        <Icon icon="FeedMessage" />
        <div>
          현지 정보를 주고받는 피드 기능은
          <br />
          업데이트 예정입니다.
        </div>
      </ContentWrapper>
      <BottomNav />
    </FeedPageWrapper>
  );
};

export default FeedPage;

const FeedPageWrapper = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  background-color: ${COLOR.WHITE};
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);

  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  align-items: center;

  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: ${COLOR.COOL_GRAY_100};
`;
