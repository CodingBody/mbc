import React from "react";
import styled from "styled-components";
import {
  TableBody,
  TableContainer,
  ColumnNames,
  Info,
} from "../../styled-component/Table";
import EditIcon from "@material-ui/icons/Edit";
import SearchBar from "../searchBar/SearchBar";
import { HeadTwo } from "../../styled-component/Text";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { Button } from "@material-ui/core";
import { toggleCreateModal, toggleEditModal } from "../../redux/modal/actions";
import {
  renderTableHeader,
  getColumns,
  removeLast,
  removeLastItemInArr,
} from "../../utils/Helper";
import CreateModal from "../Modals/create/CreateModal";
import EditModal from "../Modals/edit/EditModal";
import {
  fetchRecordStart,
  populateRecordOnEdit,
  populateColumnNamesOnCreate,
  clearTableOnRouteChange,
} from "../../redux/main/actions";
import { Container, Header, Main } from "./../../styled-component/Table";

const SdEditIcon = styled(EditIcon)`
  cursor: pointer;
`;

const Table = ({
  match,
  fetchRecord,
  data,
  columnNames,
  toggleCreate,
  toggleEdit,
  clearTableOnRouteChange,
  populateRecordOnEdit,
  populateColumnNames,
}) => {
  const [input, setInput] = React.useState("");

  const { category } = match.params;

  React.useEffect(() => {
    if (category !== null) {
      console.log("runed");
      clearTableOnRouteChange();
    }
  }, [category]);

  const handleSeachbarChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchRecord({ input, category });
  };

  const handleEditClick = (record, columnNames) => {
    console.log(record, "record in table");
    console.log(columnNames, "cnames in table");
    const formattedRecord = columnNames.reduce((acc, value) => {
      acc[value] = "";
      return acc;
    }, {});
    let i = 0;
    for (let props in formattedRecord) {
      formattedRecord[props] = record[i];
      i++;
    }

    populateRecordOnEdit(formattedRecord);
    toggleEdit();
  };

  const handleClickCreate = (category) => {
    const obj = getColumns(category);
    console.log(obj, "obj");
    populateColumnNames(obj);
    toggleCreate(obj);
  };

  console.log(data, "data");

  if (!category) return <div>dd</div>;

  if (data)
    return (
      <React.Fragment>
        <CreateModal category={category} />
        <EditModal category={category} />
        <Container>
          <Header>
            <div>
              <HeadTwo>{category.toUpperCase()}</HeadTwo>
            </div>
            <div>
              <Button
                onClick={() => handleClickCreate(category)}
                size="large"
                variant="contained"
              >
                Create
              </Button>
            </div>
          </Header>
          <Main>
            <SearchBar
              handleSearchSubmit={handleSearchSubmit}
              handleSeachbarChange={handleSeachbarChange}
              input={input}
            />
            <TableContainer cellspacing="0">
              <ColumnNames category={category}>
                <tr>
                  <th></th>
                  {removeLastItemInArr(columnNames, category)}
                </tr>
              </ColumnNames>
              <tbody>
                {data &&
                  data
                    .map((record) => (
                      <TableBody category={category} key={uuid4()}>
                        <td>
                          <SdEditIcon
                            onClick={() => handleEditClick(record, columnNames)}
                          />
                        </td>
                        {removeLast(record, category)}
                      </TableBody>
                    ))
                    .slice(0, 10)}
              </tbody>
            </TableContainer>
            <Info>
              <div>1 row selected </div>
              <div>Total 4</div>
            </Info>
          </Main>
        </Container>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <CreateModal category={category} />
      <EditModal category={category} />
      <Container>
        <Header>
          <div>
            <HeadTwo>{category.toUpperCase()}</HeadTwo>
          </div>
          <div>
            <Button
              onClick={() => handleClickCreate(category)}
              size="large"
              variant="contained"
            >
              Create
            </Button>
          </div>
        </Header>
        <Main>
          <SearchBar
            handleSearchSubmit={handleSearchSubmit}
            handleSeachbarChange={handleSeachbarChange}
            input={input}
          />
          <TableContainer cellspacing="0">
            <ColumnNames category={category}>
              {renderTableHeader(category)}
            </ColumnNames>
          </TableContainer>
          <Info>
            <div>1 row selected </div>
            <div>Total 4</div>
          </Info>
        </Main>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.main.data,
  columnNames: state.main.columnNames,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecord: ({ id, category }) =>
    dispatch(fetchRecordStart({ id, category })),
  toggleCreate: () => dispatch(toggleCreateModal()),
  toggleEdit: () => dispatch(toggleEditModal()),
  populateRecordOnEdit: (record) => dispatch(populateRecordOnEdit(record)),
  populateColumnNames: (record) =>
    dispatch(populateColumnNamesOnCreate(record)),
  clearTableOnRouteChange: () => dispatch(clearTableOnRouteChange()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
