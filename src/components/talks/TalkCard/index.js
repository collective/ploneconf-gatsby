import React, { Component } from 'react';
import { Link } from 'gatsby';
import { object } from 'prop-types';
import PersonImage from '../../people/PersonImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ellipsis } from 'ellipsed';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMap } from '@fortawesome/free-solid-svg-icons';

class TalkCard extends Component {
  componentDidMount() {
    ellipsis('.description', 4);
  }
  render() {
    const talk = this.props.talk;
    return (
      <React.Fragment>
        <div className="talk-card">
          <div className="card-content">
            <h4>
              <Link to={talk._path} title="details">
                {' '}
                {talk.title}{' '}
              </Link>
            </h4>
            <div className="info">
              {talk.room && (
                <div className="col">
                  <FontAwesomeIcon icon={faMap} /> {talk.room}
                </div>
              )}
              {talk.start && (
                <div className="col">
                  <FontAwesomeIcon icon={faClock} /> {talk.start}
                </div>
              )}
            </div>
            <p className="description">{talk.description}</p>
          </div>
          <div className="card-footer">
            <div className="speaker">
              <PersonImage
                person={talk.speakers[0]}
                size="mini"
                viewDefaultImage={true}
              />
              <div className="speaker-details">
                <Link
                  to={talk.speakers[0]._path}
                  title="details"
                  key={talk.speakers[0].id}
                >
                  {talk.speakers[0].title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
TalkCard.propTypes = {
  talk: object,
};

export default TalkCard;
