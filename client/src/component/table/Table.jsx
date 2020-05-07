import React from "react";
import styled from "styled-components";
import {
  TableBody,
  TableContainer,
  ColumnNames,
  Info,
  HeaderLeft,
} from "../../styled-component/Table";
import EditIcon from "@material-ui/icons/Edit";
import SearchBar from "../searchBar/SearchBar";
import { HeadTwo } from "../../styled-component/Text";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { toggleCreateModal, toggleEditModal } from "../../redux/modal/actions";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
  getFormFields,
  removeLast,
  removeLastItemInArr,
} from "../../utils/Helper";
import {
  fetchRecordStart,
  populateRecordOnEdit,
  populateColumnNamesOnCreate,
} from "../../redux/main/actions";
import { Header } from "./../../styled-component/Table";
import { navbarItem } from "./../../utils/Data";
import {
  primaryDark,
  textPrimary,
  primaryHover,
} from "./../../styled-component/Variable";
import { MuiButton } from "./../../styled-component/Button";
import HeaderSearchBar from "./../searchBar/HeaderSearchBar";
import { SpaceBetween } from "../../styled-component/Layout";

const SdEditIcon = styled(EditIcon)`
  cursor: pointer;
`;

const Table = ({
  fetchRecord,
  data,
  columnNames,
  showTable,
  toggleCreate,
  toggleEdit,
  populateRecordOnEdit,
  populateColumnNames,
  category,
  loading,
}) => {
  const [input, setInput] = React.useState("");

  const handleSeachbarChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchRecord({ params: input, category });
  };

  const handleEditClick = (record, columnNames) => {
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
    const obj = getFormFields(category);
    populateColumnNames(obj);
    toggleCreate(obj);
  };

  const renderHeader = (category) => {
    if (category) {
      const res = navbarItem.filter((item) => item.params === category);
      if (!res) return <React.Fragment> </React.Fragment>;
      return (
        <React.Fragment>
          {res[0].icon}
          <HeadTwo>{category.toUpperCase()}</HeadTwo>
        </React.Fragment>
      );
    }
  };

  const renderIcon = (category) => {
    if (category) {
      const res = navbarItem.filter((item) => item.params === category);
      if (!res) return <React.Fragment>ddd</React.Fragment>;
      return <React.Fragment>{res[0].icon}</React.Fragment>;
    }
  };

  return (
    <React.Fragment>
      <Header>
        <SpaceBetween>{renderHeader(category)}</SpaceBetween>
        {showTable && (
          <HeaderSearchBar
            handleSearchSubmit={handleSearchSubmit}
            handleSeachbarChange={handleSeachbarChange}
            input={input}
            category={category}
          />
        )}
        <div>
          <MuiButton
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => handleClickCreate(category)}
            variant="contained"
            cr={textPrimary}
            bg={primaryDark}
            border={primaryHover}
            size="1.5rem"
          >
            Create
          </MuiButton>
        </div>
      </Header>
      {!showTable && (
        <SearchBar
          loading={loading}
          renderIcon={renderIcon}
          handleSearchSubmit={handleSearchSubmit}
          handleSeachbarChange={handleSeachbarChange}
          input={input}
          category={category}
        />
      )}

      {data && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.main.data,
  columnNames: state.main.columnNames,
  showTable: state.main.showTable,
  loading: state.main.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecord: (form) => dispatch(fetchRecordStart(form)),
  toggleCreate: () => dispatch(toggleCreateModal()),
  toggleEdit: () => dispatch(toggleEditModal()),
  populateRecordOnEdit: (record) => dispatch(populateRecordOnEdit(record)),
  populateColumnNames: (record) =>
    dispatch(populateColumnNamesOnCreate(record)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
