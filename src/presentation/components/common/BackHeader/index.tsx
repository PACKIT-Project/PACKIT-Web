import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Icon from '../Icon';
import COLOR from '@styles/colors';

type BackHeaderType = {
  text?: string;
  color?: string;
  type?: string;
};

const BackHeader = ({ text, color, type }: BackHeaderType) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    if (type === 'tripDetail') {
      navigate('/', { replace: true });
    } else {
      navigate(-1);
    }
  };

  return (
    <BackHeaderWrapper color={color}>
      <Icon icon="Arrow" fill={color} onClick={handleClickBack} />
      <div className="text">{text}</div>
      <div className="emptySpace"></div>
    </BackHeaderWrapper>
  );
};

const BackHeaderWrapper = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;

  color: ${({ color }) => (color ? color : COLOR.GRAY_900)};
  font-size: 18px;
  font-weight: 700;
  line-height: 140%;

  cursor: pointer;
  .text {
    flex-grow: 1;
    text-align: center;
  }
  .emptySpace {
    width: 24px;
    height: 25px;
    visibility: hidden;
  }
`;
export default BackHeader;
