import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

