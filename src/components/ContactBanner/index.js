import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ContactIntro from 'components/ui/ContactIntro';

const ContactBanner = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact intro section" } }) {
        frontmatter {
          title
          subtitle
          content          
        }
      }
    }
  `);

  const contactBanner = markdownRemark.frontmatter;

  return (
    <ContactIntro
      title={contactBanner.title}
      subtitle={contactBanner.subtitle}
      content={contactBanner.content}     
    center />
  );
};

ContactBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ContactBanner;
