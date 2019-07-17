import React from 'react';
import MathsKeypad from '../../molecules/MathsKeypad';

const MathsInputEnablerContext = React.createContext()
export const useMathsInputEnabler = () => React.useContext(MathsInputEnablerContext)

function MathsInputEnabler({ children }) {
  const [active, setActive] = React.useState()

  return (
    <MathsInputEnablerContext.Provider value={{ active, setActive }}>
      {children}
    </MathsInputEnablerContext.Provider>
  )
}

export default MathsInputEnabler;