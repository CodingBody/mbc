import React from "react";
import { StdTextFieldOne } from "./../../styled-component/Input";
import { Form } from "./../../styled-component/Layout";

const CategoryForm = ({ handleChange, form }) => {
  return (
    <Form mb="20px" p="2rem" noValidate autoComplete="off">
      <StdTextFieldOne
        name="title"
        onChange={handleChange}
        label="Title"
        variant="outlined"
        value={form.title}
      />
      <StdTextFieldOne
        name="priority"
        onChange={handleChange}
        label="Priority"
        variant="outlined"
        value={form.priority}
      />
      <StdTextFieldOne
        name="genre_list"
        onChange={handleChange}
        label="Genre List"
        variant="outlined"
        value={form.genre_list}
      />
      <StdTextFieldOne
        name="usageyn"
        onChange={handleChange}
        label="Usageyn"
        variant="outlined"
        value={form.usageyn}
      />
    </Form>
  );
};

export default CategoryForm;
