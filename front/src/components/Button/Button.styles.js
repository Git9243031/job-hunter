import styled from 'styled-components';

export const Button = styled.div`
  width: 157px;
  background: ${({ theme }) => theme.colors.primaryHover};
  padding: 10px 0;
  text-align: center;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: all ease 0.5s;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
  }
`;
