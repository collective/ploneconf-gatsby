import React from 'react';
import { object, string } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import PersonTrainings from '../PersonTrainings';
import PersonTalks from '../PersonTalks';
import CTATickets from '../../CTATickets';

import './index.scss';
import Breadcrumbs from '../../Breadcrumbs';
import BirdSVG from '../../svg/BirdSVG';

const Person = ({ data, breadcrumbs, cssClass }) => {
  const { title, bio, github, twitter, image, id } = data;

  return (
    <React.Fragment>
      {breadcrumbs && <Breadcrumbs data={breadcrumbs} skipLast={true} />}
      <article key={data._id} className={cx('document-content', cssClass)}>
        <div className="container">
          <div className="label-row">
            <span className="label">Speaker</span>
          </div>
          <div className="person-details">
            <div className="column left-block">
              <div className="user-general">
                {image && image.childImageSharp ? (
                  <div className="user-image">
                    <div className="rounded-image">
                      <Img resolutions={image.childImageSharp.fixed} />
                    </div>
                  </div>
                ) : null}
                <div className="user-data">
                  <h2>{title}</h2>

                  <div class="user-link">
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
              <PersonTalks id={id} />
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
`;
