import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { HeadTwo, Close } from "../../styled-component/Text";
import { connect } from "react-redux";
import { toggleSearchModal } from "../../redux/modal/actions";
import { MuiButton } from "../../styled-component/Button";
import { SpaceBetween, ColumnDirection } from "../../styled-component/Layout";
import { textPrimary } from "./../../styled-component/Variable";
import HeaderSearchBar from "./../searchBar/HeaderSearchBar";
import { searchStart } from "../../redux/content/actions";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PopupTableComponent from "./../table/PopupTableComponent";
import { Box } from "@material-ui/core/";

const theme = createMuiTheme({
  zIndex: {
    modal: 1600,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SearchPopup = ({
  open,
  toggleSearchModal,
  popupCategory,
  loading,
  searchStart,
  recordArray,
  columnNames,
  clLength,
}) => {
  const handleBack = () => {
    toggleSearchModal();
  };

  const [params, setParams] = React.useState("");

  const handleSearchSubmit = (e) => {
    //   do something here...
    e.preventDefault();
    searchStart({ params, category: popupCategory });
  };

  const handleSeachbarChange = (e) => {
    setParams(e.target.value);
  };
  const [selectedId, setSelectedId] = React.useState([]);
  const [selectedName, setSelectedName] = React.useState([]);
  const [records, setRecords] = React.useState(null);

  React.useEffect(() => {
    if (open) {
      searchStart({ category: popupCategory });
    }
  }, [open]);

  const handleCheckBoxChange = (e, record, isChecked) => {
    if (isChecked === false) {
      setSelectedId([...selectedId, record[record.length - 2]]);
      setSelectedName([...selectedName, record[0]]);

      for (let i = 0; i < records.length; i++) {
        if (records[i][record.length - 2] === record[record.length - 2]) {
          records[i][record.length - 1] = true;
        }
      }

      setRecords(records);
    } else if (isChecked === true) {
      let arr = [];
      let nameArr = [];
      for (let i = 0; i < selectedId.length; i++) {
        if (selectedId[i] !== record[record.length - 2]) {
          arr.push(selectedId[i]);
          nameArr.push(selectedName[i]);
        }
      }

      setSelectedName(nameArr);

      setSelectedId(arr);

      for (let i = 0; i < records.length; i++) {
        if (records[i][record.length - 2] === record[record.length - 2]) {
          records[i][record.length - 1] = false;
        }
      }

      setRecords(records);
    }
  };

  if (!recordArray) return <div>loading...</div>;
  return (
    <ThemeProvider theme={theme}>
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
            category={popupCategory}
          />
          <Box py={1} px={3}>
            <PopupTableComponent
              handleCheckBoxChange={handleCheckBoxChange}
              data={records}
              selectedName={selectedName}
              recordArray={recordArray}
              columnNames={columnNames}
              setRecords={setRecords}
              clLength={clLength}
            />
          </Box>
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
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  open: state.modal.openSearch,
  popupCategory: state.modal.popupCategory,
  recordArray: state.content.recordArray,
  columnNames: state.content.columnNames,
  clLength: state.content.clLength,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearchModal: () => dispatch(toggleSearchModal()),
  searchStart: (payload) => dispatch(searchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPopup);
