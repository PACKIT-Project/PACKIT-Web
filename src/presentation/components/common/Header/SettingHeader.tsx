import React from 'react';
import { styled } from 'styled-components';
import Icon from '../Icon';
import { useNavigate } from 'react-router-dom';

const SettingHeader = () => {
  const navigate = useNavigate();
  return (
    <SettingHeaderWrapper>
      <Icon icon="Setting" cursor={true} onClick={() => navigate('/setting')} />
    </SettingHeaderWrapper>
  );
};

const SettingHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 16px;
`;
export default SettingHeader;
