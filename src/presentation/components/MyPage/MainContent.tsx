import React, { useState } from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import Trip from './Trip';

const MainContent = () => {
  const nav = ['내 여행', '게시글'];
  const [currentState, setCurrentState] = useState('내 여행');

  return (
    <MainContentWrapper>
      <div className="navWrapper">
        {nav.map((menu) => (
          <div
            className={`menu ${currentState === menu && 'clicked'}`}
            key={menu}
            onClick={() => setCurrentState(menu)}
          >
            {menu}
          </div>
        ))}
      </div>
      {currentState === '내 여행' && <Trip />}
    </MainContentWrapper>
  );
};

export default MainContent;

const MainContentWrapper = styled.div`
  height: calc(100% - 209px);
  overflow-y: auto;

  .navWrapper {
    ${TYPOGRAPHY.TEXT.BODY5_SEMIBOLD};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 40px;
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      color: ${COLOR.UI_GRAY_3};
      border-bottom: 1px solid ${COLOR.UI_GRAY_3};
      cursor: pointer;
    }
    .clicked {
      color: ${COLOR.COOL_GRAY_300};
      border-bottom: 1px solid ${COLOR.COOL_GRAY_300};
    }
  }
`;
