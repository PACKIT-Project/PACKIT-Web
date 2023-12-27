import React from 'react';
import styled from 'styled-components';
import BackHeader from '@components/common/Header/BackHeader';
import COLOR from '@styles/colors';
import { useLocation } from 'react-router-dom';
import useGetTravelTodoList from '../../../infrastructure/queries/travel/useGetTravelTodoList';
import { travelClusterListType } from '@type/cluster';
import { travelCategoryListType } from '@type/category';
import { TYPOGRAPHY } from '@styles/fonts';
import Icon from '@components/common/Icon';

const ManageTodoPage = () => {
  const { pathname } = useLocation();
  const travelId = Number(pathname.split('edit/')[1]);

  const { data, isLoading } = useGetTravelTodoList(travelId);
  if (isLoading) {
    return <>로딩중</>;
  }

  return (
    <ManageTodoWrapper>
      <BackHeader text="할 일 관리" color={COLOR.COOL_GRAY_400} />
      <ClusterTodoWrapper>
        {data.data.travelClusterList?.map((cluster: travelClusterListType) => (
          <CategoryTodo key={cluster.clusterId}>
            <div className="cluster">
              <div className="title">{cluster.title}</div>
              <button>삭제</button>
            </div>
            <div className="categories">
              {cluster.travelCategoryList?.map(
                (category: travelCategoryListType) => (
                  <div className="category" key={category.categoryId}>
                    {category.title}
                  </div>
                )
              )}
              <button>
                <Icon icon="PlusCircle" cursor={true} />
              </button>
            </div>
          </CategoryTodo>
        ))}
      </ClusterTodoWrapper>
    </ManageTodoWrapper>
  );
};

export default ManageTodoPage;

const ManageTodoWrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLOR.MAIN_WHITE};
  padding: 0 20px;
`;
const ClusterTodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const CategoryTodo = styled.div`
  .cluster {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4px;
    .title {
      font-size: 15px;
      font-weight: 600;
      line-height: 15px;
      color: ${COLOR.UI_GRAY_5};
    }
    button {
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 15px;
      font-weight: 600;
      line-height: 20.5px;
      letter-spacing: -0.5px;
      color: ${COLOR.COOL_GRAY_300};
    }
  }
  .categories {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .category {
      padding: 7.5px 15px;
      border-radius: 6px;
      background-color: ${COLOR.UI_GRAY_1};
      ${TYPOGRAPHY.TEXT.BODY6_MEDIUM};
      color: ${COLOR.COOL_GRAY_300};
    }
    button {
      border: 1px dashed ${COLOR.UI_GRAY_3};
      padding: 7px 0;
      border-radius: 6px;
      background-color: ${COLOR.MAIN_WHITE};
    }
  }
`;
