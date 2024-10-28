import React, { useEffect, useState } from 'react';
import { AboutContainer, Title, Body } from './aboutApoloStyles';
import { fetchAboutText } from './aboutApoloDm';

const AboutApolo = () => {
  const [textData, setTextData] = useState({ title: "", body: "" });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAboutText();
      setTextData(data);
    };
    loadData();
  }, []);

  return (
    <AboutContainer>
      <Title>{textData.title}</Title>
      <Body>{textData.body}</Body>
    </AboutContainer>
  );
};

export default AboutApolo;
