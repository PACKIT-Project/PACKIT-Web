import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import BackHeader from '../../components/common/BackHeader';
import PageIndicator from '../../components/common/PageIndicator';
import Step1 from '../../components/TripCreatePage/Step1';
import Step2 from '../../components/TripCreatePage/Step2';
import Step3 from '../../components/TripCreatePage/Step3';

const TripCreatePage = () => {
  const { step } = useParams();
  const pageComponents = [<Step1 />, <Step2 />, <Step3 />];
  return (
    <TripCreateTemplate>
      <div className="topWrapper">
        <BackHeader />
        <div className="pageInfo">
          <PageIndicator />
        </div>
      </div>

      {pageComponents[Number(step) - 1]}
    </TripCreateTemplate>
  );
};

const TripCreateTemplate = styled.div`
  padding: 0 20px;

  .topWrapper {
    position: relative;
    .pageInfo {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
`;
export default TripCreatePage;
