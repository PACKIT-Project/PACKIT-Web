import React from 'react';
import styled from 'styled-components';
import BackHeader from '@components/common/BackHeader';
import { useParams } from 'react-router-dom';
import COLOR from '@styles/colors';
import Privacy from './components/Privacy';

const TermsDetailPage = () => {
  const { detail } = useParams();

  return (
    <PageContainer>
      <BackHeader />
      <div className="title">
        PACKIT
        <div className="detail">{detail}</div>
      </div>
      {detail === '개인정보처리방침' ? <Privacy /> : null}
    </PageContainer>
  );
};

export default TermsDetailPage;

const PageContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${COLOR.WHITE};
  .title {
    display: flex;
    flex-direction: row;
    gap: 6px;
    color: ${COLOR.MAIN_BLUE};
    font-size: 18px;
    font-weight: 700;
    line-height: 20.5px;
    letter-spacing: -0.5px;

    .detail {
      color: ${COLOR.COOL_GRAY_300};
    }
  }
`;
