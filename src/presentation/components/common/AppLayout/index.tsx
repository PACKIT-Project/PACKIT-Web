import React from 'react';
import COLOR from '@styles/colors';
import styled from 'styled-components';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default AppLayout;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 16px;

  box-sizing: border-box;
  background-color: ${COLOR.WHITE};
`;
