import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { HeadTwo, Close } from "../../../styled-component/Text";
import { connect } from "react-redux";
import { toggleEditModal } from "../../../redux/modal/actions";
import { EditModalContainer } from "../../../styled-component/ModalContainer";
import { MuiButton } from "../../../styled-component/Button";
import AppUserForm from "../../form/AppUserForm";
import CategoryForm from "./../../form/CategoryForm";
import {
  deleteRecordStart,
  updateRecordStart,
} from "./../../../redux/main/actions";
import { textPrimary } from "../../../styled-component/Variable";
import {
  SpaceBetween,
  ColumnDirection,
} from "../../../styled-component/Layout";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const EditModal = ({
  open,
  updateRecordStart,
  setOpen,
  loading,

  deleteRecordStart,
  category,
  record = false,
}) => {
  const [form, setForm] = React.useState(null);
  console.log(record, "record in edit");
  React.useEffect(() => {
    if (record !== false) setForm(record);
    for (let property in record) {
      if (record[property] === null) {
        record[property] = "";
      }
    }
  }, [record]);

  const handleDelete = () => {
    if (record.id) {
      let id = record.id;
      deleteRecordStart({ id, category });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  if (!record) return <React.Fragment></React.Fragment>;
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
            <HeadTwo>Edit {category} </HeadTwo>
            <Close onClick={() => setOpen()}>x</Close>
          </SpaceBetween>

          {category === "category" ? (
            <CategoryForm form={form} handleChange={handleChange} />
          ) : (
            <AppUserForm handleChange={handleChange} form={form} />
          )}

          <SpaceBetween p={2}>
            <div>
              <MuiButton
                onClick={() => setOpen()}
                bg="inherit"
                size="1.2rem"
                cr={textPrimary}
              >
                Cancel
              </MuiButton>
              <MuiButton
                onClick={handleDelete}
                bg="inherit"
                size="1.2rem"
                cr="#fb3333bf"
                disabled={loading}
              >
                Delete
              </MuiButton>
            </div>
            <div>
              <MuiButton
                onClick={() =>
                  updateRecordStart({ id: record.id, category, form })
                }
                bg="inherit"
                size="1.2rem"
                cr="#87ceeb"
                disabled={loading}
              >
                Save
              </MuiButton>
            </div>
          </SpaceBetween>
        </ColumnDirection>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  open: state.modal.openEdit,
  record: state.main.edit.record,
});

const mapDispatchToProps = (dispatch) => ({
  setOpen: () => dispatch(toggleEditModal()),
  deleteRecordStart: (record) => dispatch(deleteRecordStart(record)),
  updateRecordStart: (record) => dispatch(updateRecordStart(record)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
