import React from 'react';
import COLOR from '@styles/colors';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import BackHeader from '@components/common/BackHeader';
import Spacing from '@components/common/Spacing';

const CreateComplatePage = () => {
  const navigate = useNavigate();
  const handleClickStart = () => {
    navigate('/');
  };
  return (
    <CreateComplateWrapper>
      <BackHeader />
      <TextWrapper>
        <div>일행을 초대해주세요!</div>
        <div className="sub-text">
          총 <strong>8명</strong>까지 초대가 가능합니다
          <br />
          동행자에게 초대코드를 공유해주세요
        </div>
      </TextWrapper>
      <Spacing size={30} />
      <Button onClick={handleClickStart}>참여코드 공유하기</Button>
    </CreateComplateWrapper>
  );
};

const CreateComplateWrapper = styled.div`
  padding: 0 20px;
  background-color: ${COLOR.MAIN_WHITE};
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: #232527;
  font-size: 24px;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: -0.5px;

  .sub-text {
    color: #71757e;
    font-size: 18px;
    font-weight: 600;
    line-height: 137%;
    strong {
      color: ${COLOR.MAIN_BLUE};
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 8px;
  background-color: ${COLOR.MAIN_BLUE};
  outline: none;

  color: ${COLOR.WHITE};
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;
export default CreateComplatePage;
