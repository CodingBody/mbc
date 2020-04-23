import React from "react";
import { StyledTextField } from "./../../styled-component/ModalContainer";

function AppUserForm({ handleChange, form }) {
  return (
    <form noValidate autoComplete="off" className="form">
      <StyledTextField
        name="empno"
        onChange={handleChange}
        label="empno"
        variant="outlined"
        value={form.empno}
      />
      <StyledTextField
        name="ename"
        onChange={handleChange}
        label="ename"
        variant="outlined"
        value={form.ename}
      />
      <StyledTextField
        name="job"
        onChange={handleChange}
        label="job"
        variant="outlined"
        value={form.job}
      />
      <StyledTextField
        name="mgr"
        onChange={handleChange}
        label="mgr"
        variant="outlined"
        value={form.mgr}
      />
      <StyledTextField
        name="hiredate"
        onChange={handleChange}
        label="hiredate"
        variant="outlined"
        value={form.hiredate}
      />
      <StyledTextField
        name="sal"
        onChange={handleChange}
        label="sal"
        variant="outlined"
        value={form.sal}
      />
      <StyledTextField
        name="comm"
        onChange={handleChange}
        label="comm"
        variant="outlined"
        value={form.comm}
      />
      <StyledTextField
        name="deptno"
        onChange={handleChange}
        label="deptno"
        variant="outlined"
        value={form.deptno}
      />
      <StyledTextField
        name="seq"
        onChange={handleChange}
        label="seq"
        variant="outlined"
        value={form.seq}
      />
    </form>
  );
}

export default AppUserForm;
