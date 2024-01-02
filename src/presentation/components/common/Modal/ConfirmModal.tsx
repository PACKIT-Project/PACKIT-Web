import React from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import Spacing from '../Spacing';
import { TYPOGRAPHY } from '@styles/fonts';

const ConfirmModal = ({
  title,
  explainText,
  closeModal,
  onClick,
  yesText,
}: {
  title: string;
  explainText?: string;
  closeModal: () => void;
  onClick: () => void;
  yesText: string;
}) => {
  return (
    <ConfirmModalWrapper>
      {title}
      <Spacing size={9} />
      <div className="explainText">{explainText}</div>
      <Spacing size={47} />
      <ButtonWrapper>
        <button className="no" onClick={closeModal}>
          취소
        </button>
        <button className="yes" onClick={onClick}>
          {yesText}
        </button>
      </ButtonWrapper>
    </ConfirmModalWrapper>
  );
};

export default ConfirmModal;

const ConfirmModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 56px;
  text-align: center;

  border-radius: 8px;
  background-color: ${COLOR.MAIN_WHITE};

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${COLOR.COOL_GRAY_300};

  .explainText {
    ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
    color: ${COLOR.COOL_GRAY_200};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 86px;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;

    &.no {
      color: ${COLOR.COOL_GRAY_100};
    }
    &.yes {
      color: ${COLOR.ALERT_WARNING};
    }
  }
`;
