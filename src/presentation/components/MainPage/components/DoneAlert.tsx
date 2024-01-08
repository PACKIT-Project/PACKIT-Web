import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CircleProgress } from 'react-gradient-progress';
import COLOR from '@styles/colors';
import Spacing from '@components/common/Spacing';
import { TYPOGRAPHY } from '@styles/fonts';

const DoneAlert = ({ closeModal }: { closeModal: () => void }) => {
  const [percentage, setPercentage] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= 100 ? newPercentage : 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <DoneAlertWrapper>
      <CircleProgress
        percentage={percentage}
        strokeWidth={6}
        primaryColor={['#0EA8FF', '#28FFCB']}
        width={90}
        fontSize={16}
        fontColor={COLOR.COOL_GRAY_300}
      />
      <Spacing size={26} />
      <div className="textWrapper">
        <div className="mainText">여행 전 할 일을 모두 완료했어요</div>
        <div className="subText">여행 친구들에게 완료 알림을 보내보세요.</div>
      </div>
      <Spacing size={57} />
      <div className="buttonWrapper">
        <button className="later" onClick={closeModal}>
          나중에
        </button>
        <button className="notification" onClick={closeModal}>
          알림 보내기
        </button>
      </div>
    </DoneAlertWrapper>
  );
};

export default DoneAlert;

const DoneAlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 20px 20px;
  width: 100%;
  font-weight: 600;
  .textWrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .mainText {
      color: ${COLOR.COOL_GRAY_400};
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 132%;
      letter-spacing: -0.5px;
    }
    .subText {
      ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
      color: ${COLOR.COOL_GRAY_100};
    }
  }

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
    button {
      width: 100%;
      border: none;
      outline: none;
      border-radius: 8px;
      padding: 14px 0 15px 0;
      ${TYPOGRAPHY.TEXT.BODY2_BOLD};

      &.later {
        background-color: ${COLOR.UI_GRAY_2};
        color: ${COLOR.COOL_GRAY_100};
      }
      &.notification {
        background-color: ${COLOR.MAIN_BLUE};
        color: ${COLOR.MAIN_WHITE};
      }
    }
  }
`;
