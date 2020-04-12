import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;0,700;1,200;1,400&display=swap');
      html {
        font-size: 10px;
        body {
         background: #007bff;
          color: #fff;
          /* color: ${({ theme }) => theme.colors.text}; */
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
        }
      }
      @media ${({ theme }) => theme.device.mobileS} {
        html {
          font-size: 8px;
        }
      }
      @media ${({ theme }) => theme.device.mobileM} {
        html {
          font-size: 8px;
        }
      }
`;

export default GlobalStyle;
