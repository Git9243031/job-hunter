import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: 20px;
  margin: 5% 10%;
  padding: 70px 90px;

  @media ${({ theme }) => theme.device.mobileM} {
    margin: 5% 0px;
    padding: 0 32px 25px;
  }

  @media ${({ theme }) => theme.device.mobileS} {
    margin: 5% 0px;
    padding: 0 32px 25px;
  }
`;
