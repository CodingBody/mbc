import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Category from "../table/Table";

const Container = styled.div`
  background: #eee;
  /* !to do  */
  padding: 20px;
  grid-column: 3 / 14;
`;

const Board = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/dashboard/mbc/:category" component={Category} />
      </Switch>
    </Container>
  );
};

export default Board;
