import React from 'react';
import { Container, Content, AnimationContainer } from './styles';
import logoImg from '../../assets/logogo.png';

const Dashboard: React.FC = () => {
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
        <h1>Menu</h1>
      </div>
    </Container>
  );
};

export default Dashboard;
