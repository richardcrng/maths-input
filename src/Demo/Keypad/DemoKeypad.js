import React from 'react';
import KeyPad from '../../components/atoms/KeyPad';

function DemoKeypad() {
  return (
    <KeyPad>
      <KeyPad.Row>
        <KeyPad.Key html={7} cmd='7' />
        <KeyPad.Key html={8} cmd='8' />
        <KeyPad.Key html={8} cmd='9' />
        <KeyPad.Key html="DEL" />
        <KeyPad.Key html="AC" />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={4} cmd='4' />
        <KeyPad.Key html={5} cmd='5' />
        <KeyPad.Key html={6} cmd='6' />
        <KeyPad.Key latex="$\times$" cmd='\times' />
        <KeyPad.Key latex="$\dfrac{3}{4}$" write='\frac{3}{4}' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={1} cmd='1' />
        <KeyPad.Key html={2} cmd='2' />
        <KeyPad.Key html={3} cmd='3' />
        <KeyPad.Key latex="$+$" cmd='+' />
        <KeyPad.Key latex="$-$" cmd='-' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={0} cmd='0' />
        <KeyPad.Key latex="$.$" cmd='.' />
        <KeyPad.Key latex="$,$" cmd=',' />
      </KeyPad.Row>
    </KeyPad>
  )
}

export default DemoKeypad;