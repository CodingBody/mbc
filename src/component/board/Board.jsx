import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Category from "./../category/Category";

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
        <Route exact path="/dashboard/mbc/Category" component={Category} />
      </Switch>
    </Container>
  );
};

export default Board;
