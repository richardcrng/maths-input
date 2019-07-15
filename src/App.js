import React from 'react';
import katex from 'katex'
import './App.css';
import KeyPad from './components/atoms/KeyPad';
import Input from './components/atoms/Input';
import TextArea from './components/atoms/TextArea';
import MathsInput from './components/molecules/MathsInput';
import Maths from './components/atoms/Maths';
import MathQuill from './components/atoms/MathQuill';

function App() {
  const ref = React.useRef()

  return (
    <>
      <MathQuill />
      <Maths>
        $x = 3$
      </Maths>
      <MathsInput>
        $x = 3$
      </MathsInput>
      <TextArea />
      <Input />
      <KeyPad>
        {keyRows.map((keys, idx) => (
          <KeyPad.Row key={idx}>
            {keys.map(key => (
              <KeyPad.Key key={key} main={key} />
            ))}
          </KeyPad.Row>
        ))}

        {/* special buttons */}
        <KeyPad.Row>
          <KeyPad.Key main='*' detail='CLR' />
          <KeyPad.Key main={0} detail='TGL' />
          <KeyPad.Key main='#' detail='DEL' />
        </KeyPad.Row>
      </KeyPad>
    </>
  );
}

const keyRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

export default App;
