import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import MainPage from './views/MainPage'

const App = () => {
  return (
    <GlobalProvider>
     <MainPage />
    </GlobalProvider>
  );
}

export default App;
