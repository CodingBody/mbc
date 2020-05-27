import React from "react";
import SearchBar from "../../searchBar/SearchBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  toggleCreateModal,
  toggleEditModal,
} from "../../../redux/modal/actions";
import { getFormFields } from "../../../utils/Helper";
import {
  fetchRecordStart,
  populateRecordOnEdit,
  populateColumnNamesOnCreate,
} from "../../../redux/main/actions";
import { navbarItem } from "../../../utils/Data";
import { getAllColumnNames } from "../../../utils/Helper";
import SubHeader from "../../header/SubHeader";
import TableComponent from "./../../table/TableComponent";
import SortModal from "./../../Modals/sort/SortModal";

const TableSearch = ({
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
  clLength,
}) => {
  const [input, setInput] = React.useState("");
  // @@ code_review_2
  const [columns, setColumns] = React.useState(getAllColumnNames(category));

  React.useEffect(() => {
    setColumns(getAllColumnNames(category));
  }, [category]);
  //
  const handleSeachbarChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchRecord({ params: input, category, columns });
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
    toggleCreate();
  };

  const renderIcon = (category) => {
    if (category) {
      const res = navbarItem.filter((item) => item.params === category);
      if (!res) return <React.Fragment>ddd</React.Fragment>;
      return <React.Fragment>{res[0].icon}</React.Fragment>;
    }
  };

  const toggleFetch = (col) => {
    col.fetch = !col.fetch;
    return col;
  };

  const onClickColumn = (item) => {
    const newC = columns.map((col) =>
      col.id === item.id ? toggleFetch(col) : col
    );
    setColumns(newC);
  };

  return (
    <React.Fragment>
      <SubHeader
        showButton={true}
        handleSearchSubmit={handleSearchSubmit}
        handleSeachbarChange={handleSeachbarChange}
        input={input}
        category={category}
        showTable={showTable}
        handleClickCreate={handleClickCreate}
      />

      {!showTable && (
        <SearchBar
          loading={loading}
          renderIcon={renderIcon}
          handleSearchSubmit={handleSearchSubmit}
          handleSeachbarChange={handleSeachbarChange}
          category={category}
          onClickColumn={onClickColumn}
          columns={columns}
        />
      )}

      {data && (
        <TableComponent
          handleEditClick={handleEditClick}
          data={data}
          clLength={clLength}
          onClickColumn={onClickColumn}
          columns={columns}
          columnNames={columnNames}
        />
      )}
      <SortModal
        input={input}
        loading={loading}
        columns={columns}
        category={category}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.main.data,
  columnNames: state.main.columnNames,
  showTable: state.main.showTable,
  loading: state.main.loading,
  clLength: state.main.clLength,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecord: (form) => dispatch(fetchRecordStart(form)),
  toggleCreate: () => dispatch(toggleCreateModal()),
  toggleEdit: () => dispatch(toggleEditModal()),
  populateRecordOnEdit: (record) => dispatch(populateRecordOnEdit(record)),
  populateColumnNames: (record) =>
    dispatch(populateColumnNamesOnCreate(record)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TableSearch)
);
