import React, { useEffect, useState } from 'react';
import { string, func } from 'prop-types';
import Dropzone from 'react-dropzone';

const FileUploadWidget = ({ value, id, handleUpdate }) => {
  let file = '';
  if (value) {
    file = (
      <div className="thumb">
        <div className="thumb-inner">
          <img src={value.preview} className="img" alt="" />
        </div>
      </div>
    );
  }
  return (
    <Dropzone onDrop={files => handleUpdate({ id, value: files[0] })}>
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
};

FileUploadWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
};

export default FileUploadWidget;
