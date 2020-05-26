import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { HeadTwo, Close } from "../../../styled-component/Text";
import { connect } from "react-redux";
import {
  toggleSearchModal,
  toggleCreateModal,
} from "../../../redux/modal/actions";
import { MuiButton } from "../../../styled-component/Button";
import {
  SpaceBetween,
  ColumnDirection,
} from "../../../styled-component/Layout";
import { textPrimary } from "./../../../styled-component/Variable";
import HeaderSearchBar from "./../../searchBar/HeaderSearchBar";
import { searchStart } from "../../../redux/content/actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SearchModal = ({
  open,
  toggleSearchModal,
  toggleCreateModal,
  category,
  loading,
  searchStart,
}) => {
  const handleBack = () => {
    toggleSearchModal();
    toggleCreateModal();
  };

  const [params, setParams] = React.useState("");

  const handleSearchSubmit = (e) => {
    //   do something here...
    e.preventDefault();
    searchStart({ params, category });
  };
  const handleSeachbarChange = (e) => {
    setParams(e.target.value);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleBack()}
      >
        <ColumnDirection width="49rem">
          <SpaceBetween p={2} mt={1} mb={2} cr={textPrimary}>
            <HeadTwo>Search title </HeadTwo>
            <Close onClick={() => handleBack()}>
              <KeyboardBackspaceIcon />
            </Close>
          </SpaceBetween>

          <HeaderSearchBar
            handleSeachbarChange={handleSeachbarChange}
            input={params}
            category={category}
          />

          <SpaceBetween mt={1} p={2}>
            <MuiButton
              bg="inherit"
              onClick={() => handleBack()}
              sz="1.2rem"
              cr={textPrimary}
            >
              Back
            </MuiButton>

            <MuiButton
              onClick={handleSearchSubmit}
              bg="inherit"
              sz="1.2rem"
              cr="#87ceeb"
              disabled={loading}
            >
              Apply
            </MuiButton>
          </SpaceBetween>
        </ColumnDirection>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  open: state.modal.openSearch,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearchModal: () => dispatch(toggleSearchModal()),
  toggleCreateModal: () => dispatch(toggleCreateModal()),
  searchStart: (payload) => dispatch(searchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
