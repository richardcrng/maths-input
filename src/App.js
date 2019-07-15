import React from 'react';
import './App.css';
import MathsInputEnabler from './components/organism/MathsInputEnabler';
import Input from './components/atoms/Input';

function App() {
  return (
    <MathsInputEnabler>
      <Input />
    </MathsInputEnabler>
  );
}

export default App;
