import React from 'react';
import KeyPad from '../../atoms/KeyPad';

const keyRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function MathsKeypad({ when = true }) {
  if (!when) return null

  return (
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
  )
}

export default MathsKeypad;