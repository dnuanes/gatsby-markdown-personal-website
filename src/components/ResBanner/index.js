import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import MeetIntro from 'components/ui/MeetIntro';

const MeetBanner = () => {
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

  const meetBanner = markdownRemark.frontmatter;

  return (
    <MeetIntro
      title={meetBanner.title}
      subtitle={meetBanner.subtitle}
      content={meetBanner.content}     
    />
  );
};

MeetBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MeetBanner;
