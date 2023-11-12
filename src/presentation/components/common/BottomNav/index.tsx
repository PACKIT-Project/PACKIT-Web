import React from 'react';
import COLOR from '@styles/colors';
import styled from 'styled-components';
import Icon from '../Icon';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const routerObj = [
    { key: 'Home', value: '홈', clicked: pathname === '/', path: '/' },
    { key: 'Feed', value: '피드', clicked: pathname === '/feed', path: '/feed' },
    { key: 'User', value: '내 여행', clicked: pathname === '/my', path: '/my' },
  ];

  return (
    <BottomNavWrapper>
      {routerObj.map((route) => (
        <IconWrapper key={route.key} onClick={() => navigate(route.path)}>
          <Icon icon={route.key} fill={route.clicked ? '#191F28' : '#C4CAD0'} />
          <div className={route.clicked ? 'current path' : 'path'}>
            {route.value}
          </div>
        </IconWrapper>
      ))}
      <PlusButtonWrapper>
        <PlusButton>
          <Icon icon="Plus" width={36} height={36} fill="#FFF" />
        </PlusButton>
      </PlusButtonWrapper>
    </BottomNavWrapper>
  );
};

export default BottomNav;

const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 84px;
  padding: 9px 120px 9px 48px;
  box-sizing: border-box;

  background-color: ${COLOR.WHITE};

  @media (min-width: 1024px) {
    width: 390px;
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

  cursor: pointer;
`;
