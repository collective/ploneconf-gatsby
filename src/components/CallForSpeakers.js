import React from 'react';
import RichText from './RichText';
import TalkSubmission from './TalkSubmission';

const CallForSpeakers = ({ data, images = [] }) => (
  <article key={data._id}>
    <h1>{data.title}</h1>
    {data.description ? (
      <p>
        <strong>{data.description}</strong>
      </p>
    ) : null}
    {data.text ? (
      <RichText serialized={data.text.react} images={images} />
    ) : null}
    <TalkSubmission />
  </article>
);

export default CallForSpeakers;
