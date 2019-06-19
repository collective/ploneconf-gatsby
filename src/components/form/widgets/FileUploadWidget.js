import React from 'react';
import { string, func } from 'prop-types';
import DropzoneStyled from 'react-dropzone-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
            {/* {uploadedFile.name} */}
            <img src={uploadedFile.preview} className="img" alt="" />
          </div>
        </div>
      );
    }
    return (
      <DropzoneStyled
        onDrop={files => {
          const reader = new FileReader();
          reader.onload = event => {
            handleUpdate({ id, value: event.target.result });
          };
          reader.readAsDataURL(files[0]);
          this.setState({ uploadedFile: files[0] });
        }}
      >
        <section className="dropzone-content">
          <span className="icon-line">
            {file || <FontAwesomeIcon icon={faUser} />}
          </span>
          <p className="main-line">Drag and drop an image here</p>
          <p className="or-line">or</p>
          <p>
            <button type="button" className="browse-button">
              Browse files
            </button>
          </p>
        </section>
      </DropzoneStyled>
    );
  }
}

FileUploadWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
};

export default FileUploadWidget;
