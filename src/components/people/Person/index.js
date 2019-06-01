import React from 'react';
import { object, string } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PeopleHeader from '../PeopleHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import PersonTrainings from '../PersonTrainings';
import PersonTalks from '../PersonTalks';

import './index.scss';
import Breadcrumbs from '../../Breadcrumbs';

const Person = ({ data, breadcrumbs, cssClass }) => {
  const { title, bio, github, twitter, image, id } = data;

  return (
    <React.Fragment>
      <PeopleHeader />
      {breadcrumbs && <Breadcrumbs data={breadcrumbs} skipLast={true} />}
      <article key={data._id} className={cx('document-content', cssClass)}>
        <div className="container" />
        <div className="person-details">
          <div className="column left-block">
            {image && image.childImageSharp ? (
              <Img resolutions={image.childImageSharp.fixed} />
            ) : null}
            <h2>{title}</h2>
            {twitter && twitter.length ? (
              <div className="twitter-link">
                <FontAwesomeIcon icon={faTwitter} />{' '}
                <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
              </div>
            ) : (
              ''
            )}{' '}
            {github && github.length ? (
              <div className="github-link">
                <FontAwesomeIcon icon={faGithub} />{' '}
                <a href={`https://github.com/${github}`}>{github}</a>
              </div>
            ) : (
              ''
            )}
            {bio && bio.length ? <div className="bio">{bio}</div> : ''}
          </div>
          <div className="column right-block">
            <PersonTrainings id={id} />
            <PersonTalks id={id} />
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

Person.propTypes = {
  data: object.isRequired,
  cssClass: string,
  breadcrumbs: object,
};

export default Person;

export const query = graphql`
  fragment Person on PlonePerson {
    id
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
`;
