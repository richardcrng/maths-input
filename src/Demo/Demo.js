import React from 'react';
import MathsInputEnabler from '../components/organism/MathsInputEnabler';
import DemoKeypad from './Keypad';
import DemoApp from './App';

function Demo() {
  const [showKeypad, setShowKeypad] = React.useState(true)

  // React.useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowKeypad(!showKeypad)
  //   }, 2000);

  //   return function cleanup() {
  //     clearTimeout(timeout)
  //   }
  // })

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