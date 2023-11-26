import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackHeader from '@components/common/BackHeader';
import BottomButton from '@components/common/BottomButton';
import Icon from '@components/common/Icon';
import Spacing from '@components/common/Spacing';
import COLOR from '@styles/colors';
import { TERMS } from '@constants';
import { TYPOGRAPHY } from '@styles/fonts';

const TermsPage = () => {
  const navigate = useNavigate();
  const [agreeList, setAgreeList] = useState<
    { term: string; isRequired: boolean }[]
  >([]);

  const handleClickAllCheck = () => {
    if (agreeList.length === 3) {
      setAgreeList([]);
    } else {
      setAgreeList(TERMS);
    }
  };

  const handleClickTerm = (termInfo: { term: string; isRequired: boolean }) => {
    const terms = agreeList.map((e) => e.term);
    if (terms.includes(termInfo.term)) {
      setAgreeList((prev) => prev.filter((e) => e.term !== termInfo.term));
    } else {
      setAgreeList((prev) => [...prev, termInfo]);
    }
  };

  const handleClickStart = () => {
    navigate('/onboarding/profile');
  };

  return (
    <TermsPageWrapper>
      <Inner>
        <BackHeader />
        <TextBox>서비스 이용을 위해</TextBox>
        <TextBox>이용약관 동의가 필요합니다.</TextBox>
        <Spacing size={60} />
        <div className="allCheck" onClick={handleClickAllCheck}>
          <Icon
            icon={agreeList.length === 3 ? 'CheckedBox' : 'UnCheckedBox'}
            cursor={true}
          />
          전체동의
        </div>
        <div className="hr" />
        <Spacing size={18} />
        <TermsWrapper>
          {TERMS.map((termInfo) => (
            <div className="termContainer" key={termInfo.term}>
              <div className="term" onClick={() => handleClickTerm(termInfo)}>
                <Icon
                  icon="Checked"
                  fill={
                    agreeList.map((e) => e.term).includes(termInfo.term)
                      ? COLOR.MAIN_BLUE
                      : COLOR.UI_GRAY_3
                  }
                  cursor={true}
                />
                {termInfo.isRequired ? '(필수)' : '(선택)'} {termInfo.term}
              </div>
              <Icon
                icon="Chevron"
                fill={COLOR.UI_GRAY_4}
                cursor={true}
                onClick={() => navigate(`/onboarding/terms/${termInfo.term}`)}
              />
            </div>
          ))}
        </TermsWrapper>
        <BottomButton
          text="동의하고 시작하기"
          onClick={handleClickStart}
          disabled={agreeList.filter((term) => term.isRequired).length < 2}
        />
      </Inner>
    </TermsPageWrapper>
  );
};

export default TermsPage;

const TermsPageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 16px;

  background-color: ${COLOR.WHITE};

  box-sizing: border-box;
`;

const Inner = styled.div`
  padding: 0 10px;

  .allCheck {
    display: flex;
    flex-direction: row;
    gap: 11px;
    align-items: center;
    padding-bottom: 20px;

    color: ${COLOR.COOL_GRAY_500};
    ${TYPOGRAPHY.TITLE.DISPLAY2_SEMIBOLD}

    cursor: pointer;
  }

  .hr {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: calc(100% - 30px);
    height: 1px;

    background-color: #e9ecf0;
  }
`;

const TextBox = styled.div`
  color: ${COLOR.COOL_GRAY_400};
  ${TYPOGRAPHY.TITLE.DISPLAY1_BOLD};
`;

const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;

  .termContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .term {
      display: flex;
      flex-direction: row;
      gap: 9px;

      color: ${COLOR.COOL_GRAY_500};
      ${TYPOGRAPHY.TITLE.SUBHEADING1_SEMIBOLD}

      cursor: pointer;
    }
  }
`;
