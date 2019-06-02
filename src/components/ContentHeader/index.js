import React from 'react';
import DocumentHeader from './DocumentHeader';
import PeopleHeader from './PeopleHeader';
import TrainingHeader from './TrainingHeader';
import { object } from 'prop-types';

const ContentHeader = props => {
  const { context } = props;
  switch (context['_type']) {
    case 'Training':
      return <TrainingHeader {...props} />;
      break;
    case 'Person':
      return <PeopleHeader />;
    default:
      return <DocumentHeader {...props} />;
      break;
  }
};

ContentHeader.propTypes = { context: object };

export default ContentHeader;
