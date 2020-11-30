import React from 'react';
import PropTypes from 'prop-types';


import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const ContactIntro = ({ center, title, subtitle, content,}) => (
  <Styled.ContactIntro>
    <Container section>
      <TitleSection center={center} title={title} subtitle={subtitle} />
      <Styled.Content center={center} >{content}</Styled.Content>    
    </Container>
  </Styled.ContactIntro>
);

ContactIntro.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  
};

export default ContactIntro;
