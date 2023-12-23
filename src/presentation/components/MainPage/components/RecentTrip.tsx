import React, { useEffect, useState } from 'react';
import { getUpcomingTravles } from '@api/travel';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import Icon from '@components/common/Icon';
import { getTripDate } from '@utils/getDate';

const RecentTrip = () => {
  const [travel, setTravel] = useState<any>();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dates, setDates] = useState<string>('');

  useEffect(() => {
    const getRecentTravel = async () => {
      const recent = await getUpcomingTravles();
      setTravel(recent.data[0]);
      const tripDates = getTripDate(
        { start: recent.data[0].startDate, end: recent.data[0].endDate },
        '.'
      ).dates;
      setDates(tripDates);
    };
    getRecentTravel();
  }, []);

  return (
    <RecentTripWrapper>
      {travel && (
        <TripWrapper>
          <TopWrapper>
            <div className="info">
              <div className="dDay">
                {travel.dDay === '0'
                  ? 'D-day'
                  : `D${Number(travel.dDay) >= 0 ? '-' : '+'}${
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
            <div className="travelName">
              {travel.title} <Icon icon="TripToggle" />
            </div>
            <div className="ETCWrapper">
              <Icon
                icon="ETC"
                cursor={true}
                onClick={() => setDropdownVisibility((prev) => !prev)}
              />
              {dropdownVisibility && (
                <div className="dropdown">
                  <button>
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
        </TripWrapper>
      )}
    </RecentTripWrapper>
  );
};

export default RecentTrip;

const RecentTripWrapper = styled.div``;

const TripWrapper = styled.div`
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
