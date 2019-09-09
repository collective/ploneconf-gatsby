import React from 'react';
import { array, object } from 'prop-types';
// import FormContainer from '../form/FormContainer';
import Document from '../Document';

import './index.scss';

const CallForSpeakers = ({ data, images = [], files = [] }) => (
  <React.Fragment>
    <Document
      cssClass="call-for-speakers"
      {...{
        data,
        images,
        files,
      }}
    >
      {/* <div className="talk-submission-form" id="talk-form">
        <hr />
        <h3>Submit your proposal</h3>
        <FormContainer
          withCaptcha={true}
          schemaEndpoint="@talk-proposal"
          actionEndpoint="@talk-proposal"
        />
      </div> */}
    </Document>
  </React.Fragment>
);

CallForSpeakers.propTypes = {
  data: object.isRequired,
  images: array,
  files: array,
};

export default CallForSpeakers;
