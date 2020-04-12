import styled from 'styled-components';

export const Tag = styled.div`
  background: ${({ color }) => color || '#333'};
  border-radius: 16px;
  margin: 0 10px 10px 0;
  padding: 0 10px;
  float: left;
`;
