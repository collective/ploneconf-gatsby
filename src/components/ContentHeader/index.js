import React from 'react';
import DocumentHeader from './DocumentHeader';
import PeopleHeader from './PeopleHeader';
import TrainingHeader from './TrainingHeader';
import ContactFormHeader from './ContactFormHeader';
import { object } from 'prop-types';

import './index.scss';

const ContentHeader = props => {
  const { context } = props;
  switch (context['_type']) {
    case 'Training':
      return <TrainingHeader {...props} />;
      break;
    case 'Person':
      return <PeopleHeader />;
    case 'ContactForm':
      return <ContactFormHeader />;
      break;
    default:
      return <DocumentHeader {...props} />;
      break;
  }
};

ContentHeader.propTypes = { context: object };

export default ContentHeader;
