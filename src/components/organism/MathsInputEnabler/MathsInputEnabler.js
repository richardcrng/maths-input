import React from 'react';

function MathsInputEnabler({ children }) {
  const [active, setActive] = React.useState()

  return (
    <MathsInputEnablerContext.Provider value={{ active, setActive }}>
      {children}
    </MathsInputEnablerContext.Provider>
  )
}

const MathsInputEnablerContext = React.createContext()
const useMathsInputEnabler = () => React.useContext(MathsInputEnablerContext)

function useActiveMathsInput() {
  const { active } = useMathsInputEnabler()
  return active
}

function useSetActiveMathsInput() {
  const { setActive } = useMathsInputEnabler();
  return setActive
}

export {
  useActiveMathsInput,
  useSetActiveMathsInput
}

export default MathsInputEnabler;