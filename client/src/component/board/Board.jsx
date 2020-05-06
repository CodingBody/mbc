import React from "react";
import styled from "styled-components";
import { Switch } from "react-router-dom";
import Table from "../table/Table";
import { primaryDark } from "../../styled-component/Variable";

const Container = styled.div`
  background: #fff;
  /* !to do  */
  border-top: 13px solid ${primaryDark};
  padding: 20px;
  grid-column: 3 / 14;
`;

const Board = ({ category }) => {
  return (
    <Container>
      <Switch>
        <Table category={category} />
      </Switch>
    </Container>
  );
};

export default Board;
