import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MAX_WIDTH } from "@constants";
import COLOR from "@styles/colors";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body,
  #root {
    background-color: ${COLOR.WHITE};
    max-width: ${MAX_WIDTH};
    width:100%;
    height: 100%;
    margin: 0 auto;
    font-family: "suit-regular";
  }
  body,
  button,
  input,
  textarea {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
`;

export default GlobalStyle;
