import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import WorkIntro from 'components/ui/WorkIntro';

const WorkBanner = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "work intro section" } }) {
        frontmatter {
          title
          subtitle
          content          
        }
      }
    }
  `);

  const workBanner = markdownRemark.frontmatter;

  return (
    <WorkIntro
      title={workBanner.title}
      subtitle={workBanner.subtitle}
      content={workBanner.content}     
    />
  );
};

WorkBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default WorkBanner;
