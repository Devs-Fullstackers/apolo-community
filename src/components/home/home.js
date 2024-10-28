import React, { useEffect, useState } from 'react';
import { HomeContainer, Title, Button } from './homeStyles';
import { useNavigate } from 'react-router-dom';
import { handleNavigateToAbout } from './homeDm';
import { fetchTextData } from './homeDm';

const Apolo = () => {
  const navigate = useNavigate();
  const [textData, setTextData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTextData();
      setTextData(data);
    };
    loadData();
  }, []);

  return (
    <HomeContainer>
      <Title>{textData.homeTitle}</Title>
      <Button onClick={() => handleNavigateToAbout(navigate)}>
        {textData.homeButtonText}
      </Button>
    </HomeContainer>
  );
};

export default Apolo;
