import React from 'react';
const DefaultBlock = props => {
  const { strValue, cssClass, label } = props;
  if (!strValue || (strValue && strValue.length === 0)) {
    return '';
  }

  return (
    <div className={cssClass}>
      <h4>{label}</h4>
      {strValue}
    </div>
  );
};

export default DefaultBlock;
