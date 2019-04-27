import React from 'react';
import { array, object } from 'prop-types';
import TalkSubmission from './TalkSubmission';
import Document from './Document';

const CallForSpeakers = ({ data, images = [], files = [] }) => (
  <React.Fragment>
    <Document
      {...{
        data,
        images,
        files,
      }}
    />
    <TalkSubmission />
  </React.Fragment>
);

CallForSpeakers.propTypes = {
  data: object.isRequired,
  images: array,
  files: array,
};

export default CallForSpeakers;
