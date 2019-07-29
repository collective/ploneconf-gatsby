import React from 'react';
import { object, string, array } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import PersonTrainings from '../PersonTrainings';
import PersonTalks from '../PersonTalks';
import PersonImage from '../PersonImage';
import CTATickets from '../../CTATickets';
import LabelRow from '../../LabelRow';

import './index.scss';
import Breadcrumbs from '../../Breadcrumbs';
import BirdSVG from '../../svg/BirdSVG';

const Person = ({ data, trainings, talks, breadcrumbs, cssClass }) => {
  const { title, bio, github, twitter, image, id } = data;
  let labels = [];
  //console.log('data', data);
  //console.log(trainings);

  //verify if has trainings
  if (trainings) {
    const filteredTrainings = trainings.filter(node => {
      const trainers = node.related_people.filter(
        trainer => trainer._id === id,
      );
      return trainers.length !== 0;
    });

    if (filteredTrainings.length > 0) {
      labels.push({ text: 'Trainer', color: 'red' });
    }
  }

  //verify if has talks

  if (talks) {
    const filteredTalks = talks.filter(node => {
      const trainers = node.related_people.filter(
        trainer => trainer._id === id,
      );
      return trainers.length !== 0;
    });

    if (filteredTalks.length > 0) {
      labels.push({ text: 'Speaker', color: 'red' });
    }
  }

  return (
    <React.Fragment>
      {breadcrumbs && <Breadcrumbs data={breadcrumbs} skipLast={true} />}
      <article key={data._id} className={cx('document-content', cssClass)}>
        <div className="container">
          <LabelRow labels={labels} />
          <div className="person-details">
            <div className="column left-block">
              <div className="user-general">
                <PersonImage person={data} viewDefaultImage={false} />
                <div className="user-data">
                  <h2>{title}</h2>

                  <div className="user-link">
                    {twitter && twitter.length ? (
                      <div className="link twitter-link">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />{' '}
                        <a href={`https://twitter.com/${twitter}`}>
                          @{twitter}
                        </a>
                      </div>
                    ) : (
                      ''
                    )}{' '}
                    {github && github.length ? (
                      <div className="link github-link">
                        <FontAwesomeIcon icon={faGithub} size="2x" />{' '}
                        <a href={`https://github.com/${github}`}>{github}</a>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              {bio && bio.length ? <div className="bio">{bio}</div> : ''}
            </div>
            <div className="column right-block">
              <PersonTrainings id={id} />
              {/*<PersonTalks id={id} />*/}
            </div>
          </div>
          <div className="bird-sep">
            <BirdSVG />
          </div>
        </div>
      </article>
      <CTATickets />
    </React.Fragment>
  );
};

Person.propTypes = {
  data: object.isRequired,
  trainings: array,
  talks: array,
  cssClass: string,
  breadcrumbs: object,
};

export default Person;

export const query = graphql`
  fragment Person on PlonePerson {
    id
    _type
    title
    bio
    github
    twitter
    _path
    image {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  fragment TrainingFragment on PloneTraining {
    UID
    id
    _path
    title
    duration
    start
    end
    related_people {
      _id
    }
  }
  fragment TalkFragment on PloneTalk {
    UID
    id
    _path
    title
    description
    duration
    related_people {
      _id
    }
    #keynote
  }
`;
