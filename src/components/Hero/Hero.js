import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          I'm Mihika Parmar, a Computer Science Undergrad at IIIT Nagpur. 
          I'm have experience in C/C++, Web Technologies, ML and Deep Learning. Currently, I am exploring Blockchain.
           I'm passionate about Web Development, Machine Learning and Competitive Programming.
           In free time you'll find me with a Book and a Cup of Chai!!
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/Mihika.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
