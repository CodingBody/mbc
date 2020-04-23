import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Table from "../table/Table";

const Container = styled.div`
  background: #eee;
  /* !to do  */
  padding: 20px;
  grid-column: 3 / 14;
`;

const Board = () => {
  const [openCreat, setOpenCreate] = React.useState(false);
  return (
    <Container>
      <Switch>
        <Route exact path="/dashboard/mbc/:category" component={Table} />
      </Switch>
    </Container>
  );
};

export default Board;
