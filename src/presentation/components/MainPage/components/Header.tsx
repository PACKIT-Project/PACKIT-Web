import React from 'react';
import { styled } from 'styled-components';
import Icon from '@components/common/Icon';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <Icon icon="Logo" />
      <div className="user-side">
        <Link to="/my-template">
          <Icon icon="FilledHeart" color="#8B95A1" fill="#8B95A1" />
        </Link>
        <Link to="/my">
          <Icon icon="Profile" />
        </Link>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 30px 20px 10px;
  background-color: transparent;
  .user-side {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
`;
export default Header;
