import React from 'react';
import Navbar from './components/Navbar';


interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
