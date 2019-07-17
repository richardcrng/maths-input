import React from 'react';
import './App.css';
import MathsInputEnabler from './components/organism/MathsInputEnabler';
import Demo from './components/pages/Demo';

function App() {
  return (
    <MathsInputEnabler>
      <Demo />
    </MathsInputEnabler>
  );
}

export default App;
