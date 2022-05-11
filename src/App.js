import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarComp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <header className="App-header">
        <p>
        <code>Coming Soon To A Computer Near You!</code>
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
