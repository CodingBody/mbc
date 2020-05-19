import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { HeadTwo, Close } from "../../../styled-component/Text";
import { connect } from "react-redux";
import { MuiButton } from "../../../styled-component/Button";
import { addSortToFetchInSaga } from "./../../../redux/main/actions";
import { textPrimary } from "../../../styled-component/Variable";
import {
  SpaceBetween,
  ColumnDirection,
  Form,
} from "../../../styled-component/Layout";
import { toggleSortModal } from "./../../../redux/modal/actions";
import { FormControl, InputLabel, Select, Box } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SortModal = ({
  open,
  setOpen,
  loading,
  columnNames,
  category,
  columns,
  addSortToFetchInSaga,
  input,
}) => {
  const [state, setState] = React.useState({
    column: "",
    direction: "ascending",
    isNullLast: "last",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("caed");
    e.preventDefault();
    addSortToFetchInSaga({ params: input, category, columns, sort: state });
  };

  console.log(state);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen()}
      >
        <ColumnDirection width="49rem">
          <SpaceBetween p={2} mt={1} mb={1} cr={textPrimary}>
            <HeadTwo sz="2rem">SORT </HeadTwo>
            <Close onClick={() => setOpen()}>x</Close>
          </SpaceBetween>

          <Form mb="20px" p="2rem" noValidate autoComplete="off">
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="column">Select Column *</InputLabel>
                <Select
                  native
                  value={state.column}
                  onChange={handleChange}
                  inputProps={{
                    name: "column",
                    id: "column",
                  }}
                >
                  <option aria-label="None" value="" />
                  {columnNames &&
                    columnNames.map((col) => (
                      <option key={col} value={col}>
                        {col}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="direction">Select Direction</InputLabel>
                <Select
                  native
                  value={state.direction}
                  onChange={handleChange}
                  inputProps={{
                    name: "direction",
                    id: "direction",
                  }}
                >
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </Select>
              </FormControl>
            </Box>

            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="isNullLast">
                  Select Null's Location
                </InputLabel>
                <Select
                  native
                  value={state.isNullLast}
                  onChange={handleChange}
                  inputProps={{
                    name: "isNullLast",
                    id: "isNullLast",
                  }}
                >
                  <option value="first">First</option>
                  <option value="last">Last</option>
                </Select>
              </FormControl>
            </Box>
          </Form>

          <SpaceBetween p={2}>
            <div>
              <MuiButton
                onClick={() => setOpen()}
                bg="inherit"
                sz="1.2rem"
                cr={textPrimary}
              >
                Cancel
              </MuiButton>
            </div>
            <div>
              <MuiButton
                onClick={handleSubmit}
                bg="inherit"
                sz="1.2rem"
                cr="#87ceeb"
                disabled={loading}
              >
                Apply
              </MuiButton>
            </div>
          </SpaceBetween>
        </ColumnDirection>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  open: state.modal.openSort,
  columnNames: state.main.columnNames,
});

const mapDispatchToProps = (dispatch) => ({
  setOpen: () => dispatch(toggleSortModal()),
  addSortToFetchInSaga: (payload) => dispatch(addSortToFetchInSaga(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortModal);
