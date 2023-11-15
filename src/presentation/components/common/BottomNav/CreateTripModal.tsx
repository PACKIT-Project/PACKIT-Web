import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Text from '../Text';
import COLOR from '@styles/colors';
import { useNavigate } from 'react-router-dom';

const CreateTripModal = ({
  closeModal,
  openCodeModal,
}: {
  closeModal: () => void;
  openCodeModal: () => void;
}) => {
  const navigate = useNavigate();

  const handleClickCodeModal = () => {
    closeModal();
    openCodeModal();
  };

  return (
    <CreateTripModalWrapper>
      <ContentButton onClick={() => navigate('/trip-create/1')}>
        <Icon icon="CreateTrip" cursor={true} />
        <Text
          text="새로운 여행 생성"
          fontSize={17}
          fontWeight={600}
          lineHeight="18px"
          color={COLOR.COOL_GRAY_200}
        />
      </ContentButton>
      <hr />
      <ContentButton onClick={handleClickCodeModal}>
        <Icon icon="Key" cursor={true} />
        <div className="text-wrapper">
          <Text
            text="초대코드로 참여"
            fontSize={17}
            fontWeight={600}
            lineHeight="18px"
            color={COLOR.COOL_GRAY_200}
          />
          <Text
            text="공유받은 코드 입력하여 그룹 참여"
            fontSize={13}
            fontWeight={500}
            lineHeight="18px"
            color={COLOR.UI_GRAY_4}
          />
        </div>
      </ContentButton>
    </CreateTripModalWrapper>
  );
};

export default CreateTripModal;

const CreateTripModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  padding: 25px 0;

  hr {
    width: 100%;
    height: 1px;
    margin: 0;

    border: 0;
    background-color: #e9ecf0;
  }
`;

const ContentButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;

  outline: none;
  border: none;
  background-color: transparent;

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1px;
    text-align: left;
  }
`;
