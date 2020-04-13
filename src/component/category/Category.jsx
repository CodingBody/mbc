import React from "react";
import styled from "styled-components";
import { Button } from "./../../styled-component/Button";
import { SearchBarBox, SearchBar } from "./../../styled-component/Table";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

const Header = styled.div`
  background: #e2e2e2;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: 2px groove #cecece73;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const HeadTwo = styled.h2`
  font-size: 1.8rem;
`;

const Main = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-left: 2px groove #cecece73;
  border-right: 2px groove #cecece73;
  border-bottom: 2px groove #cecece73;
`;

const Table = styled.div`
  border: 1px solid #cecece73;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const Category = () => {
  return (
    <Container>
      <Header>
        <div>
          <HeadTwo>Category</HeadTwo>
        </div>
        <div>
          <Button bg="#2c2c2c" color="#fff">
            Create
          </Button>
        </div>
      </Header>
      <Main>
        <Table>
          <SearchBarBox>
            <SearchBar>
              <div>button</div>
              <div>seachbar</div>
              <div>go</div>
            </SearchBar>
            <div>
              <Button bg="#fff" color="grey">
                Reset
              </Button>
            </div>
          </SearchBarBox>
          {/* <TableHeader >

          </TableHeader>
          <TableBody />
          <ReportForm /> */}
        </Table>
      </Main>
    </Container>
  );
};

export default Category;
