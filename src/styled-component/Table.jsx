import styled from "styled-components";

export const SearchBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const SearchBar = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 60px 300px 60px;
  div {
  }
`;

export const Table = styled.table``;

export const TableHeader = styled.tr`
  /* display: flex;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(10, 150px);

  th {
    border: 1px solid #cecece73;
    background: #eee;
    padding: 10px 0;
  }
`;

export const TableBody = styled.tr`
  /* display: flex;
  align-items: center; */
  grid-column: 1 / 8;
  display: grid;
  grid-template-columns: repeat(10, 150px);
  tb:first-child {
    border: 1px solid #cecece73;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: skyblue;
    }
  }
  tb {
    border: 1px solid #cecece73;
    padding: 10px 0 10px 4px;
  }
`;

export const Info = styled.div`
  width: 100%;
  border: 1px solid #cecece73;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
