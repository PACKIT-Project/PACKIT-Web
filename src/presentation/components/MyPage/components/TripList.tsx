/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from '@components/common/Icon';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import { getTripDate } from '@utils/getDate';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import Toast from '@components/common/Toast';
import InviteModal from './InviteModal';
import ConfirmModal from '@components/common/Modal/ConfirmModal';
import useDeleteTravel from '@hooks/queries/travel/useDeleteTravel';

const TripList = ({ travel }: { travel: any }) => {
  const { mutate } = useDeleteTravel();

  const {
    isShowModal: isShowDeleteModal,
    toggleModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();
  const {
    isShowModal: isShowToast,
    openModal: openToast,
    closeModal: closeToast,
  } = useModal();
  const {
    isShowModal: isShowInviteModal,
    openModal: openInviteModal,
    closeModal: closeInviteModal,
  } = useModal();

  const { dates } = getTripDate(
    { start: travel.startDate, end: travel.endDate },
    '.'
  );
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const handleClickDelete = async () => {
    localStorage.setItem('state', 'delete_done');
    mutate({ travelId: travel.id });
  };

  useEffect(() => {
    const deleteStatus = localStorage.getItem('state');

    if (deleteStatus === 'delete_done') {
      openToast();
      const timer = setTimeout(() => {
        localStorage.removeItem('state');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [localStorage.getItem('state')]);

  return (
    <TripWrapper>
      <TopWrapper>
        <div className="info">
          <div className="dDay">
            {travel.dDay === '0'
              ? 'D-day'
              : `D${Number(travel.dDay) >= 0 ? '' : '+'}${-1 * Number(travel.dDay)}`}
          </div>
          <div className="person">
            <Icon icon="User" width={14} height={14} color={COLOR.UI_GRAY_5} />
            {travel.memberNum}/8
          </div>
        </div>
        <div className="ETCWrapper">
          <Icon
            icon="ETC"
            cursor={true}
            onClick={() => setDropdownVisibility((prev) => !prev)}
          />
          {dropdownVisibility && (
            <div className="dropdown">
              <button onClick={openDeleteModal}>
                <Icon icon="Delete" />
                여행 삭제
              </button>
              <hr />
              <button onClick={openInviteModal}>
                <Icon icon="KeyWhite" />
                여행 초대
              </button>
            </div>
          )}
        </div>
      </TopWrapper>
      <div className="travelName">{travel.title}</div>
      <div className="travelInfo">
        <Icon icon="LocationPin" />
        {travel.destination}·{dates}
      </div>
      {isShowDeleteModal && (
        <Modal isVisible={isShowDeleteModal} closeModal={closeDeleteModal}>
          <ConfirmModal
            title="여행을 삭제하시겠어요?"
            explainText="삭제하신 항목은 복구가 불가능합니다."
            yesText="삭제"
            closeModal={closeDeleteModal}
            onClick={handleClickDelete}
          />
        </Modal>
      )}
      {isShowInviteModal && (
        <Modal isVisible={isShowInviteModal} closeModal={closeInviteModal}>
          <InviteModal
            closeModal={closeInviteModal}
            travel={travel}
            openToast={openToast}
          />
        </Modal>
      )}
      {isShowToast && <Toast close={closeToast}>삭제가 완료되었습니다.</Toast>}
    </TripWrapper>
  );
};

export default TripList;

const TripWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px 12px 22px;

  border-bottom: 1px solid ${COLOR.UI_GRAY_2};
  .travelName {
    ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
    color: ${COLOR.COOL_GRAY_400};
  }

  .travelInfo {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
    color: ${COLOR.UI_GRAY_5};
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: row;
    gap: 5px;

    .dDay {
      display: flex;
      align-items: center;
      ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
      color: ${COLOR.MAIN_BLUE};
    }

    .person {
      display: flex;
      flex-direction: row;
      gap: 3px;
      align-items: center;

      padding: 2px 8px;
      border-radius: 6px;
      background: ${COLOR.UI_GRAY_1};

      color: ${COLOR.UI_GRAY_5};
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.11px;
    }
  }

  .ETCWrapper {
    position: relative;

    .dropdown {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      background: ${COLOR.MAIN_WHITE};
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
      padding: 12px 12px 12px 6px;
      z-index: 10;

      button {
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;

        font-size: 16px;
        font-weight: 600;
        line-height: 16.67px;
        color: ${COLOR.COOL_GRAY_200};

        outline: none;
        border: none;
        background-color: inherit;
        white-space: nowrap;

        &:first-child {
          margin-bottom: 10px;
        }
        &:last-child {
          margin-top: 10px;
        }
      }

      hr {
        position: absolute;
        top: 40%;
        transform: translateY(-40%);
        left: 0;
        border: 0.5px solid ${COLOR.UI_GRAY_2};
        width: 100%;
      }
    }
  }
`;
