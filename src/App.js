import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import { Container } from './styles/components';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Sidebar />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
