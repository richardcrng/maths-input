import React from 'react';
import MathsInputEnabler from '../components/organism/MathsInputEnabler';
import DemoKeypad from './Keypad';
import DemoApp from './App';

function Demo() {
  // eslint-disable-next-line no-unused-vars
  const [showKeypad, setShowKeypad] = React.useState(true)

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
        when={showKeypad}
      />
    </MathsInputEnabler>
  )
}

export default Demo;