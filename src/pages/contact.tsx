import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ContactBanner from 'components/ContactBanner';
import ContactInfo from 'components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactBanner />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;
