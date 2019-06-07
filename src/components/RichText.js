import React from 'react';
import { graphql, Link } from 'gatsby';
// import Img from 'gatsby-image';
import { deserialize } from 'react-serialize';

const ResolveImage = images => data => {
  let byPath = images.reduce(
    (map, image) => map.set(image._path, image),
    new Map(),
  );
  if (byPath.get(data.src)) {
    const imgProps = byPath.get(data.src).image.childImageSharp;
    return (
      <img src={imgProps.fluid.src} className={data.className} alt={data.alt} />
    );
    // return (
    //   <Img
    //     Tag="span"
    //     className={data.className}
    //     fluid={imgProps.fluid}
    //     style={{
    //       maxWidth: imgProps.fluid.presentationWidth,
    //       margin: '0 auto', // Used to center the image
    //     }}
    //   />
    // );
  } else {
    return <img src={data.src} alt={data.alt} title={data.title} />;
  }
};

const ResolveLink = files => data => {
  let byPath = files.reduce(
    (map, file) => map.set(file._path, file),
    new Map(),
  );
  if (byPath.get(data.to)) {
    return (
      <a
        href={byPath.get(data.to).file.publicURL}
        download={byPath.get(data.to).file.filename}
      >
        {data.children}
      </a>
    );
  } else {
    return <Link to={data.to}>{data.children}</Link>;
  }
};

const RichText = ({ serialized, images, files }) => (
  <React.Fragment>
    {deserialize(serialized, {
      components: {
        Link: ResolveLink(files),
        Img: ResolveImage(images),
      },
    })}
  </React.Fragment>
);
export default RichText;

export const query = graphql`
  fragment Image on PloneImage {
    id
    title
    image {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1100, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    _path
  }

  fragment File on PloneFile {
    id
    title
    description
    file {
      filename
      publicURL
    }
    _type
    _path
  }
`;
