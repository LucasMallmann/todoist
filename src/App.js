import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import { Container } from './styles/components';
import Sidebar from './components/Sidebar';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Sidebar />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
