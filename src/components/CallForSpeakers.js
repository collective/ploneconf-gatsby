import React from 'react';
import { array, object } from 'prop-types';
import FormContainer from './form/FormContainer';
import Document from './Document';

const CallForSpeakers = ({ data, images = [], files = [] }) => (
  <React.Fragment>
    <Document
      cssClass="call-for-speakers"
      {...{
        data,
        images,
        files,
      }}
    />
    <div className="talk-submission-form container">
      <FormContainer
        withCaptcha={true}
        schemaEndpoint="@talk-proposal"
        actionEndpoint="@talk-proposal"
      />
    </div>
  </React.Fragment>
);

CallForSpeakers.propTypes = {
  data: object.isRequired,
  images: array,
  files: array,
};

export default CallForSpeakers;
