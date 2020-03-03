import React, { Component } from "react";
import axios from "axios";

class UploadButton extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
  }

  onFileSelected = event => {
    this.setState({ file: event.target.files[0] });
  };

  //encodeImageFileAsURL(file) {
    //var reader = new FileReader();
    //reader.onloadend = function() {
      //let base64 = reader.result.replace("data:image/png;base64,", "");
     // base64 = reader.result.replace("data:image/jpeg;base64,", "");
     // const data = { imabeBase64: base64 };
     // axios.post("http://localhost:30000/image", data);
    //};
    //reader.readAsDataURL(file);
  //}

  encodeImageFileAsURL(file) {
    var reader = new FileReader();
    reader.onloadend = function() {
      var prefix;
      if (file.type === "image/png") {
        prefix = "data:image/png;base64,";
      }

      if (file.type === "image/jpeg") {
        prefix = "data:image/jpeg;base64,";
      }

      let base64 = reader.result.replace(prefix, "");
      const data = { imabeBase64: base64 };
      axios.post("http://localhost:30000/image", data);
    };
    reader.readAsDataURL(file);
  }
  onSubmitClick(file) {
    this.encodeImageFileAsURL(this.state.file);
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.onFileSelected}></input>
        <button type="submit" onClick={this.onSubmitClick.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

export default UploadButton;
