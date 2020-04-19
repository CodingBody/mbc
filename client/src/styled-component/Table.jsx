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

export const TableContainer = styled.table`
  /* display: grid;
  flex-direction: column; */
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  tr {
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }

  th {
    border: 1px solid #cecece73;
    background: #eee;
    padding: 10px 0;
    flex-grow: 1;
  }
`;

export const TableBody = styled.tr`
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  td:first-child {
    border: 1px solid #cecece73;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: skyblue;
    }
  }
  td {
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
