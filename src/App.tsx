import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';


interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
