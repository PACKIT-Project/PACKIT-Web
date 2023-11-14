import Icon from '@components/common/Icon';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Icon icon="Notification" cursor={true} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 16px;
`;
