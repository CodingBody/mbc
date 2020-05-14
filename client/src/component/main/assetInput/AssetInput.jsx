import React, { Component } from "react";
import SubHeader from "./../../header/SubHeader";
import RecievedFiles from "./../../fileInput/RecievedFiles";
import FileInput from "../../fileInput/FileInput";
import { getFileType, getFilePurpose } from "../../../utils/Helper";
import { v4 as uuidv4 } from "uuid";
import {
  textPrimary,
  primaryDark,
  primaryHover,
} from "../../../styled-component/Variable";
import { MuiButton } from "../../../styled-component/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { FlexEnd, FlexCenter } from "../../../styled-component/Layout";
import { connect } from "react-redux";
import { uploadFileStart } from "./../../../redux/file/actions";

class AssetInput extends Component {
  state = {
    files: [],
  };
  handleDrop = (files) => {
    let fileList = this.state.files;
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      let obj = {};
      const type = getFileType(files[i].name);
      const purposes = getFilePurpose(type);
      obj.name = files[i].name;
      obj.fileType = type;
      obj.purposes = purposes;
      obj.id = uuidv4();
      obj.selectedPurpose = undefined;

      fileList.push(obj);
    }
    this.setState({ files: fileList });
  };

  handleSelectChange = (e, file) => {
    // const name = e.target.name;
    // const fileToModify = this.state.files.find(f => f.id === file.id )
    // const files = this.state.files.filter(f => f.id !== file.id )
    const { files } = this.state;

    // fileToModify.selectedPurpose = e.target.value;
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].id === file.id, "hi");
      if (files[i].id === file.id) {
        files[i].selectedPurpose = e.target.value;
      }
    }

    this.setState({
      files: files,
    });
  };

  handleSubmit = () => {
    const { uploadFile } = this.props;
    const { files } = this.state;
    if (files.length !== 0) {
      uploadFile(files);
    }
  };

  handleClickFileInput = (e) => {
    if (e.target.files) {
      let files = e.target.files;
      let fileList = [];
      for (let i = 0; i < files.length; i++) {
        if (files[i] !== null && files[i] !== undefined) {
          let obj = {};
          const type = getFileType(files[i].name);
          const purposes = getFilePurpose(type);

          obj.name = files[i].name;
          obj.fileType = type;
          obj.purposes = purposes;
          obj.id = uuidv4();
          obj.selectedPurpose = undefined;

          fileList.push(obj);
        }
      }

      this.setState({
        files: [...this.state.files, ...fileList],
      });
    }
  };

  render() {
    const { category } = this.props;
    return (
      <React.Fragment>
        <SubHeader showCreateButton={false} category={category} />

        <FileInput
          handleClickFileInput={this.handleClickFileInput}
          handleDrop={this.handleDrop}
        />
        <RecievedFiles
          handleSelectChange={this.handleSelectChange}
          files={this.state.files}
        />
        <FlexCenter>
          <FlexEnd width="50%">
            <MuiButton
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => this.handleSubmit()}
              variant="contained"
              cr={textPrimary}
              bg={primaryDark}
              border={primaryHover}
              sz="1.5rem"
            >
              Upload
            </MuiButton>
          </FlexEnd>
        </FlexCenter>
      </React.Fragment>
    );
  }
}

const dispatchActionToProps = (dispatch) => ({
  uploadFile: (file) => dispatch(uploadFileStart(file)),
});

export default connect(null, dispatchActionToProps)(AssetInput);
