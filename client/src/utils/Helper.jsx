import React from "react";
import CategoryForm from "./../component/form/CategoryForm";
import AppUserForm from "../component/form/AppUserForm";
import { v4 as uuid4 } from "uuid";
import TableSearch from "../component/main/tableSearch/TableSearch.jsx";
import AssetInput from "./../component/main/assetInput/AssetInput";
import Rank from "./../component/main/rank/Rank";

// alter when number of columns has changed

export const getFileType = (name) => {
  const arr = name.split(".");

  let extenssion = arr[arr.length - 1];
  switch (extenssion) {
    case "png":
    case "jpg":
      return "image";
    case "webm":
    case "vob":
    case "m4v":
      return "video";
    case "docx":
      return "files";
    default:
      return;
  }
};

export const getFilePurpose = (type) => {
  switch (type) {
    case "image/png":
    case "image/jpg":
      return ["Thumbnail", "Poster", "Logo", "Background"];
    case "video":
      return ["2D", "180", "360", "4Dreplay"];
    case "files":
      return "noType";
    default:
      return;
  }
};

export const renderMain = (category) => {
  switch (category) {
    case "category":
    case "appuser":
    case "program_table":
    case "content":
      return <TableSearch category={category} />;
    case "asset_upload":
      return <AssetInput category={category} />;
    case "statistics.rank":
      return <Rank category={category} />;
    default:
      return;
  }
};

// !! fix appuserform
export const renderForm = ({ category, form, handleChange }) => {
  switch (category) {
    case "category":
      return <CategoryForm form={form} handleChange={handleChange} />;
    case "appuser":
      return <AppUserForm form={form} handleChange={handleChange} />;
    case "content":
      return <AppUserForm form={form} handleChange={handleChange} />;
    default:
      return;
  }
};

export const removeLastItemInArr = (arr, clLength) => {
  if (arr) {
    switch (clLength) {
      case 7:
        return arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 6);
      case 6:
        return arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 5);
      case 5:
        return arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 4);
      case 4:
        return arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 3);
      case 3:
        return arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 2);
      case 2:
        return arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 1);
      default:
        return;
    }
  }
};

export const removeLast = (arr, clLength) => {
  if (arr) {
    switch (clLength) {
      case 7:
        return arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 6);
      case 6:
        return arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 5);
      case 5:
        return arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 4);
      case 4:
        return arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 3);
      case 3:
        return arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 2);
      case 2:
        return arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 1);
      default:
        return;
    }
  }
};

export const renderCells = (clLength) => {
  switch (clLength) {
    case 7:
      return `repeat(7, 1fr)`;
    case 6:
      return `repeat(6, 1fr)`;
    case 5:
      return `repeat(5, 1fr)`;
    case 4:
      return `repeat(4, 1fr)`;
    case 3:
      return `repeat(3, 1fr)`;
    case 2:
      return `repeat(2, 1fr)`;
    default:
      return;
  }
};

// !! fix appuser
export const getFormFields = (category) => {
  switch (category) {
    case "category":
      return mapCNinCategoryToObj;
    case "appuser":
      return mapCNinAppUserToObj;
    case "content":
      return mapCNinAppUserToObj;
    case "program_table":
      return mapCNinAppUserToObj;
    default:
      return;
  }
};

export const getSearchBarTitle = (category) => {
  switch (category) {
    case "category":
      return "Title";
    case "appuser":
      return "Username";
    case "content":
      return "Title";
    case "program_table":
      return "Date";
    default:
      return;
  }
};

// @@ desc display on search bar and under the table
// and use in saga to check  how many columns user wanna see
export const getAllColumnNames = (category) => {
  switch (category) {
    case "category":
      return CNIncategory;
    case "appuser":
      return CNInAppUser;
    case "content":
      return CNInContent;
    case "program_table":
      return CNInProgramTable;
    default:
      return;
  }
};

// @@ CN means column names
// @@ code_review_1
const CNIncategory = [
  { name: "title", fetch: true, id: uuid4() },
  { name: "priority", fetch: true, id: uuid4() },
  { name: "genre_list", fetch: true, id: uuid4() },
  { name: "usageyn", fetch: true, id: uuid4() },
];

// 띄어 쓰기 체크하기
const CNInContent = [
  { name: "Lang", fetch: true, id: uuid4() },
  { name: "CP name", fetch: true, id: uuid4() },
  { name: "Category Id", fetch: true, id: uuid4() },
  { name: "title", fetch: true, id: uuid4() },
  { name: "artist list", fetch: true, id: uuid4() },
  { name: "genre_list", fetch: true, id: uuid4() },
  { name: "usageyn", fetch: true, id: uuid4() },
];

const CNInProgramTable = [
  { name: "Lang", fetch: true, id: uuid4() },
  { name: "Broadcasting data", fetch: true, id: uuid4() },
  { name: "item cnt", fetch: true, id: uuid4() },
];

const CNInAppUser = [
  { name: "username", fetch: true, id: uuid4() },
  { name: "account", fetch: true, id: uuid4() },
  { name: "status", fetch: true, id: uuid4() },
  { name: "tag", fetch: true, id: uuid4() },
  { name: "sex", fetch: true, id: uuid4() },
];

const mapCNinCategoryToObj = {
  title: "",
  genre_list: "",
  priority: "",
  usageyn: "",
};

// omitted password, avatar_index

const mapCNinAppUserToObj = {
  username: "",
  account: "",
  password: "",
  password_check: "",
  status: "",
  sex: "",
  tag: "",
};
