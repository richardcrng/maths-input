import React from 'react';
import MathsKeypad from '../../molecules/MathsKeypad';

function MathsInputEnabler({ children }) {
  return (
    <>
      {children}
      <MathsKeypad when={true} />
    </>
  )
}

export default MathsInputEnabler;