/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Content, AnimationContainer } from './styles';
import logoImg from '../../assets/logogo.png';
// Create a new form, then add a checkbox question, a multiple choice question,
// a page break, then a date question and a grid of questions.

const Form: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Logo GoBarber" />
          <h1>PsicoTech</h1>

          <h3>A sua solução</h3>
        </AnimationContainer>
      </Content>
      <div>
        <h1>oi</h1>
      </div>
    </Container>
  );
};

export default Form;
