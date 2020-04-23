import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { HeadTwo, Close } from "../../../styled-component/Text";
import { connect } from "react-redux";
import { toggleEditModal } from "../../../redux/modal/modalActions";
import { EditModalContainer } from "../../../styled-component/ModalContainer";
import { MuiButton } from "../../../styled-component/Button";
import AppUserForm from "../../form/AppUserForm";
import CategoryForm from "./../../form/CategoryForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const EditModal = ({ open, setOpen, category, record = false }) => {
  const [form, setForm] = React.useState(null);

  React.useEffect(() => {
    if (record !== false) setForm(record);
    for (let property in record) {
      if (record[property] === null) {
        record[property] = "";
      }
    }
  }, [record]);

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
              <MuiButton bg="inherit" size="large" cr="#fb3333bf" border="#000">
                Delete
              </MuiButton>
            </div>
            <div>
              <MuiButton bg="inherit" size="large" cr="#87ceeb" border="#000">
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
  record: state.cud.edit.record,
});

const mapDispatchToProps = (dispatch) => ({
  setOpen: () => dispatch(toggleEditModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
