import React, { useEffect, useState } from 'react';
import useGetTravelTodoList from '../../../../infrastructure/queries/travel/useGetTravelTodoList';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import Icon from '@components/common/Icon';
import { TYPOGRAPHY } from '@styles/fonts';
import Spacing from '@components/common/Spacing';

const TravelTodo = ({
  travelId,
  memberId,
}: {
  travelId: number;
  memberId?: number;
}) => {
  const { data, isLoading } = useGetTravelTodoList(travelId, memberId);
  const [currClusterId, setCurrClusterId] = useState(0);

  useEffect(() => {
    if (data && data.travelClusterList) {
      setCurrClusterId(data.travelClusterList[0].clusterId);
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
              {data.travelClusterList?.map((cluster: any) => (
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
            <button>
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
            {data.travelClusterList
              ?.filter((cluster: any) => cluster.clusterId === currClusterId)[0]
              .travelCategoryList.map((category: any) => (
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
          </TodoListWrapper>
        </>
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
  .category {
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
