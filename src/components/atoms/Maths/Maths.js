import React from 'react';
import InnerHTML from '../InnerHTML';
import parseWithKatex from '../../../helpers/parseWithKatex';

function Maths({ children, element = "span" }) {
  return (
    <InnerHTML element={element} parser={parseWithKatex}>
      {children}
    </InnerHTML>
  )
}

export default Maths;