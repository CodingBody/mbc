import React from "react";

export const columnNamesInCategory = () => {
  return (
    <tr>
      <th></th>
      <th>Title</th>
      <th>Title Eng</th>
      <th>Genre List</th>
      <th>usageyn</th>
      <th>Priority</th>
      <th>Created</th>
      <th>Created By</th>
      <th>Updated</th>
      <th>Updated By</th>
    </tr>
  );
};

const mapCNinCategoryToObj = {
  title: "",
  titleEng: "",
  genre_list: "",
  usageyn: "",
  priority: "",
};

export const columnNamesInAppUser = () => {
  return (
    <tr>
      <th></th>
      <th>empno</th>
      <th>ename</th>
      <th>job</th>
      <th>mgr</th>
      <th>hiredate</th>
      <th>sal</th>
      <th>comm</th>
      <th>deptno</th>
      <th>seq</th>
    </tr>
  );
};
const mapCNinAppUserToObj = {
  empno: "",
  ename: "",
  job: "",
  mgr: "",
  hiredate: "",
  sal: "",
  comm: "",
  deptno: "",
  seq: "",
};

export const renderTableHeader = (category) => {
  switch (category) {
    case "Category":
      return columnNamesInCategory();
    case "AppUser":
      return columnNamesInAppUser();
    default:
      return;
  }
};

export const getColumns = (category) => {
  switch (category) {
    case "Category":
      return mapCNinCategoryToObj;
    case "AppUser":
      return mapCNinAppUserToObj;
    default:
      return;
  }
};

//  currently not using
// const mapForm = () => {
//   let arr = [];

//   for (let property in form) {
//     if (property === "hiredate")
//       arr.push(
//         <StyledTextField
//           name={`${property}`}
//           label={property}
//           onChange={handleChange}
//           variant="outlined"
//           value={form[property]}
//         />
//       );
//     else {
//       arr.push(
//         <StyledTextField
//           name={`${property}`}
//           onChange={handleChange}
//           label={property}
//           type="text"
//           variant="outlined"
//           value={form[property]}
//         />
//       );
//     }
//   }
//   return arr;
// };
