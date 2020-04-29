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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const EditModal = ({
  open,
  updateRecordStart,
  setOpen,
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

  console.log(form, "form");
  if (!record) return <React.Fragment></React.Fragment>;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen()}
      >
        <EditModalContainer>
          <div className="header">
            <HeadTwo color="#eee">Edit {category} </HeadTwo>
            <Close onClick={() => setOpen()}>x</Close>
          </div>
          {category === "Category" ? (
            <CategoryForm form={form} handleChange={handleChange} />
          ) : (
            <AppUserForm handleChange={handleChange} form={form} />
          )}

          <div className="buttonGroup">
            <div>
              <MuiButton
                onClick={() => setOpen()}
                bg="inherit"
                size="large"
                cr="#eee"
                border="#000"
              >
                Cancel
              </MuiButton>
              <MuiButton
                onClick={handleDelete}
                bg="inherit"
                size="large"
                cr="#fb3333bf"
                border="#000"
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
                size="large"
                cr="#87ceeb"
                border="#000"
              >
                Save
              </MuiButton>
            </div>
          </div>
        </EditModalContainer>
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
