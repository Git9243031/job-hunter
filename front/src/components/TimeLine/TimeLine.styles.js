import styled from 'styled-components';

export const TimeLineBox = styled.div`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 15px 25px;
  border-left: 1px solid #999;

  /* &:not(:last-child) {
    border-bottom: 1px solid #999;
  } */

  @media ${({ theme }) => theme.device.mobileM} {
    padding: 15px 20px 15px 0;
    border-left: none;
  }

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 15px 20px 15px 0;
    border-left: none;
  }
`;

export const TimeLineHeading = styled.div`
  display: flex;
  color: #666;
`;

export const TimeLinePeriod = styled.span`
  display: inline-block;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  margin: 0 10px 5px -50px;
  color: #d5d5d5;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 0 10px;
  line-height: 23px;
  border: 2px solid #007ced;
  border-radius: 30px;

  @media ${({ theme }) => theme.device.mobileM} {
    margin: 0px 5px 5px -18px;
  }

  @media ${({ theme }) => theme.device.mobileS} {
    margin: 0px 5px 5px -18px;
  }
`;
