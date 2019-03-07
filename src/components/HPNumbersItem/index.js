import React from 'react';
import './index.scss';

const HPNumbersItem = ({ icon, number, text, subtitle }) => (
  <div className="hp-numbers-item">
    <div className="icon-wrapper">{icon()}</div>
    <div className="text-wrapper">
      <div className="text-row">
        <span className="number">{number}</span>
        <span className="text">{text}</span>
      </div>
      <p className="subtitle">{subtitle}</p>
    </div>
  </div>
);

export default HPNumbersItem;
