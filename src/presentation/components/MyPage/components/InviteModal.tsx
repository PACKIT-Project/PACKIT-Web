import React from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import Icon from '@components/common/Icon';
import Spacing from '@components/common/Spacing';
import { TYPOGRAPHY } from '@styles/fonts';
import { shareKakao } from '@utils/shareKakaoLink';
import useGetMembersAndCode from '../../../../infrastructure/queries/travel/useGetMembersAndCode';
import { shareInviteCode } from '@utils/shareInviteCode';

const InviteModal = ({
  closeModal,
  travel,
  openToast,
}: {
  closeModal: () => void;
  travel: any;
  openToast: () => void;
}) => {
  const { data } = useGetMembersAndCode(travel.id);

  return (
    <InviteModalWrapper>
      <Header>
        <Icon icon="Arrow" cursor={true} onClick={closeModal} />
      </Header>
      <div className="title">{travel.title}</div>
      <Spacing size={6} />
      <div className="subTitle">
        <span
          style={{
            ...TYPOGRAPHY.TITLE.SUBHEADING2_BOLD,
            color: COLOR.COOL_GRAY_300,
          }}
        >
          여행 친구
        </span>
        <div
          style={{
            ...TYPOGRAPHY.TITLE.SUBHEADING1_SEMIBOLD,
          }}
        >
          <span style={{ color: COLOR.MAIN_BLUE }}>{data.peopleNum}명 </span>
          <span style={{ color: COLOR.COOL_GRAY_300 }}>{`(${
            8 - data.peopleNum
          }명 남음)`}</span>
        </div>
      </div>
      <Spacing size={6} />
      <div style={{ ...TYPOGRAPHY.DES.CAPTION2_MEDIUM, color: COLOR.COOL_GRAY_300 }}>
        여행 친구는 최대 8명까지 초대가 가능합니다.
      </div>
      <Spacing size={21} />
      <BottomWrapper>
        <div
          className="kakao"
          onClick={() =>
            shareKakao(`${process.env.REACT_APP_SHARE_CLIPBOARD_LINK}`, 'PACK IT')
          }
        >
          <Icon icon="InviteKakao" cursor={true} />
          카카오톡 초대
        </div>
        <div
          className="code"
          onClick={() => {
            shareInviteCode({ invitationCode: data.invitationCode, openToast });
          }}
        >
          <Icon icon="InviteCode" cursor={true} />
          초대코드 복사
        </div>
      </BottomWrapper>
    </InviteModalWrapper>
  );
};

export default InviteModal;

const InviteModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.MAIN_WHITE};

  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    width: 390px;
  }

  .title {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.213px;
  }
  .subTitle {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 20px 0;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;

  ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};

  .kakao {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 13px 0;

    border-radius: 6px;
    background: #fee500;
    color: ${COLOR.MAIN_BLACK};

    cursor: pointer;
  }

  .code {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 13px 0;

    border-radius: 6px;
    background-color: ${COLOR.COOL_GRAY_100};
    color: ${COLOR.MAIN_WHITE};

    cursor: pointer;
  }
`;
