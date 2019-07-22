import React from 'react';
import InnerHTML from '../InnerHTML';
import parseWithKatex from '../../../helpers/parseWithKatex';
import MathsEnabler from '../../organism/MathsEnabler';
import MathsInput from '../../molecules/MathsInput';
import MathsKeypad from '../../molecules/MathsKeypad';

function Maths({ children, element = "span" }) {
  return (
    <InnerHTML element={element} parser={parseWithKatex}>
      {children}
    </InnerHTML>
  )
}

Maths.Enabler = MathsEnabler
Maths.Input = MathsInput
Maths.Keypad = MathsKeypad

export default Maths;