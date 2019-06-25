import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import HPhrSVG from '../svg/HPhrSVG';
import HPhrAltSVG from '../svg/HPhrAltSVG';

import './index.scss';

const HPSponsorsPartners = () => (
  <StaticQuery
    query={graphql`
      {
        gold: allPloneLink(
          filter: { _path: { regex: "/sponsors-links/gold/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 90) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        silver: allPloneLink(
          filter: { _path: { regex: "/sponsors-links/silver/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 80) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        bronze: allPloneLink(
          filter: { _path: { regex: "/sponsors-links/bronze/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 60) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        supporting: allPloneLink(
          filter: { _path: { regex: "/sponsors-links/supporting/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 30) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        individual: allPloneLink(
          filter: { _path: { regex: "/sponsors-links/individual/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 35) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        partners: allPloneLink(
          filter: { _path: { regex: "/sponsors-links/partners/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 80) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        redturtle: ploneImage(_id: { eq: "redturtle.png" }) {
          id
          image {
            childImageSharp {
              fixed(height: 120) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        gold,
        silver,
        bronze,
        supporting,
        individual,
        partners,
        redturtle,
      } = data;

      return (
        <div className="hp-sponsors-partners">
          <div className="container">
            <h2 className="title">
              Official <strong>sponsors</strong> and <strong>partner</strong>
            </h2>
            <div className="sponsors-partners">
              <div className="links-row">
                <div className="ploneconf-sponsor-link organizer">
                  <p className="ploneconf-sponsor-type">Organizer</p>
                  <a href="https://www.redturtle.it">
                    <Img
                      fixed={redturtle.image.childImageSharp.fixed}
                      alt="RedTurtle"
                    />
                  </a>
                </div>
                {gold &&
                  gold.nodes &&
                  gold.nodes.map(sponsor => (
                    <div
                      className="ploneconf-sponsor-link gold"
                      key={sponsor.id}
                    >
                      <p className="ploneconf-sponsor-type gold">
                        <strong>Gold</strong> Sponsor
                      </p>
                      <a
                        href={sponsor.remoteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Img
                          fixed={sponsor.image.childImageSharp.fixed}
                          alt={sponsor.title}
                        />
                      </a>
                    </div>
                  ))}
              </div>
              {silver && silver.nodes && silver.nodes.length > 0 && (
                <React.Fragment>
                  <div className="hr">
                    <HPhrSVG />
                  </div>
                  <div className="links-row">
                    <p className="ploneconf-sponsor-type silver">
                      <strong>Silver</strong> Sponsor
                    </p>
                    {silver &&
                      silver.nodes &&
                      silver.nodes.map(sponsor => (
                        <div
                          className="ploneconf-sponsor-link silver"
                          key={sponsor.id}
                        >
                          <a
                            href={sponsor.remoteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Img
                              fixed={sponsor.image.childImageSharp.fixed}
                              alt={sponsor.title}
                            />
                          </a>
                        </div>
                      ))}
                  </div>
                </React.Fragment>
              )}
              {bronze && bronze.nodes && bronze.nodes.length > 0 && (
                <React.Fragment>
                  <div className="hr">
                    <HPhrAltSVG />
                  </div>
                  <div className="links-row">
                    <p className="ploneconf-sponsor-type bronze">
                      <strong>Bronze</strong> Sponsor
                    </p>
                    {bronze.nodes.map(sponsor => (
                      <div
                        className="ploneconf-sponsor-link bronze"
                        key={sponsor.id}
                      >
                        <a
                          href={sponsor.remoteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            fixed={sponsor.image.childImageSharp.fixed}
                            alt={sponsor.title}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              )}
              {supporting && supporting.nodes && supporting.nodes.length > 0 && (
                <React.Fragment>
                  <div className="hr">
                    <HPhrSVG />
                  </div>
                  <div className="links-row">
                    <p className="ploneconf-sponsor-type supporting">
                      <strong>Supporting</strong> Sponsor
                    </p>
                    {supporting.nodes.map(sponsor => (
                      <div
                        className="ploneconf-sponsor-link supporting"
                        key={sponsor.id}
                      >
                        <a
                          href={sponsor.remoteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            fixed={sponsor.image.childImageSharp.fixed}
                            alt={sponsor.title}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              )}
              {individual && individual.nodes && individual.nodes.length > 0 && (
                <React.Fragment>
                  <div className="hr">
                    <HPhrAltSVG />
                  </div>
                  <div className="links-row">
                    <p className="ploneconf-sponsor-type individual">
                      <strong>Individual</strong> Sponsor
                    </p>
                    {individual.nodes.map(sponsor => (
                      <div
                        className="ploneconf-sponsor-link individual"
                        key={sponsor.id}
                      >
                        <a
                          href={sponsor.remoteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            fixed={sponsor.image.childImageSharp.fixed}
                            alt={sponsor.title}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              )}
              {partners && partners.nodes && partners.nodes.length > 0 && (
                <React.Fragment>
                  <div className="hr">
                    <HPhrSVG />
                  </div>
                  <div className="links-row">
                    <p className="ploneconf-sponsor-type partners">
                      <strong>Technical</strong> Partners
                    </p>
                    {partners.nodes.map(sponsor => (
                      <div
                        className="ploneconf-sponsor-link partners"
                        key={sponsor.id}
                      >
                        <a
                          href={sponsor.remoteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            fixed={sponsor.image.childImageSharp.fixed}
                            alt={sponsor.title}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              )}
            </div>
            <div className="cta-sponsors">
              <Link to="/sponsors" className="btn btn-primary btn-lg">
                <span>Become a sponsor</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }}
  />
);

export default HPSponsorsPartners;
