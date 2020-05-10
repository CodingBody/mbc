import styled from "styled-components";
import { renderCells } from "../utils/Helper";
import { textPrimary, primary, primaryHover, primaryDark_2 } from "./Variable";

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
  border-top: 2px solid ${primaryHover};
  border-right: 2px solid ${primaryHover};
  border-left: 2px solid ${primaryHover};
  border-bottom: 1px solid ${primaryHover};
  tr {
    /* display: flex; */
    display: grid;
    grid-template-columns: ${(props) => renderCells(props.clLength)};
  }

  th {
    color: ${textPrimary};
    font-size: 1.2rem;
    background: ${primary};
    padding: 12px 0;
    flex-grow: 1;
  }
`;

export const TableBody = styled.tr`
  display: grid;
  grid-template-columns: ${(props) => renderCells(props.clLength)};

  td:first-child {
    border: 1px solid ${primaryHover};
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${primaryDark_2};
    }
  }
  td {
    font-size: 1.2rem;
    border: 1px solid ${primaryHover};
    padding: 12px 0 12px 5px;
  }
`;
