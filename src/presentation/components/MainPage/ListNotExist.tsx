import React from 'react';
import { styled } from 'styled-components';
import Icon from '@components/common/Icon';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';

const ListNotExist = () => {
  return (
    <ListNotExistWrapper>
      <div className="content">
        <Icon icon="GraphicTravel" />
        새로운 여행 준비를 시작해보세요.
      </div>
    </ListNotExistWrapper>
  );
};

const ListNotExistWrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 0 20px;
  .content {
    position: absolute;
    top: calc(30% - 50px);
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    white-space: nowrap;

    color: ${COLOR.UI_GRAY_4};
    ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
  }
`;

export default ListNotExist;
