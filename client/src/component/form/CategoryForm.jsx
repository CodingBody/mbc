import React from "react";
import { StyledTextField } from "./../../styled-component/ModalContainer";

const CategoryForm = ({ handleChange, form }) => {
  return (
    <form noValidate autoComplete="off" className="form">
      <StyledTextField
        name="title"
        onChange={handleChange}
        label="title"
        variant="outlined"
        value={form.title}
      />
      <StyledTextField
        name="genre_list"
        onChange={handleChange}
        label="Genre List"
        variant="outlined"
        value={form.genre_list}
      />
      <StyledTextField
        name="usageyn"
        onChange={handleChange}
        label="Usageyn"
        variant="outlined"
        value={form.usageyn}
      />
      <StyledTextField
        name="priority"
        onChange={handleChange}
        label="Priority"
        variant="outlined"
        value={form.priority}
      />
    </form>
  );
};

export default CategoryForm;
