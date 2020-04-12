import styled, { keyframes } from 'styled-components';

export const Title = styled.div`
  color: ${({ theme, color }) => color || theme.colors.text};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  @media ${({ theme }) => theme.device.mobileM} {
    margin: ${({ marginM }) => marginM};
  }
  @media ${({ theme }) => theme.device.mobileS} {
    margin: ${({ marginM }) => marginM};
  }

  ${({ highlight }) =>
    highlight &&
    `&:after {
        content: '';
        display: block;
        margin-top: 5px;
        width: 100%;
        height: 2px;
        background-color: #353535;
      }`}
`;

const typewriter = keyframes`
    from {
        width: 0;
    }
    to {
        width: 180px;
    }
`;

const blinkTextCursor = keyframes`
    from {
        border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
        border-right-color: transparent;
    }
`;

export const TitleAnimated = styled(Title)`
  width: 180px;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  animation: ${typewriter} 4s steps(40) 1s infinite normal both,
    ${blinkTextCursor} 500ms steps(40) infinite normal;
`;
