import React from "react";
import SubHeader from "./../../header/SubHeader";

const AssetInput = ({ category }) => {
  const [state, setState] = React.useState({
    title: "",
    content: "",
    file: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,

      [e.target.id]: e.target.value,
    });
  };
  const handleOnFileChange = (e) => {
    let file = e.target.files[0];
    setState({
      ...state,
      [e.target.id]: file,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(state, "state");
  return (
    <React.Fragment>
      <SubHeader showCreateButton={false} category={category} />
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" onChange={handleChange} />

        <textarea id="content" onChange={handleChange}></textarea>

        <input type="file" id="file" onChange={handleOnFileChange} />
      </form>
    </React.Fragment>
  );
};

export default AssetInput;
