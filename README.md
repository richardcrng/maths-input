# Setup

```bash
npm install --s react-maths
```

```js
import React from 'react';
import { MathsEnabler, MathsInput, MathsKeypad } from 'react-maths'

function App() {
  return (
    <MathsEnabler>
      <MathsInput />
      <MathsKeypad>
        <MathsKeypad.Row>
          <MathsKeypad.Key latex='7' cmd='7' />
          <MathsKeypad.Key latex='8' cmd='8' />
          <MathsKeypad.Key latex='$+$' cmd='+' />
          <MathsKeypad.Key latex='$\times$' cmd='\times' />
        </MathsKeypad.Row>
      </MathsKeypad>
    </MathsEnabler>
  )
}
```

# Components

## `MathsEnabler`
A `<MathsEnabler />` is a top-level component that:
- Makes [`react-maths`'s hooks](#hooks) available to nested components; and
- Thereby allows a nested [`MathsKeypad`](#mathskeypad) to provide a nested [`MathsInput`] with input.

### Props
|Name|Type|Description|
|---|---|---|
|`children`<sup>*</sup>|`node`|Primary content|

<sup>*</sup>Optional

## `MathsInput`
|Name|Type|Description|
|---|---|---|
|`ref`<sup>*</sup>|`React.MutableRefObject`|A [React ref](https://reactjs.org/docs/refs-and-the-dom.html)|
|`id`<sup>*</sup>|`string`||
|`onBlur`<sup>*</sup>|`function`|Callback function|
|`onClick`<sup>*</sup>|`function`|Callback function|
|`onFocus`<sup>*</sup>|`function`|Callback function|
|`style`<sup>*</sup>|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|

<sup>*</sup>Optional

## `MathsKeypad`
### Props
|Name|Type|Description|
|---|---|---|
|`children`<sup>*</sup>|`node`|`MathsKeypad.Row`s|
|`inputRef`<sup>*</sup>|`React.MutableRefObject`|The [React ref](https://reactjs.org/docs/refs-and-the-dom.html) attached to the [`MathsInput`](#mathsinput) which the keypad should create input for|
|`style`<sup>*</sup>|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`when`<sup>*</sup>|`boolean`|Whether or not the MathsKeypad is showing|

<sup>*</sup>Optional

## `MathsKeypad.Row`
### Props
|Name|Type|Description|
|---|---|---|
|`children`<sup>*</sup>|`node`|`MathsKeypad.Key`s|
|`style`<sup>*</sup>|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`<sup>*</sup>|`number`|Weight for the `MathsKeypad.Row`'s height|

<sup>*</sup>Optional

## `MathsKeypad.Key`
### Props
|Name|Type|Description|
|---|---|---|
|`component`<sup>*</sup>|`function`|Component to be rendered|
|`html`<sup>*</sup>|`string`|String to use as inner HTML|
|`latex`<sup>*</sup>|`string`|Dollar delimited LaTeX code|
|`commands`<sup>*</sup>|`Object[]`|[KeyCommands](#keycommands) to be processed|
|`cmd`<sup>*</sup>|`string`|Passed to MathQuill's [`cmd`](http://docs.mathquill.com/en/latest/Api_Methods/#cmdlatex_string) method for the current [`MathsInput`](#mathsinput)|
|`keystroke`<sup>*</sup>|`string`|Passed to MathQuill's [`keystroke`](http://docs.mathquill.com/en/latest/Api_Methods/#keystrokekeys) method for the current [`MathsInput`](#mathsinput)|
|`write`<sup>*</sup>|`string`|Passed to MathQuill's [`write`](http://docs.mathquill.com/en/latest/Api_Methods/#writelatex_string) method for the current [`MathsInput`](#mathsinput)|
|`style`<sup>*</sup>|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`<sup>*</sup>|`number`|Weight for the `MathsKeypad.Key`'s width|

<sup>*</sup>Optional

#### KeyCommands
|Key|Value Type|Description|
|---|---|---|
|`cmd`<sup>*</sup>|`string`|Passed to MathQuill's [`cmd`](http://docs.mathquill.com/en/latest/Api_Methods/#cmdlatex_string) method for the current [`MathsInput`](#mathsinput)|
|`keystroke`<sup>*</sup>|`string`|Passed to MathQuill's [`keystroke`](http://docs.mathquill.com/en/latest/Api_Methods/#keystrokekeys) method for the current [`MathsInput`](#mathsinput)|
|`write`<sup>*</sup>|`string`|Passed to MathQuill's [`write`](http://docs.mathquill.com/en/latest/Api_Methods/#writelatex_string) method for the current [`MathsInput`](#mathsinput)|

<sup>*</sup>Optional

# Hooks
## `useActiveHtmlElementState`

## `useActiveMathField`

## `useMathQuill`

## `useMathQuillMathField`

# Helpers
## `isAMathQuillElement`

## `parseWithKatex`