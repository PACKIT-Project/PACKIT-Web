import React from 'react';
import Text from '@components/common/Text';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../../../infrastructure/api/user';
import { deleteCookie } from '../../../../application/utils/cookie';
import Spacing from '@components/common/Spacing';
import { TYPOGRAPHY } from '@styles/fonts';

const LeaveBottomSheet = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const handleClickLeave = async () => {
    const result = await deleteUser();
    if (result.message === '성공적으로 회원 정보가 삭제되었습니다.') {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      closeModal();
      navigate('/login');
    }
  };

  return (
    <LeaveBottomSheetWrapper>
      <div className="text">
        <Text
          text="정말 탈퇴하시겠습니까?"
          fontSize={20}
          fontWeight={600}
          lineHeight="132%"
          color={COLOR.COOL_GRAY_400}
          letterSpacing="-0.5px"
        />
        회원탈퇴 시 PACKIT의 모든 여행 데이터가 삭제되며, 계정 복구가 불가능합니다.
      </div>
      <Spacing size={36} />
      <ButtonWrapper>
        <button className="no" onClick={closeModal}>
          아니요
        </button>
        <button className="yes" onClick={handleClickLeave}>
          네
        </button>
      </ButtonWrapper>
    </LeaveBottomSheetWrapper>
  );
};

const LeaveBottomSheetWrapper = styled.div`
  padding: 44px 30px 10px 30px;
  background-color: ${COLOR.MAIN_WHITE};

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;

    font-size: 14px;
    font-weight: 600;
    line-height: 18.5px;
    letter-spacing: -0.14px;
    color: ${COLOR.COOL_GRAY_100};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  button {
    width: 100%;
    padding: 14px 0;

    border: none;
    outline: none;
    border-radius: 8px;
    ${TYPOGRAPHY.TEXT.BODY2_BOLD};

    &.no {
      background-color: ${COLOR.UI_GRAY_2};
      color: ${COLOR.COOL_GRAY_100};
    }
    &.yes {
      background-color: ${COLOR.MAIN_BLUE};
      color: ${COLOR.MAIN_WHITE};
    }
  }
`;
export default LeaveBottomSheet;
