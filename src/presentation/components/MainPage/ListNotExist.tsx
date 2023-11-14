import React from 'react';
import { styled } from 'styled-components';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import COLOR from '@styles/colors';

const ListNotExist = () => {
  return (
    <ListNotExistWrapper>
      <div className="content">
        <Text
          text="새로운 여행 준비를 시작해보세요."
          color={COLOR.COOL_GRAY_300}
          fontSize={16}
          fontWeight={500}
          lineHeight="132%"
        />
        <Icon icon="GraphicTravel" />
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
    gap: 18px;
    text-align: center;

    white-space: nowrap;
    letter-spacing: -0.5px;
  }
`;

export default ListNotExist;
