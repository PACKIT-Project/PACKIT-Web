import React, { useState } from 'react';
import BottomButton from '@components/common/BottomButton';
import Icon from '@components/common/Icon';
import Spacing from '@components/common/Spacing';
import COLOR from '@styles/colors';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeCreateTripState } from '@reducer/slices/createTrip/createTripSlice';
import { useNavigate } from 'react-router-dom';

const MemberNumModal = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [memberNum, setMemberNum] = useState(1);
  const handleClickMinus = () => {
    if (memberNum > 1) {
      setMemberNum((prev) => prev - 1);
    }
  };
  const handleClickPlus = () => {
    if (memberNum < 8) {
      setMemberNum((prev) => prev + 1);
    }
  };
  const handleSelectMemberNum = () => {
    dispatch(changeCreateTripState({ type: 'memberNum', value: memberNum }));
    closeModal();
    navigate('/trip-create/4');
  };

  return (
    <MemberNumWrapper>
      <TextWrapper>
        <div className="title">인원 선택</div>
        <div className="explain">인원은 최대 8명까지 초대 가능합니다</div>
      </TextWrapper>
      <Spacing size={30} />
      <NumberWrapper>
        <Icon
          icon="Minus"
          onClick={handleClickMinus}
          cursor={memberNum > 1 ? true : false}
          fill={memberNum > 1 ? '#494949' : COLOR.UI_GRAY_3}
        />
        <div className="number">{memberNum}</div>
        <Icon
          icon="Plus"
          onClick={handleClickPlus}
          cursor={memberNum < 8 ? true : false}
          fill={memberNum < 8 ? '#494949' : COLOR.UI_GRAY_3}
        />
      </NumberWrapper>
      <Spacing size={30} />
      <BottomButton text="선택" onClick={handleSelectMemberNum} />
    </MemberNumWrapper>
  );
};

export default MemberNumModal;

const MemberNumWrapper = styled.div`
  height: calc(33vh - 60px);
  padding: 10px 0;
  background-color: ${COLOR.WHITE};
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .title {
    color: #191f28;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }
  .explain {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
  }
`;

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 44px;
  justify-content: center;
  align-items: center;

  .number {
    color: ${COLOR.MAIN_BLUE};
    font-size: 36px;
    font-weight: 700;
    line-height: 28px;
  }
`;
