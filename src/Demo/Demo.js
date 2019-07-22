import * as R from 'ramda'
import React from 'react';
import { useClickAway } from 'react-use';
import MathsInputEnabler from '../components/organism/MathsInputEnabler';
import DemoKeypad from './Keypad';
import DemoApp from './App';

function Demo() {
  // eslint-disable-next-line no-unused-vars
  const [showKeypad, setShowKeypad] = React.useState(true)

  const handleKeypadHide = () => setShowKeypad(false)
  const handleKeypadShow = () => setShowKeypad(true)

  const keypadRef = React.useRef()
  useClickAway(keypadRef, (event) => {
    const isEventTargetMathquillBlock = R.path(['attributes', 'mathquill-block-id'], event.target)
    if (isEventTargetMathquillBlock) {
      console.log('a mathquill-block', event.target)
    } else {
      console.log('not a mathquill-block', event.target)
      handleKeypadHide()
    }
  })

  return (
    <MathsInputEnabler>
      <DemoApp {...{ handleKeypadHide, handleKeypadShow }} />
      <DemoKeypad
        ref={keypadRef}
        style={{
          position: 'absolute',
          bottom: '0px',
          height: '40vh',
          width: '100%'
        }}
        when={showKeypad}
        // when={true}
      />
    </MathsInputEnabler>
  )
}

export default Demo;