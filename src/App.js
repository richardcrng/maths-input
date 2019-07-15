import React from 'react';
import './App.css';
import Display from './components/atoms/Display';
import KeyPad from './components/atoms/KeyPad';

function App() {
  return (
    <>
      <Display />
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
