import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import COLOR from '@styles/colors';
import ListExist from '@components/MainPage/ListExist';
import ListNotExist from '@components/MainPage/ListNotExist';
import { useDispatch } from 'react-redux';
import { initializeCreateTripInfo } from '../../../application/reducer/slices/createTrip/createTripSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import Toast from '@components/common/Toast';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import EmailAuthModal from '@components/MainPage/components/EmailAuthModal';
import DoubleCheckCompleteModal from '@components/domain/DoubleCheckComplete';
import BottomNav from '@components/common/BottomNav';
import useGetMyTravel from '@hooks/queries/travel/useGetMyTravel';
import Header from '@components/MainPage/components/Header';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state: locationState } = useLocation();
  const { closeModal: popupCloseModal } = useModal();
  const { data: travelData } = useGetMyTravel('예정된 여행');

  const {
    isShowModal: isShowEmailAuth,
    toggleModal: toggleEmailAuth,
    closeModal: closeEmailAuth,
  } = useModal();
  const {
    isShowModal: isShowEmailInput,
    toggleModal: toggleEmailInput,
    closeModal: closeEmailInput,
  } = useModal();

  const {
    isShowModal: isShowCompleteModal,
    toggleModal: toggleCompleteModal,
    closeModal: closeCompleteModal,
  } = useModal();

  useEffect(() => {
    dispatch(initializeCreateTripInfo());
    if (localStorage.getItem('state') === 'NEW_MEMBER') {
      toggleEmailAuth();
    }
  }, []);

  const handlePopupClose = () => {
    popupCloseModal();
    if (locationState && locationState.state === 'delete_done') {
      navigate('.', { state: {} });
    }
  };

  useEffect(() => {
    if (locationState && locationState.state === 'remind_check_done') {
      toggleCompleteModal();
    }
  }, []);

  return (
    <>
      {travelData && (
        <MainPageWrapper>
          <Header />
          {travelData.length > 0 ? <ListExist /> : <ListNotExist />}
          {locationState && locationState.state === 'delete_done' && (
            <Toast close={handlePopupClose}>리스트 삭제 완료</Toast>
          )}
          <BottomNav />
          <Modal isVisible={isShowEmailInput} closeModal={closeEmailInput}>
            <EmailAuthModal closeModal={closeEmailInput} />
          </Modal>
          <Modal isVisible={isShowCompleteModal} closeModal={closeCompleteModal}>
            <DoubleCheckCompleteModal closeModal={closeCompleteModal} />
          </Modal>
        </MainPageWrapper>
      )}
    </>
  );
};

const MainPageWrapper = styled.div`
  height: calc(100% - 129px);
  background-color: ${COLOR.WHITE};
`;

export default MainPage;
