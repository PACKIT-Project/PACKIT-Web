import React from 'react';
import Spacing from '@components/common/Spacing';
import Text from '@components/common/Text';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import Icon from '@components/common/Icon';

import { shareKakao } from '@utils/shareKakaoLink';
import { clipboardShare } from '@utils/clipboardShare';
import { TYPOGRAPHY } from '@styles/fonts';
import useDeleteTravel from '@hooks/queries/travel/useDeleteTravel';

const ShareModal = ({
  closeModal,
  travelId,
}: {
  closeModal: () => void;
  travelId: string;
}) => {
  const onClickKakaoShare = (route: string, title: string) => {
    closeModal();
    shareKakao(route, title);
  };

  return (
    <ModalWrapper>
      <Text
        text="공유하기"
        color="#191F28"
        fontSize={20}
        lineHeight="28px"
        fontWeight={700}
      />
      <Spacing size={23} />
      <ButtonWrapper>
        <TextWrapper
          onClick={() =>
            onClickKakaoShare(
              `${process.env.REACT_APP_SHARE_CLIPBOARD_LINK}`,
              'PACK IT'
            )
          }
        >
          <Icon icon="KakaoLogo" />
          <Text
            text="카카오톡"
            color={COLOR.GRAY_800}
            fontSize={15}
            lineHeight="20px"
            fontWeight={600}
          />
        </TextWrapper>
        <TextWrapper
          onClick={() => {
            clipboardShare(travelId);
          }}
        >
          <Icon icon="LinkOutlined" />
          <Text
            text="URL복사"
            color={COLOR.GRAY_800}
            fontSize={15}
            lineHeight="20px"
            fontWeight={600}
          />
        </TextWrapper>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

const DeleteModal = ({
  closeModal,
  travelId,
}: {
  closeModal: () => void;
  travelId: number;
}) => {
  const { mutate } = useDeleteTravel();

  const handleClickDelete = async () => {
    localStorage.setItem('state', 'delete_done');
    mutate({ travelId });
  };

  return (
    <ModalWrapper>
      여행을 삭제하시겠어요?
      <Spacing size={9} />
      <div className="subText">삭제하신 항목은 복구가 불가능합니다.</div>
      <Spacing size={47} />
      <ButtonWrapper>
        <button className="cancel" onClick={closeModal}>
          취소
        </button>
        <button className="delete" onClick={handleClickDelete}>
          삭제
        </button>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 56px;
  text-align: center;

  border-radius: 8px;
  background-color: ${COLOR.MAIN_WHITE};

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${COLOR.COOL_GRAY_300};

  .subText {
    ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
    color: ${COLOR.COOL_GRAY_200};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 86px;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;

    &.cancel {
      color: ${COLOR.COOL_GRAY_100};
    }
    &.delete {
      color: ${COLOR.ALERT_WARNING};
    }
  }
`;

const DeleteButtonWrapper = styled.div`
  width: 100%;
  all: unset;
  border: 0px;
  display: flex;
  gap: 8px;
`;

const TextWrapper = styled.button`
  all: unset;
  border: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 1;
`;

export { ShareModal, DeleteModal };
