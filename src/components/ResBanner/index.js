import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ResIntro from 'components/ui/ResIntro';

const ResBanner = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "resume intro section" } }) {
        frontmatter {
          title
          subtitle
          content          
        }
      }
    }
  `);

  const resBanner = markdownRemark.frontmatter;

  return (
    <ResIntro
      title={resBanner.title}
      subtitle={resBanner.subtitle}
      content={resBanner.content}     
    />
  );
};

ResBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ResBanner;
