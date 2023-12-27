import React, { useState } from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import ModalHeader from '@components/common/Header/ModalHeader';
import Spacing from '@components/common/Spacing';
import { TYPOGRAPHY } from '@styles/fonts';
import { deleteCategory, patchCategory } from '@api/category';

interface CategoryInputModalPropsType {
  closeModal: () => void;
  refetch: any;
  category: { categoryId: number; title: string };
}
const CategoryInputModal = ({
  closeModal,
  refetch,
  category,
}: CategoryInputModalPropsType) => {
  const [title, setTitle] = useState(category.title);

  const handleEditCategory = async () => {
    const res = await patchCategory({ categoryId: category.categoryId, title });
    if (res === '할 일 제목 수정에 성공했습니다.') {
      closeModal();
      refetch();
    }
  };

  const handleDeleteCategory = async () => {
    const res = await deleteCategory(category.categoryId);
    if (res === '할 일이 삭제되었습니다.') {
      closeModal();
      refetch();
    }
  };

  return (
    <CategoryInputWrapper>
      <ModalHeader
        closeModal={closeModal}
        text="할 일 관리"
        color={COLOR.COOL_GRAY_400}
      />
      <Spacing size={26} />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Spacing size={16} />
      <ButtonWrapper>
        <button className="delete" onClick={handleDeleteCategory}>
          삭제
        </button>
        <button className="edit" onClick={handleEditCategory}>
          확인
        </button>
      </ButtonWrapper>
    </CategoryInputWrapper>
  );
};

export default CategoryInputModal;

const CategoryInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.MAIN_WHITE};

  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    width: 390px;
  }

  input {
    width: 100%;
    ${TYPOGRAPHY.TITLE.SUBHEADING4_MEDIUM};
    color: ${COLOR.COOL_GRAY_300};
    outline: none;
    border: none;
    border-bottom: 1.4px solid ${COLOR.COOL_GRAY_200};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  button {
    width: 100%;
    padding: 9px 0;
    outline: none;
    border: none;
    background-color: #f5f7fd;
    border-radius: 6px;

    ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
    &.delete {
      color: ${COLOR.ALERT_WARNING};
    }
    &.edit {
      color: ${COLOR.COOL_GRAY_300};
    }
  }
`;
