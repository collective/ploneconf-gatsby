import React from 'react';
import Slider from 'react-slick';
import PersonImage from '../../people/PersonImage';
import { array } from 'prop-types';
import { Link } from 'gatsby';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.scss';

const TalksSlider = ({ talks }) => {
  /****** init slider ******/
  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   console.log('talks', talks);
  return (
    <React.Fragment>
      <div className="talks-list">
        <div className="black-block" />
        <div className="blue-block" />
        <div className="container">
          <h3>Talks</h3>
          {/* <div className="subtitle" /> */}
          <div className="talks-container">
            <Slider {...sliderSettings}>
              {talks.map(talk => (
                <div className="talk" key={talk.node.id}>
                  <div className="col speaker">
                    <PersonImage
                      person={talk.node.speakers[0]}
                      size="small"
                      viewDefaultImage={true}
                    />
                  </div>
                  <div className="col talk-data">
                    <div className="data">
                      <div className="speakers">
                        {talk.node.speakers.map(function(p) {
                          if (p) {
                            return (
                              <Link to={p._path} title="details" key={p.id}>
                                {p.title}
                              </Link>
                            );
                          }
                        })}
                      </div>
                      <h4>
                        <Link to={talk.node._path} title="details">
                          {talk.node.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
TalksSlider.propTypes = {
  talks: array,
};

export default TalksSlider;
