/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import Icon from '@components/common/Icon';
import useModal from '@hooks/useModal';
import BottomSheet from '@components/common/BottomSheet';
import DoneAlert from './DoneAlert';

const MemberProfile = ({ member, onClick }: any) => {
  const {
    isShowModal: isShowBottomSheet,
    openModal: openBottomSheet,
    closeModal: closeBottomSheet,
  } = useModal();
  const denominator = member.checkedNum + member.unCheckedNum;
  const checkPercentage =
    denominator !== 0 ? (member.checkedNum / denominator) * 100 : 0;

  useEffect(() => {
    const isDone = checkPercentage === 100;

    if (isDone) {
      // 1초 후에도 100퍼센트인지 확인하고 특별한 동작 수행
      const timeoutId = setTimeout(() => {
        if (checkPercentage === 100) {
          openBottomSheet();
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [checkPercentage]);

  return (
    <MemberProfileWrapper>
      <ImgWrapper percentage={checkPercentage} onClick={onClick}>
        {member.profileImg ? (
          <img src={member.profileImg} alt="프로필 이미지" />
        ) : (
          <Icon icon="Profile" width={48.6} height={48.6} cursor={true} />
        )}
        {checkPercentage === 100 && <div className="done">🎉</div>}
      </ImgWrapper>
      {member.nickName}
      {isShowBottomSheet && (
        <BottomSheet isVisible={isShowBottomSheet} closeModal={closeBottomSheet}>
          <DoneAlert closeModal={closeBottomSheet} />
        </BottomSheet>
      )}
    </MemberProfileWrapper>
  );
};

export default MemberProfile;

const MemberProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: center;

  ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
  color: ${COLOR.MAIN_BLACK};

  img {
    width: 48.6px;
    height: 48.6px;
    border-radius: 100%;
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div<{ percentage: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background: ${({ percentage }) =>
    percentage === 100
      ? 'linear-gradient(142deg, #00EF4F 11.05%, #00ECA0 53.55%, #00CDED 94.84%)'
      : percentage > 0
      ? `conic-gradient(${COLOR.MAIN_BLUE} 0% ${percentage}%, ${COLOR.UI_GRAY_3} ${percentage}% 100%)`
      : COLOR.UI_GRAY_3};

  .done {
    position: absolute;
    top: 1px;
    right: 1px;
  }
`;
