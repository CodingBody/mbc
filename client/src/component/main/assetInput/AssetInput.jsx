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
import { insertFileToS3 } from "./insertFileToS3";

class AssetInput extends Component {
  state = {
    files: [],
  };

  getProgress = (progress, key) => {
    const { files } = this.state;

    const newArr = files.map((file) => {
      if (file.name === key) {
        file.progress = progress;
      }
      return file;
    });

    this.setState({
      ...this.state,
      files: newArr,
    });
  };
  handleDrop = (files) => {
    let fileList = this.state.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i] !== null && files[i] !== undefined) {
        const fileExist = fileList.filter(
          (file) => file.name === files[i].name
        );
        if (fileExist.length > 0) {
        } else {
          const purposes = getFilePurpose(files[i].type);

          files[i].purposes = purposes;
          files[i].id = uuidv4();
          files[i].selectedPurpose = undefined;
          files[i].progress = 0;

          fileList.push(files[i]);
        }
      }
    }
    this.setState({ files: fileList });
  };

  handleClickFileInput = (e) => {
    if (e.target.files) {
      let files = e.target.files;
      let fileList = [];
      for (let i = 0; i < files.length; i++) {
        if (files[i] !== null && files[i] !== undefined) {
          const fileExist = fileList.filter(
            (file) => file.name === files[i].name
          );
          if (fileExist.length > 0) {
          } else {
            const purposes = getFilePurpose(files[i].type);

            files[i].purposes = purposes;
            files[i].id = uuidv4();
            files[i].selectedPurpose = undefined;
            files[i].progress = 0;

            fileList.push(files[i]);
          }
        }
      }

      this.setState({
        files: [...this.state.files, ...fileList],
      });
    }
  };

  handleSelectChange = (e, file) => {
    const { files } = this.state;

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
    const { files } = this.state;
    const { user } = this.props;
    console.log(user, "user");

    if (files.length !== 0) {
      insertFileToS3(user, files, this.getProgress);
    } else {
      alert("There is no file to upload !");
    }
  };

  render() {
    const { files } = this.state;
    console.log(files, "files");
    const { category } = this.props;
    return (
      <React.Fragment>
        <SubHeader category={category} />

        <FileInput
          handleClickFileInput={this.handleClickFileInput}
          handleDrop={this.handleDrop}
        />
        <RecievedFiles
          handleSelectChange={this.handleSelectChange}
          files={files}
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const dispatchActionToProps = (dispatch) => ({
  uploadFile: (file) => dispatch(uploadFileStart(file)),
});

export default connect(mapStateToProps, dispatchActionToProps)(AssetInput);
