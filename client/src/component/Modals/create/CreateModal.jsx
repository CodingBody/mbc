import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { HeadTwo, Close } from "../../../styled-component/Text";
import { connect } from "react-redux";
import { toggleCreateModal } from "../../../redux/modal/actions";
import { EditModalContainer } from "./../../../styled-component/ModalContainer";
import { MuiButton } from "../../../styled-component/Button";
import { createRecordStart } from "../../../redux/main/actions";
import { renderForm } from "./../../../utils/Helper";
import {
  SpaceBetween,
  ColumnDirection,
} from "../../../styled-component/Layout";
import {
  white,
  textPrimary,
  primaryHover,
} from "./../../../styled-component/Variable";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CreateModal = ({ open, setOpen, create, category, record }) => {
  const [form, setForm] = React.useState(null);
  // const inputRef = useRef();

  React.useEffect(() => {
    if (record) {
      setForm(record);
    }
  }, [record]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create({ form, category });
  };

  console.log(form, "form");

  if (!form) return <React.Fragment> </React.Fragment>;
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
            <HeadTwo>Create {category}</HeadTwo>
            <Close onClick={() => setOpen()}>x</Close>
          </SpaceBetween>
          {category && renderForm({ category, form, handleChange })}
          <SpaceBetween p={2}>
            <MuiButton
              bg="inherit"
              onClick={() => setOpen()}
              size="1.2rem"
              cr={textPrimary}
            >
              Cancel
            </MuiButton>

            <MuiButton
              onClick={handleSubmit}
              bg="inherit"
              size="1.2rem"
              cr="#87ceeb"
            >
              Save
            </MuiButton>
          </SpaceBetween>
        </ColumnDirection>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  open: state.modal.openCreate,
  record: state.main.create.record,
});

const mapDispatchToProps = (dispatch) => ({
  setOpen: () => dispatch(toggleCreateModal()),
  create: (data) => dispatch(createRecordStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);
