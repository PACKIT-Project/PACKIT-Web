import React from "react";
import Button from "@components/common/Button";
import CustomCalendar from "@components/common/Calendar";
import CalendarRange from "@components/common/CalendarRange";
import Spacing from "@components/common/Spacing";
import Text from "@components/common/Text";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import { RootState } from "@store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CalendarModal = ({ closeModal, setClicked }: any) => {
  const navigate = useNavigate();
  const { tripRange } = useSelector((state: RootState) => state.createTrip);
  const handleClickTripRange = () => {
    closeModal();
    setClicked();
    navigate("/trip"); // 여행 상세 페이지로 이동
  };
  return (
    <CalendarModalWrapper>
      <Text
        text="일정 선택"
        fontSize={20}
        fontWeight={600}
        lineHeight="24px"
        color={COLOR.GRAY_900}
      />
      <Spacing size={20} />
      <CalendarWrapper>
        <CustomCalendar />
        <Spacing size={23} />
        <CalendarRange />
        <Spacing size={50} />
      </CalendarWrapper>
      <Button
        width="100%"
        radius={12}
        padding="20px"
        background={COLOR.MAIN_GREEN}
        border="none"
        onClick={handleClickTripRange}
        disabled={tripRange?.start === "" || tripRange?.end === ""}
      >
        <Text
          text="선택하기"
          color={COLOR.WHITE}
          fontSize={18}
          fontWeight={600}
          lineHeight="18px"
        />
      </Button>
    </CalendarModalWrapper>
  );
};

const CalendarModalWrapper = styled.div`
  background-color: ${COLOR.WHITE};
`;
const CalendarWrapper = styled.div`
  padding: 16px;
`;
export default CalendarModal;
