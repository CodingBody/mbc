import styled from "styled-components";
import { renderCells } from "../utils/Helper";
import { textPrimary, primary } from "./Variable";
import { Box } from "@material-ui/core";

export const Header = styled.div`
  color: ${textPrimary};

  letter-spacing: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 2rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  svg {
    font-size: 2.5rem;
    margin-right: 2rem;
  }
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

export const MainBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
// export const Main = styled.div`
// background: #fff;
// padding: 1.5rem;

// overflow: hidden;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// `;

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
    color: ${textPrimary};
    font-size: 1.2rem;
    border: 1px solid #cecece73;
    background: ${primary};
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
