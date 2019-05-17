import React from 'react';
import './App.scss';
import Header from './features/Header/Header.js'
import Footer from './features/Footer/Footer.js'
import Body from './features/Content/Main.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
