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
          filter: { _path: { regex: "/sponsors-links\/gold/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 120) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        silver: allPloneLink(
          filter: { _path: { regex: "/sponsors-links\/silver/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 120) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        bronze: allPloneLink(
          filter: { _path: { regex: "/sponsors-links\/bronze/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 120) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        partners: allPloneLink(
          filter: { _path: { regex: "/sponsors-links\/partners/" } }
        ) {
          nodes {
            id
            title
            remoteUrl
            image {
              childImageSharp {
                fixed(height: 120) {
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
      console.log(data);
      const { gold, silver, bronze, partners, redturtle } = data;

      return (
        <div className="hp-sponsors-partners">
          <div className="container">
            <h2 className="title">
              Official <strong>sponsors</strong> and <strong>partner</strong>
            </h2>
            <div className="sponsors-partners">
              <div className="links-row">
                <div className="sponsor-link organizer">
                  <p className="sponsor-type">Organizer</p>
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
                    <div className="sponsor-link" key={sponsor.id}>
                      <p className="sponsor-type gold">
                        <strong>Gold</strong> Sponsor
                      </p>
                      <a href={sponsor.remoteUrl}>
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
                    <p className="sponsor-type silver">
                      <strong>Silver</strong> Sponsor
                    </p>
                    {silver &&
                      silver.nodes &&
                      silver.nodes.map(sponsor => (
                        <div className="sponsor-link" key={sponsor.id}>
                          <a href={sponsor.remoteUrl}>
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
                    <p className="sponsor-type bronze">
                      <strong>Bronze</strong> Sponsor
                    </p>
                    {bronze.nodes.map(sponsor => (
                      <div className="sponsor-link" key={sponsor.id}>
                        <a href={sponsor.remoteUrl}>
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
                    <p className="sponsor-type partners">Partners</p>
                    {partners.nodes.map(sponsor => (
                      <div className="sponsor-link" key={sponsor.id}>
                        <a href={sponsor.remoteUrl}>
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
              <Link to="/sponsors">
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
