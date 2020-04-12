import styled from 'styled-components';

export const Avatar = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: url(${({ img }) => img});
  background-color: #444;
  background-size: cover;
  border: 18px solid #444;
  border-radius: ${({ rounded }) => rounded && '100%'};
  -webkit-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.8);
  float: ${({ right }) => right && 'right'};

  @media ${({ theme }) => theme.device.mobileS} {
    width: ${({ sizeM }) => sizeM};
    height: ${({ sizeM }) => sizeM};
  }
  
  @media ${({ theme }) => theme.device.mobileM} {
    width: ${({ sizeM }) => sizeM};
    height: ${({ sizeM }) => sizeM};
  }
`;
