import React from 'react';
import { string, func } from 'prop-types';
import Dropzone from 'react-dropzone';

class FileUploadWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: null,
    };
  }

  render() {
    const { value, id, handleUpdate } = this.props;
    const { uploadedFile } = this.state;
    let file = '';
    if (uploadedFile && value) {
      file = (
        <div className="thumb">
          <div className="thumb-inner">
            {uploadedFile.name}
            {/* <img src={uploadedFile.preview} className="img" alt="" /> */}
          </div>
        </div>
      );
    }
    return (
      <Dropzone
        onDrop={files => {
          const reader = new FileReader();
          reader.onload = event => {
            handleUpdate({ id, value: event.target.result });
          };
          reader.readAsDataURL(files[0]);
          this.setState({ uploadedFile: files[0] });
        }}
      >
        {() => (
          <section className="container">
            <div className="dropzone">
              <input />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>File</h4>
              <aside className="thumbs-container">{file}</aside>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

FileUploadWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
};

export default FileUploadWidget;
