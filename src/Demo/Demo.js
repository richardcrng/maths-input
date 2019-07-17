import React from 'react';
import MathsInputEnabler from '../components/organism/MathsInputEnabler';
import DemoKeypad from './Keypad';
import DemoApp from './App';

function Demo() {
  return (
    <MathsInputEnabler>
      <DemoApp />
      <DemoKeypad />
    </MathsInputEnabler>
  )
}

export default Demo;