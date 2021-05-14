import React from 'react';
import { faq } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.image} />
    {faq.text}
  </Container>
);

export default Faq;