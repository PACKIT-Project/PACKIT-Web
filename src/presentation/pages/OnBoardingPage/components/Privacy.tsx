import React from 'react';
import styled from 'styled-components';
import Spacing from '@components/common/Spacing';
import { TERMS_PRIVACY } from '@constants';
import COLOR from '@styles/colors';
import Content from './Content';
import Icon from '@components/common/Icon';

const Privacy = () => {
  return (
    <PrivacyWrapper>
      <div className="explain">
        PACKIT은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
        개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은
        처리방침을 두고 있습니다.
      </div>
      <Spacing size={30} />
      <ContentWrapper>
        {TERMS_PRIVACY.map((content) => (
          <div className="content" key={content.title}>
            <div className="title">{content.title}</div>
            <div className="value">
              <Content value={content.value} type={content.type} />
            </div>
          </div>
        ))}
      </ContentWrapper>
      <Spacing size={40} />
      <Footer>
        <Icon icon="AuthLogo" fill={COLOR.UI_GRAY_3} width={130} height={33} />
      </Footer>
    </PrivacyWrapper>
  );
};

export default Privacy;

const PrivacyWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  .explain {
    padding: 16px 0 31px 0;
    color: ${COLOR.COOL_GRAY_300};
    border-bottom: 1px solid ${COLOR.UI_GRAY_2};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${COLOR.COOL_GRAY_400};
    .title {
      font-weight: 700;
      letter-spacing: -0.5px;
      color: ${COLOR.COOL_GRAY_400};
    }
  }
`;
const Footer = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  width: calc(100% + 32px);
  height: 174px;
  padding-top: 30px;

  background-color: ${COLOR.UI_GRAY_1};
`;
