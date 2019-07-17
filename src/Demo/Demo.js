import React from 'react';
import MathsInputEnabler from '../components/organism/MathsInputEnabler';
import DemoKeypad from './Keypad';
import DemoApp from './App';

function Demo() {
  return (
    <MathsInputEnabler>
      <DemoApp />
      <DemoKeypad
        style={{
          position: 'absolute',
          bottom: '0px',
          height: '40vh',
          width: '100%'
        }}
      />
    </MathsInputEnabler>
  )
}

export default Demo;