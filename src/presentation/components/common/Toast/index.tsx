import COLOR from '@styles/colors';
import React, { useEffect } from 'react';
import { keyframes, styled } from 'styled-components';
import Icon from '../Icon';

const fadeInDown = keyframes`
   0% {
        transform: translate3d(0,-10px,0) translate(-50%, -50%);
    }

    50% {
        transform: translate3d(0,10px,0) translate(-50%, -50%);
        opacity: 1
    }

    100%{
      transform: translate3d(0,-10px,0) translate(-50%, -50%);
      opacity: 0;
    }
`;

const Toast = ({
  children,
  close,
}: {
  children: React.ReactNode;
  close: () => void;
}) => {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 2000);
  }, []);

  return (
    <ToastWrapper>
      <Icon icon="CircleCheckFill" />
      {children}
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50%;

  display: flex;
  flex-direction: row;
  gap: 16px;

  width: 80%;
  box-sizing: border-box;

  border-radius: 8px;
  background-color: ${COLOR.COOL_GRAY_400};
  padding: 18px 24px;

  color: ${COLOR.WHITE};
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.22);

  align-items: center;
  white-space: nowrap;

  animation: ${fadeInDown} 2s forwards;
  z-index: 1000;
`;

export default Toast;
