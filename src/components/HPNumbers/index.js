import React from 'react';

import HPNumbersItem from '../HPNumbersItem';
import TrainingSVG from '../svg/TrainingSVG';
import ConferenceSVG from '../svg/ConferenceSVG';
import SprintSVG from '../svg/SprintSVG';
import EpicPartySVG from '../svg/EpicPartySVG';

import './index.scss';

const HPNumbers = () => (
  <div className="hp-numbers">
    <div className="container flex-helper">
      <HPNumbersItem
        icon={TrainingSVG}
        number="2"
        text="days"
        subtitle="Trainings"
      />
      <HPNumbersItem
        icon={ConferenceSVG}
        number="+60"
        text="talks"
        subtitle="Conference"
      />
      <HPNumbersItem
        icon={SprintSVG}
        number="16"
        text="hours"
        subtitle="Sprint"
      />
      <HPNumbersItem
        icon={EpicPartySVG}
        number="1"
        text="night"
        subtitle="Epic party!"
      />
    </div>
  </div>
);

export default HPNumbers;
