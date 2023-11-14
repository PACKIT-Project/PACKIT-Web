import React, { useState } from 'react';
import { styled } from 'styled-components';
import TextBox from './components/TextBox';
import Spacing from '../common/Spacing';
import BottomButton from '../common/BottomButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCreateTripState } from '../../../application/reducer/slices/createTrip/createTripSlice';
import Icon from '@components/common/Icon';
import COLOR from '@styles/colors';
import useModal from '@hooks/useModal';
import BottomSheet from '@components/common/BottomSheet';
import MemberNumModal from './components/MemberNumModal';

const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isShowModal, openModal, closeModal } = useModal();
  const [team, setTeam] = useState(''); // 여러명이서 떠나면 인원 체크 바텀시트를 띄우기 위해

  const teamInfo = [
    { key: 'User', value: '혼자 떠나요!' },
    { key: 'Team', value: '여러명이서 떠나요!' },
  ];

  const handleClickNextBtn = () => {
    if (team === 'User') {
      dispatch(
        changeCreateTripState({
          type: 'memberNum',
          value: 1,
        })
      );
      navigate('/trip-create/4');
    } else {
      openModal();
    }
  };

  return (
    <StepWrapper>
      <TextBox>
        여행 인원을
        <br />
        선택해주세요
      </TextBox>
      <Spacing size={38} />
      <ButtonWrapper>
        {teamInfo.map((isTeam) => (
          <Button
            key={isTeam.key}
            onClick={() => setTeam(isTeam.key)}
            clicked={isTeam.key === team}
          >
            <Icon icon={isTeam.key} />
            {isTeam.value}
          </Button>
        ))}
      </ButtonWrapper>
      <BottomButton
        disabled={team === ''}
        text="다음"
        onClick={handleClickNextBtn}
      />
      {isShowModal && (
        <BottomSheet isVisible={isShowModal} closeModal={closeModal}>
          <MemberNumModal closeModal={closeModal} />
        </BottomSheet>
      )}
    </StepWrapper>
  );
};

const StepWrapper = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Button = styled.button<{ clicked: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 16px 0;

  border-radius: 8px;
  border: 2px solid ${({ clicked }) => (clicked ? COLOR.MAIN_BLUE : COLOR.GRAY_100)};
  background: #f7f9fc;

  color: ${COLOR.GRAY_800};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export default Step3;
