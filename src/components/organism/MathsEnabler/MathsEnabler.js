import React from 'react';
import useMathQuill from '../../../helpers/use-mathquill/useMathQuill';

function MathsEnabler({ children }) {
  const MQ = useMathQuill()

  const [activeHtmlElement, setActiveHtmlElement] = React.useState()
  const activeMathField = MQ(activeHtmlElement)

  return (
    <MathsEnablerContext.Provider
      value={{ activeHtmlElement, activeMathField, setActiveHtmlElement }}
    >
      {children}
    </MathsEnablerContext.Provider>
  )
}

const MathsEnablerContext = React.createContext()
const useMathsEnabler = () => React.useContext(MathsEnablerContext)

function useActiveHtmlElement() {
  const { activeHtmlElement } = useMathsEnabler()
  return activeHtmlElement
}

function useActiveMathField() {
  const { activeMathField } = useMathsEnabler()
  return activeMathField
}

function useSetActiveHtmlElement() {
  const { setActiveHtmlElement } = useMathsEnabler();
  return setActiveHtmlElement
}

function useActiveHtmlElementState() {
  const active = useActiveHtmlElement()
  const setActive = useSetActiveHtmlElement()
  return [active, setActive]
}

export {
  useActiveHtmlElement,
  useActiveHtmlElementState,
  useActiveMathField,
  useSetActiveHtmlElement
}

export default MathsEnabler;