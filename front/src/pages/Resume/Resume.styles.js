import styled from 'styled-components';

export const ResumeHeader = styled.div`
  padding: 50px 0 100px;
  .header {
    &-info {
      display: flex;
      align-items: center;
    }

    &-avatar {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    &-description {
      margin-bottom: 25px;
    }
  }

  @media ${({ theme }) => theme.device.mobileM} {
    padding: 50px 0 30px;
    .header-info {
      /* padding: 10px 36px !important; */
    }
  }

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 50px 0 30px;
    .header-info {
      padding: 10px 36px !important;
    }
  }
`;

export const TimeLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactItem = styled.div`
  font-size: 18px;
  i {
    float: left;
    margin-right: 12px;
  }
`;

export const PortfolioLinks = styled.div`
  ul {
    margin: 0;
    padding: 0;
    a {
      color: ${({ theme }) => theme.colors.text};
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
