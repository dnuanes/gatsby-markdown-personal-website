import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import MeetIntro from 'components/ui/MeetIntro';

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
    <MeetIntro
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
