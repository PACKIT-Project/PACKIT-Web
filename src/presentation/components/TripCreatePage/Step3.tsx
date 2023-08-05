import React from "react";
import { styled } from "styled-components";
import CustomCalendar from "../common/Calendar";
import TextBox from "./components/TextBox";
import Spacing from "../common/Spacing";
import BottomButton from "../common/BottomButton";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { useNavigate } from "react-router-dom";
import COLOR from "@styles/colors";

const Step3 = () => {
  const navigate = useNavigate();
  const { tripRange } = useSelector((state: RootState) => state.createTrip);

  const handleClickNextBtn = () => {
    navigate("/trip-create/4");
  };

  return (
    <StepWrapper>
      <Spacing size={28} />
      <TextBox>언제 여행을 떠나시나요?</TextBox>
      <Spacing size={26} />
      <CalendarWrapper>
        <CustomCalendar />
        <Spacing size={16} />
      </CalendarWrapper>
      <Spacing size={20} />
      <TripRangeWrapper>
        <div className="range-box">
          <span>부터</span>
          <div className="range-text">{tripRange?.start}</div>
        </div>
        <div className="range-box">
          <span>까지</span>
          <div className="range-text">{tripRange?.end}</div>
        </div>
      </TripRangeWrapper>
      <BottomButton
        disabled={tripRange?.start === "" || tripRange?.end === ""}
        text="다음"
        onClick={handleClickNextBtn}
        textButton={true}
        textButtonOnClick={() => {}}
        textButtonChild="다음에 할래요"
      />
    </StepWrapper>
  );
};

const StepWrapper = styled.div``;

const CalendarWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dbdbdb;
`;
const TripRangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  .range-box {
    position: relative;
    width: 100%;
    height: 40px;
    border: 1px solid ${COLOR.GRAY_500};
    border-radius: 8px;

    background-color: ${COLOR.WHITE};
    text-align: center;

    span {
      position: absolute;
      top: -5px;
      left: 20%;
      transform: translateX(-50%);

      padding: 0 4px;

      background-color: ${COLOR.WHITE};
      color: ${COLOR.GRAY_600};
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  .range-text {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    color: ${COLOR.GRAY_700};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export default Step3;