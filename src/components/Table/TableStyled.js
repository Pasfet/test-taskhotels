import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ScrollTable = styled.div`
  height: ${props => (props.height ? props.height : '500px')};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e7e7e7;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #41522e;
  }
`;
