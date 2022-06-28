import styled from 'styled-components';

export const Table = styled.table`
  width: 300px;
  background-color: white;
  font-size: 14px;
  border-radius: 4px;

  td,
  th {
    padding: 4px 8px;
    text-transform: capitalize;
  }
  tr:nth-child(2n) {
    background-color: #ccc;
  }
`;

export const TableHead = styled.thead`
  background-color: #10ebca;
`;
