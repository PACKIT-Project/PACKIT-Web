import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

const TextBox = ({ children }: { children: React.ReactNode }) => {
  return <TextBoxWrapper>{children}</TextBoxWrapper>;
};

const TextBoxWrapper = styled.div`
  color: ${COLOR.GRAY_900};
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.11px;
`;
export default TextBox;
