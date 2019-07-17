import React from 'react';
import { MdArrowBack, MdArrowDownward, MdArrowForward, MdArrowUpward, MdSend } from 'react-icons/md';
import KeyPad from '../../components/atoms/KeyPad';

function DemoKeypad() {
  return (
    <KeyPad style={{ height: '200px' }}>
      <KeyPad.Row style={{ height: '40%' }}>
        <KeyPad.Key component={MdArrowBack} keystroke="MQ-Left" />
        <KeyPad.Key component={MdArrowForward} keystroke="MQ-Right" />
        <KeyPad.Key component={MdArrowUpward} keystroke="MQ-Up" />
        <KeyPad.Key component={MdArrowDownward} keystroke="MQ-Down" />
      </KeyPad.Row>
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
        <KeyPad.Key latex="$\dfrac{\square}{\square}$" cmd='\frac' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={1} cmd='1' />
        <KeyPad.Key html={2} cmd='2' />
        <KeyPad.Key html={3} cmd='3' />
        <KeyPad.Key latex="$+$" cmd='+' />
        <KeyPad.Key latex="$-$" cmd='-' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={0} cmd='0' style={{ width: '30%' }} />
        <KeyPad.Key latex="$.$" cmd='.' style={{ width: '30%' }} />
        <KeyPad.Key latex="$,$" cmd=',' style={{ width: '30%' }} />
      </KeyPad.Row>
    </KeyPad>
  )
}

export default DemoKeypad;