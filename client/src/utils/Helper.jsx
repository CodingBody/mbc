import React from "react";
import CategoryForm from "./../component/form/CategoryForm";
import AppUserForm from "../component/form/AppUserForm";
import { v4 as uuid4 } from "uuid";

// !! optimazation, distructuring
// alter when number of columns has changed
export const checkFormType = ({ category, form }) => {
  console.log(category, "category");
  switch (category) {
    case "category":
      const { title, priority, genre_list, usageyn } = form;
      return JSON.stringify({
        title,
        priority,
        genre_list,
        usageyn,
      });
    case "appuser":
      const {
        username,
        account,
        password,
        password_check,
        status,
        sex,
        tag,
      } = form;
      if (password !== password_check) {
        alert("your passwords are not equal");
      }
      return JSON.stringify({
        username,
        account,
        password,
        status,
        sex,
        tag,
      });
    default:
      return;
  }
};

export const renderForm = ({ category, form, handleChange }) => {
  switch (category) {
    case "category":
      return <CategoryForm form={form} handleChange={handleChange} />;
    case "appuser":
      return <AppUserForm form={form} handleChange={handleChange} />;
    default:
      return;
  }
};

export const renderCells = (category) => {
  switch (category) {
    case "category":
      return `repeat(5, 1fr)`;
    case "appuser":
      return `repeat(6, 1fr)`;
    default:
      return `repeat(8, 1fr)`;
  }
};

export const renderTableHeader = (category) => {
  switch (category) {
    case "category":
      return columnNamesInCategory();
    case "appuser":
      return columnNamesInAppUser();
    default:
      return;
  }
};

export const getColumns = (category) => {
  switch (category) {
    case "category":
      return mapCNinCategoryToObj;
    case "appuser":
      return mapCNinAppUserToObj;
    default:
      return;
  }
};

const columnNamesInCategory = () => {
  return (
    <tr>
      <th></th>
      <th>Title</th>
      <th>Genre List</th>
      <th>usageyn</th>
      <th>Priority</th>
    </tr>
  );
};

const mapCNinCategoryToObj = {
  title: "",
  genre_list: "",
  usageyn: "",
  priority: "",
};

// omitted password, avatar_index
const columnNamesInAppUser = () => {
  return (
    <tr>
      <th></th>
      <th>username</th>
      <th>account</th>
      <th>status</th>
      <th>sex</th>
      <th>tag</th>
    </tr>
  );
};
const mapCNinAppUserToObj = {
  username: "",
  account: "",
  password: "",
  password_check: "",
  status: "",
  sex: "",
  tag: "",
};

export const removeLastItemInArr = (arr, category) => {
  if (arr) {
    switch (category) {
      case "category":
        const res = arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 4);
        return res;
      case "appuser":
        return arr.map((ar) => <th key={uuid4()}>{ar}</th>).slice(0, 5);
      default:
        return;
    }
  }
};

export const removeLast = (arr, category) => {
  if (arr) {
    switch (category) {
      case "category":
        const res = arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 4);
        return res;
      case "appuser":
        return arr.map((ar) => <td key={uuid4()}>{ar}</td>).slice(0, 5);
      default:
        return;
    }
  }
};
