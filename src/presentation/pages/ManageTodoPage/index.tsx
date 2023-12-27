import React, { useState } from 'react';
import styled from 'styled-components';
import BackHeader from '@components/common/Header/BackHeader';
import COLOR from '@styles/colors';
import { useLocation } from 'react-router-dom';
import useGetTravelTodoList from '../../../infrastructure/queries/travel/useGetTravelTodoList';
import { travelClusterListType } from '@type/cluster';
import { travelCategoryListType } from '@type/category';
import { TYPOGRAPHY } from '@styles/fonts';
import Icon from '@components/common/Icon';
import useModal from '@hooks/useModal';
import ConfirmModal from '@components/common/Modal/ConfirmModal';
import Modal from '@components/common/Modal';
import { deleteCluster } from '@api/cluster';
import Toast from '@components/common/Toast';

const ManageTodoPage = () => {
  const {
    isShowModal: isShowDeleteToast,
    openModal: openDeleteToast,
    closeModal: closeDeleteToast,
  } = useModal();
  const { pathname } = useLocation();
  const {
    isShowModal: isShowDeleteConfirmModal,
    openModal: openDeleteConfirmModal,
    closeModal: closeDeleteConfirmModal,
  } = useModal();

  const travelId = Number(pathname.split('edit/')[1]);

  const { data, isLoading, refetch } = useGetTravelTodoList(travelId);
  const [currClusterId, setCurrClusterId] = useState(0);

  const handleClickDeleteGroup = async () => {
    const res = await deleteCluster(currClusterId);
    if (res === '할 일 그룹이 삭제되었습니다.') {
      closeDeleteConfirmModal();
      refetch();
      openDeleteToast();
    }
  };

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
              <button
                onClick={() => {
                  setCurrClusterId(cluster.clusterId);
                  openDeleteConfirmModal();
                }}
              >
                삭제
              </button>
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
      {isShowDeleteConfirmModal && (
        <Modal
          isVisible={isShowDeleteConfirmModal}
          closeModal={closeDeleteConfirmModal}
        >
          <ConfirmModal
            title="준비물 그룹을 삭제하시겠어요?"
            explainText="삭제하신 항목은 복구가 불가능합니다."
            closeModal={closeDeleteConfirmModal}
            onClick={handleClickDeleteGroup}
            yesText="삭제"
          />
        </Modal>
      )}
      {isShowDeleteToast && (
        <Toast close={closeDeleteToast}>삭제가 완료되었습니다.</Toast>
      )}
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
