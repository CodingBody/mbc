import React from "react";
import styled from "styled-components";
import { Button } from "./../../styled-component/Button";
import {
  SearchBarBox,
  SearchBar,
  TableBody,
  TableHeader,
  Table,
  Info,
} from "./../../styled-component/Table";
import EditIcon from "@material-ui/icons/Edit";
import SearchAppBar from "./../searchBar/SearchBar";
import { HeadTwo } from "../../styled-component/Text";

const Container = styled.div`
  display: grid;
  border-radius: 10px;
  grid-template-rows: auto auto;
`;

const Header = styled.div`
  background: #2c2c2c;
  color: skyblue;

  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: 2px groove #cecece73;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Main = styled.div`
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

const Category = () => {
  return (
    <Container>
      <Header>
        <div>
          <HeadTwo>Category</HeadTwo>
        </div>
        <div>
          <Button bg="#fff" color="#000">
            Create
          </Button>
        </div>
      </Header>
      <Main>
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
        <SearchAppBar />
        <Table>
          <TableHeader>
            <th></th>
            <th>Title</th>
            <th>Title Eng</th>
            <th>Genre List</th>
            <th>Usageyn</th>
            <th>Priority</th>
            <th>Created</th>
            <th>Created By</th>
            <th>Updated</th>
            <th>Updated By</th>
          </TableHeader>

          <TableBody>
            <tb>
              <EditIcon />
            </tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
          </TableBody>
          <TableBody>
            <tb>
              <EditIcon />
            </tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
          </TableBody>
          <TableBody>
            <tb>
              <EditIcon />
            </tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
          </TableBody>
          <TableBody>
            <tb>
              <EditIcon />
            </tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
            <tb>ddddddd</tb>
          </TableBody>
          <Info>
            <div>1 row selected </div>
            <div>Total 4</div>
          </Info>
        </Table>
      </Main>
    </Container>
  );
};

export default Category;
