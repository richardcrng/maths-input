import React from 'react';
import useMathQuill from '../../../helpers/use-mathquill/useMathQuill';

function MathsInputEnabler({ children }) {
  const MQ = useMathQuill()

  const [activeHtmlElement, setActiveHtmlElement] = React.useState()
  const activeMathField = MQ(activeHtmlElement)

  return (
    <MathsInputEnablerContext.Provider
      value={{ activeHtmlElement, activeMathField, setActiveHtmlElement }}
    >
      {children}
    </MathsInputEnablerContext.Provider>
  )
}

const MathsInputEnablerContext = React.createContext()
const useMathsInputEnabler = () => React.useContext(MathsInputEnablerContext)

function useActiveHtmlElement() {
  const { activeHtmlElement } = useMathsInputEnabler()
  return activeHtmlElement
}

function useActiveMathField() {
  const { activeMathField } = useMathsInputEnabler()
  return activeMathField
}

function useSetActiveHtmlElement() {
  const { setActiveHtmlElement } = useMathsInputEnabler();
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

export default MathsInputEnabler;