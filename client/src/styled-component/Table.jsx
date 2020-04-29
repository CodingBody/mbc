import styled from "styled-components";
import { renderCells } from "../utils/Helper";

export const Container = styled.div`
  display: grid;
  border-radius: 10px;
  grid-template-rows: auto auto;
`;

export const Header = styled.div`
  background: #2c2c2c;
  color: skyblue;

  letter-spacing: 0.1rem;
  border: 2px groove #cecece73;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Main = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-left: 2px groove #cecece73;
  border-right: 2px groove #cecece73;
  border-bottom: 2px groove #cecece73;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

export const ColumnNames = styled.thead`
  tr {
    /* display: flex; */
    display: grid;
    grid-template-columns: ${(props) => renderCells(props.category)};
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
  grid-template-columns: ${(props) => renderCells(props.category)};

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
