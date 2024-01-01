/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getTravelDetail, getTravelMembers, getUpcomingTravles } from '@api/travel';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import Icon from '@components/common/Icon';
import { getTripDate } from '@utils/getDate';
import MemberProfile from './MemberProfile';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import InviteModal from '@components/MyPage/components/InviteModal';
import Toast from '@components/common/Toast';
import BottomSheet from '@components/common/BottomSheet';
import TripList from './TripList';
import TravelTodo from './TravelTodo';
import { useLocation, useNavigate } from 'react-router-dom';

const TripMain = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    isShowModal: isShowInviteModal,
    openModal: openInviteModal,
    closeModal: closeInviteModal,
  } = useModal();
  const {
    isShowModal: isShowToast,
    openModal: openToast,
    closeModal: closeToast,
  } = useModal();
  const {
    isShowModal: isShowTravelBottomSheet,
    openModal: openTravelBottomSheet,
    closeModal: closeTravelBottomSheet,
  } = useModal();

  const [travel, setTravel] = useState<any>();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dates, setDates] = useState<string>('');
  const [members, setMembers] = useState<any[]>([]);
  const [currMemberId, setCurrMemberId] = useState(0);

  const getRecentTravel = async () => {
    const recent = await getUpcomingTravles();
    setTravel(recent.data[0]);
    const tripDates = getTripDate(
      { start: recent.data[0].startDate, end: recent.data[0].endDate },
      '.'
    ).dates;
    setDates(tripDates);

    const memberRes = await getTravelMembers(recent.data[0].id);
    if (memberRes.message === '동행자 목록 조회에 성공했습니다.') {
      setMembers(memberRes.data);
    }
  };

  const getTravelInfo = async () => {
    const res = await getTravelDetail(state);
    setTravel(res);
    const tripDates = getTripDate(
      { start: res.startDate, end: res.endDate },
      '.'
    ).dates;
    setDates(tripDates);
    const memberRes = await getTravelMembers(res.id);
    if (memberRes.message === '동행자 목록 조회에 성공했습니다.') {
      setMembers(memberRes.data);
    }
  };

  useEffect(() => {
    if (state) {
      getTravelInfo();
    } else getRecentTravel();
    closeTravelBottomSheet();
  }, [state]);

  return (
    <TripMainWrapper>
      {travel && (
        <>
          <TripInfoWrapper>
            <TopWrapper>
              <div className="info">
                <div className="dDay">
                  {travel.dDay === '0'
                    ? 'D-day'
                    : `D${Number(travel.dDay) >= 0 ? '' : '+'}${
                        -1 * Number(travel.dDay)
                      }`}
                </div>
                <div className="person">
                  <Icon icon="User" width={14} height={14} color={COLOR.UI_GRAY_5} />
                  {travel.memberNum}/8
                </div>
              </div>
            </TopWrapper>
            <MiddleWrapper>
              <div className="travelName" onClick={openTravelBottomSheet}>
                {travel.title} <Icon icon="TripToggle" cursor={true} />
              </div>
              <div className="ETCWrapper">
                <Icon
                  icon="ETC"
                  cursor={true}
                  onClick={() => setDropdownVisibility((prev) => !prev)}
                />
                {dropdownVisibility && (
                  <div className="dropdown">
                    <button onClick={() => navigate(`/edit/${travel.id}`)}>
                      <Icon icon="ManageTodo" />
                      할일 관리
                    </button>
                    <hr />
                    <button>
                      <Icon icon="ManageNotice" />
                      리마인드 알림
                    </button>
                  </div>
                )}
              </div>
            </MiddleWrapper>
            <div className="travelInfo">
              <Icon icon="LocationPin" />
              {travel.destination}·{dates}
            </div>
          </TripInfoWrapper>

          <MemberWrapper>
            {members.map((member) => (
              <MemberProfile
                key={member.memberId}
                member={member}
                onClick={() => setCurrMemberId(member.memberId)}
              />
            ))}
            <button onClick={openInviteModal}>
              <Icon
                icon="Plus"
                width={14}
                height={14}
                color={COLOR.COOL_GRAY_100}
                cursor={true}
              />
            </button>
          </MemberWrapper>

          <TravelTodo
            travelId={travel && travel.id}
            memberId={currMemberId}
            setMembers={setMembers}
          />
        </>
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
      {isShowToast && <Toast close={closeToast}>복사가 완료되었습니다.</Toast>}
      {isShowTravelBottomSheet && (
        <BottomSheet
          isVisible={isShowTravelBottomSheet}
          closeModal={closeTravelBottomSheet}
        >
          <TripList />
        </BottomSheet>
      )}
    </TripMainWrapper>
  );
};

export default TripMain;

const TripMainWrapper = styled.div``;

const TripInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px 12px 22px;

  border-bottom: 1px solid ${COLOR.UI_GRAY_2};
  .travelInfo {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
    color: ${COLOR.UI_GRAY_5};
  }
`;

const TopWrapper = styled.div`
  .info {
    display: flex;
    flex-direction: row;
    gap: 5px;

    .dDay {
      display: flex;
      align-items: center;
      ${TYPOGRAPHY.TEXT.BODY2_BOLD};
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
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .travelName {
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: center;

    font-size: 20px;
    font-weight: 700;
    line-height: 18px;
    color: ${COLOR.COOL_GRAY_400};

    cursor: pointer;
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

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border-radius: 100%;
    border: none;
    outline: none;

    background-color: ${COLOR.UI_GRAY_1};
  }
`;
