import React from 'react';
import cx from 'classnames';
import { array } from 'prop-types';
import './index.scss';

const LabelRow = ({ labels }) => {
  return (
    <div className="label-row">
      {labels.map(label => {
        return (
          <span key={label.text} className={cx('label', label.color)}>
            {label.text}
          </span>
        );
      })}
    </div>
  );
};

LabelRow.propTypes = {
  labels: array,
};

export default LabelRow;
