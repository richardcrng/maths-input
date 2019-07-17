import React from 'react';
import { useActiveHtmlElementState } from '../../components/organism/MathsInputEnabler';
import MathsInput from '../../components/molecules/MathsInput/MathsInput';

function DemoApp() {
  const inputRef = React.useRef()
  const [active, setActive] = useActiveHtmlElementState()
  
  React.useEffect(() => {
    if (active !== inputRef.current) {
      setActive(inputRef.current)
    }
  }, [active, inputRef.current])

  return (
    <>
      <MathsInput ref={inputRef} />
    </>
  )
}

export default DemoApp;