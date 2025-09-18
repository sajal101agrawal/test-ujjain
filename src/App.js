import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: var(--white);
    color: var(--gray-800);
    overflow-x: hidden;
    font-weight: 400;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 84px);
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--cream-bg) 100%);
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <ContentWrapper>
          <Dashboard />
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default App;
