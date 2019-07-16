import React from 'react';
import './App.css';
import MathsInputEnabler from './components/organism/MathsInputEnabler';
import MathsInput from './components/molecules/MathsInput';

function App() {
  return (
    <MathsInputEnabler>
      <MathsInput />
    </MathsInputEnabler>
  );
}

export default App;
