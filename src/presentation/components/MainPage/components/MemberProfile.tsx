import React from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import Icon from '@components/common/Icon';

const MemberProfile = ({ member, onClick }: any) => {
  const denominator = member.checkedNum + member.unCheckedNum;
  const checkPercentage =
    denominator !== 0 ? (member.checkedNum / denominator) * 100 : 0;

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
