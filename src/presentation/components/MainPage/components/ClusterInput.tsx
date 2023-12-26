import React, { useState } from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import { postCluster } from '@api/cluster';

const ClusterInput = ({
  travelId,
  closeModal,
  refetch,
}: {
  travelId: number;
  closeModal: () => void;
  refetch: any;
}) => {
  const [cluster, setCluster] = useState('');

  const handleClickAddCluster = async () => {
    const res = await postCluster({ travelId, title: cluster });
    if (res.message === '새로운 할 일 그룹 생성에 성공했습니다.') {
      closeModal();
      refetch();
    }
  };

  return (
    <ClusterInputWrapper>
      <input
        type="text"
        value={cluster}
        onChange={(e) => setCluster(e.target.value)}
        placeholder="추가할 할 일 그룹의 제목을 입력해주세요"
      />
      <button onClick={handleClickAddCluster}>추가</button>
    </ClusterInputWrapper>
  );
};

export default ClusterInput;

const ClusterInputWrapper = styled.div`
  width: 100%;
  padding: 10px 0;

  input {
    width: 100%;
    ${TYPOGRAPHY.TEXT.BODY1_MEDIUM};
    color: ${COLOR.COOL_GRAY_400};
    border: none;
    outline: none;
    margin-bottom: 25px;
    &::placeholder {
      color: ${COLOR.UI_GRAY_3};
    }
  }
  button {
    float: right;
    padding: 5.5px 11.5px;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${COLOR.COOL_GRAY_100};
    ${TYPOGRAPHY.TEXT.BODY6_MEDIUM};
    color: ${COLOR.MAIN_WHITE};
  }

  &::after {
    display: block;
    clear: both;
    content: '';
  }
`;
