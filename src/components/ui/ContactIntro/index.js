import React from 'react';
import PropTypes from 'prop-types';


import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const ContactIntro = ({ title, subtitle, content,}) => (
  <Styled.ContactIntro>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>    
    </Container>
  </Styled.ContactIntro>
);

ContactIntro.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  
};

export default ContactIntro;
