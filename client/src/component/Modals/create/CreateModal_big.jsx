import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { HeadTwo, Close } from "../../../styled-component/Text";
import { connect } from "react-redux";
import {
  toggleCreateModal,
  toggleSearchModal,
} from "../../../redux/modal/actions";
import { MuiButton } from "../../../styled-component/Button";
import { createRecordStart } from "../../../redux/main/actions";
import { renderForm } from "./../../../utils/Helper";
import {
  SpaceBetween,
  ColumnDirection,
} from "../../../styled-component/Layout";
import { textPrimary } from "./../../../styled-component/Variable";
import ContentForm from "../../form/ContentForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CreateModalBig = ({
  loading,
  open,
  setOpen,
  create,
  category,
  record,
  toggleSearch,
}) => {
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
          <ContentForm
            form={form}
            handleChange={handleChange}
            category={category}
            setOpen={toggleSearch}
          />
          <SpaceBetween p={2}>
            <MuiButton
              bg="inherit"
              onClick={() => setOpen()}
              sz="1.2rem"
              cr={textPrimary}
            >
              Cancel
            </MuiButton>

            <MuiButton
              onClick={handleSubmit}
              bg="inherit"
              sz="1.2rem"
              cr="#87ceeb"
              disabled={loading}
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
  open: state.modal.openCreate_big,
  record: state.main.create.record,
});

const mapDispatchToProps = (dispatch) => ({
  setOpen: () => dispatch(toggleCreateModal()),
  toggleSearch: () => dispatch(toggleSearchModal()),
  create: (data) => dispatch(createRecordStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateModalBig);
