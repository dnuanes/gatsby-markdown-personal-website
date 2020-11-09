import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Intro from 'components/ui/Intro';

const RegBanner = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "intro section" } }) {
        frontmatter {
          title
          subtitle
          content          
        }
      }
    }
  `);

  const regBanner = markdownRemark.frontmatter;

  return (
    <Intro
      title={regBanner.title}
      subtitle={regBanner.subtitle}
      content={regBanner.content}     
    />
  );
};

RegBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default RegBanner;
