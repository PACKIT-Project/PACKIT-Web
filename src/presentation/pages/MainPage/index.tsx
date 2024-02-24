import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import COLOR from '@styles/colors';
import ListNotExist from '@components/MainPage/ListNotExist';
import { useLocation } from 'react-router-dom';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import DoubleCheckCompleteModal from '@components/domain/DoubleCheckComplete';
import BottomNav from '@components/common/BottomNav';
import useGetMyTravel from '@hooks/queries/travel/useGetMyTravel';
import Header from '@components/MainPage/components/Header';
import TripMain from '@components/MainPage/components/TripMain';
import { motion } from 'framer-motion';

const MainPage = () => {
  const { state: locationState } = useLocation();
  const { data: travelData } = useGetMyTravel('예정된 여행');

  const {
    isShowModal: isShowCompleteModal,
    toggleModal: toggleCompleteModal,
    closeModal: closeCompleteModal,
  } = useModal();

  useEffect(() => {
    if (locationState && locationState.state === 'remind_check_done') {
      toggleCompleteModal();
    }
  }, []);

  return (
    <>
      {travelData && (
        <MainPageWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          {travelData.length > 0 ? <TripMain /> : <ListNotExist />}
          <BottomNav />
          <Modal isVisible={isShowCompleteModal} closeModal={closeCompleteModal}>
            <DoubleCheckCompleteModal closeModal={closeCompleteModal} />
          </Modal>
        </MainPageWrapper>
      )}
    </>
  );
};

const MainPageWrapper = styled(motion.div)`
  height: calc(100% - 84px);
  background-color: ${COLOR.WHITE};
`;

export default MainPage;
