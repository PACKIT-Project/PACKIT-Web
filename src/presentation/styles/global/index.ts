import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: "suit-regular", 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  body,
  button,
  input,
  textarea {
    font-family: "suit-regular", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    body {
      max-width: 390px;
      margin: 0 auto;
      background-color: #F2F2F2; 
    }
  }
`;

export default GlobalStyle;
