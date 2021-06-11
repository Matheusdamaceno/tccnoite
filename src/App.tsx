import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';

import Appprovider from './hooks';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Appprovider>
        <Routes />
      </Appprovider>

      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
