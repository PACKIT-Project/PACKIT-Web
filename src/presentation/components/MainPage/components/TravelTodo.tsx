import React, { useEffect, useState } from 'react';
import useGetTravelTodoList from '../../../../infrastructure/queries/travel/useGetTravelTodoList';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import Icon from '@components/common/Icon';
import { TYPOGRAPHY } from '@styles/fonts';
import Spacing from '@components/common/Spacing';
import useModal from '@hooks/useModal';
import BottomSheet from '@components/common/BottomSheet';
import ClusterInput from './ClusterInput';
import { postCategory } from '@api/category';

const TravelTodo = ({
  travelId,
  memberId,
}: {
  travelId: number;
  memberId?: number;
}) => {
  const {
    isShowModal: isShowClusterInputBottomSheet,
    openModal: openClusterInputBottomSheet,
    closeModal: closeClusterInputBottomSheet,
  } = useModal();

  const { data, isLoading, refetch } = useGetTravelTodoList(travelId, memberId);
  const [currClusterId, setCurrClusterId] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmitCategory = async (e: any) => {
    e.preventDefault();
    const res = await postCategory({ clusterId: currClusterId, title: category });
    if (res.message === '새로운 할 일 생성에 성공했습니다.') {
      refetch();
      setCategory('');
    }
  };

  useEffect(() => {
    if (data && data.data?.travelClusterList) {
      setCurrClusterId(data.data?.travelClusterList[0].clusterId);
    }
  }, [data, memberId]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <TravelTodoWrapper>
      {data && (
        <>
          <ClusterList>
            <div className="clusterContainer">
              {data.data.travelClusterList?.map((cluster: any) => (
                <div
                  className={`cluster ${
                    currClusterId === cluster.clusterId && 'clicked'
                  }`}
                  key={cluster.clusterId}
                  onClick={() => setCurrClusterId(cluster.clusterId)}
                >
                  {cluster.title}
                  <span
                    className={
                      currClusterId === cluster.clusterId ? 'clickedLength' : ''
                    }
                  >
                    {cluster.travelCategoryList.length}
                  </span>
                </div>
              ))}
            </div>
            <button onClick={openClusterInputBottomSheet}>
              <Icon
                icon="Plus"
                cursor={true}
                fill={COLOR.MAIN_WHITE}
                width={14}
                height={14}
              />
            </button>
          </ClusterList>
          <Spacing size={15} />
          <TodoListWrapper>
            {data.data?.travelClusterList
              ?.filter((cluster: any) => cluster.clusterId === currClusterId)[0]
              ?.travelCategoryList.map((category: any) => (
                <div key={category.categoryId}>
                  <CategoryTitle>
                    <div className="categotyInfo">
                      <span className="title">{category.title}</span>
                      <span className="checkCnt">{`${category.checkedItemNum}/${category.allItemNum}`}</span>
                    </div>
                    <button>편집</button>
                  </CategoryTitle>
                  <TodoList>
                    {category.travelItemList.map((item: any) => (
                      <div className="todo" key={item.itemId}>
                        {item.title}
                      </div>
                    ))}
                  </TodoList>
                </div>
              ))}
            <div className="itemInput">
              <Icon icon="Plus" width={20} height={20} />
              <form onSubmit={handleSubmitCategory}>
                <input
                  type="text"
                  placeholder="항목 추가하기"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </form>
            </div>
          </TodoListWrapper>
        </>
      )}
      {isShowClusterInputBottomSheet && (
        <BottomSheet
          isVisible={isShowClusterInputBottomSheet}
          closeModal={closeClusterInputBottomSheet}
        >
          <ClusterInput
            travelId={travelId}
            closeModal={closeClusterInputBottomSheet}
            refetch={refetch}
          />
        </BottomSheet>
      )}
    </TravelTodoWrapper>
  );
};

export default TravelTodo;

const TravelTodoWrapper = styled.div`
  padding: 0 15px;
`;

const ClusterList = styled.div`
  display: flex;
  flex-direction: row;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: ${COLOR.COOL_GRAY_100};

    margin-left: 10px;
  }

  .clusterContainer {
    display: flex;
    flex-direction: row;
    gap: 6px;
    overflow-x: auto;
    width: 100%;

    .cluster {
      display: flex;
      flex-direction: row;
      gap: 2px;

      padding: 8px 10px;
      border-radius: 6px;
      border: 1px solid ${COLOR.UI_GRAY_2};

      white-space: nowrap;
      font-size: 15px;
      font-weight: 600;
      line-height: 15px;
      color: ${COLOR.COOL_GRAY_300};
      background-color: ${COLOR.UI_GRAY_1};

      cursor: pointer;
      span {
        color: ${COLOR.UI_GRAY_4};
      }
      .clickedLength {
        color: ${COLOR.MAIN_BLUE};
      }
    }

    .clicked {
      background-color: ${COLOR.MAUN_BLUE2};
      border: 1px solid ${COLOR.MAIN_BLUE};
    }
  }
`;

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .itemInput {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    height: 40px;
    padding: 10.5px 12.5px;
    border: 1.5px solid ${COLOR.UI_GRAY_2};
    border-radius: 6px;
    background-color: ${COLOR.MAIN_WHITE};
    box-sizing: border-box;

    input {
      outline: none;
      border: none;
      ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
      color: ${COLOR.COOL_GRAY_400};
      &::placeholder {
        color: ${COLOR.UI_GRAY_3};
      }
    }
  }
`;

const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 9px 14px;
  border-radius: 6px;
  background-color: ${COLOR.UI_GRAY_1};

  .categotyInfo {
    display: flex;
    flex-direction: row;
    gap: 2px;
    ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
    .title {
      color: ${COLOR.COOL_GRAY_300};
    }
    .checkCnt {
      color: ${COLOR.UI_GRAY_4};
    }
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
    ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
    color: ${COLOR.COOL_GRAY_200};
  }
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
