import React from 'react';
import { useActiveHtmlElementState } from '../../components/organism/MathsInputEnabler';
import MathsInput from '../../components/molecules/MathsInput/MathsInput';

function DemoApp() {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useActiveHtmlElementState()
  const inputRefOne = React.useRef()
  const inputRefTwo = React.useRef()
  
  return (
    <>
      <MathsInput
        ref={inputRefOne}
        onClick={() => setActive(inputRefOne.current)}
        style={{ display: 'block', margin: '10px', width: '50px' }}
      />
      <MathsInput
        ref={inputRefTwo}
        onClick={() => setActive(inputRefTwo.current)}
        style={{ display: 'block', margin: '10px', width: '50px' }}
      />
    </>
  )
}

export default DemoApp;