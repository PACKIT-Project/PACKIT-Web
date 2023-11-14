import React from 'react';
import COLOR from '@styles/colors';
import styled from 'styled-components';
import Icon from '../Icon';
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from '@hooks/useModal';
import BottomSheet from '../BottomSheet';
import CreateTripModal from './CreateTripModal';

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isShowModal, openModal, closeModal } = useModal();

  const routerObj = [
    { key: 'Home', value: '홈', clicked: pathname === '/', path: '/' },
    { key: 'Feed', value: '피드', clicked: pathname === '/feed', path: '/feed' },
    { key: 'My', value: '내 여행', clicked: pathname === '/my', path: '/my' },
  ];

  return (
    <BottomNavWrapper>
      <div className="container">
        <>
          {routerObj.map((route) => (
            <IconWrapper key={route.key} onClick={() => navigate(route.path)}>
              <Icon icon={route.key} fill={route.clicked ? '#191F28' : '#C4CAD0'} />
              <div className={route.clicked ? 'current path' : 'path'}>
                {route.value}
              </div>
            </IconWrapper>
          ))}
        </>

        <PlusButtonWrapper>
          <PlusButton onClick={openModal}>
            <Icon icon="Plus" width={36} height={36} fill="#FFF" cursor={true} />
          </PlusButton>
        </PlusButtonWrapper>
      </div>
      {isShowModal && (
        <BottomSheet isVisible={isShowModal} closeModal={closeModal}>
          <CreateTripModal />
        </BottomSheet>
      )}
    </BottomNavWrapper>
  );
};

export default BottomNav;

const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;

  width: 100%;
  height: 84px;
  background-color: #fff;
  box-shadow: 0px -4px 16px 0px rgba(0, 0, 0, 0.05);

  .container {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 9px 120px 9px 48px;
    margin: auto;
    box-sizing: border-box;

    background-color: ${COLOR.WHITE};
    @media (min-width: 1024px) {
      width: 390px;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  cursor: pointer;
  .path {
    color: #6b7684;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: normal;
  }
  .current {
    color: #191f28;
  }
`;

const PlusButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: -20px;

  padding: 7px;
  background-color: ${COLOR.WHITE};
  border-radius: 50%;
`;

const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 66px;
  height: 66px;
  background-color: ${COLOR.MAIN_BLUE};
  border-radius: 50%;
  outline: none;
  border: none;
`;
