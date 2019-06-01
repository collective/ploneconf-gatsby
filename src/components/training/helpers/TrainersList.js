import React from 'react';
import { array, object, string } from 'prop-types';

const TrainersList = ({ data }) => {
  if (data.length === 0) {
    return ''
  }
  return <div className="trainings-list">
    {data.map(node => )}
  </div>;
};

TrainersList.propTypes = {
  data: array,
};

const TrainersList = ({ data }) => {
  if (data.length === 0) {
    return ''
  }
  return <div className="trainings-list">
    {data.map(node => )}
  </div>;
};

TrainersList.propTypes = {
  data: array,
};

export default TrainersList;
