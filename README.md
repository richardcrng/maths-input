

## `MathsInputEnabler`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|Primary content|

## `MathsInput`

## `KeyPad`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`KeyPad.Row`s|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`when`|`boolean`|Whether or not the KeyPad is showing|

## `KeyPad.Row`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`KeyPad.Key`s|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `KeyPad.Row`'s height|

## `KeyPad.Key`
### Props
|Name|Type|Description|
|---|---|---|
|`component`|`function`|Component to be rendered|
|`html`|`string`|String to use as inner HTML|
|`latex`|`string`|Dollar delimited LaTeX code|
|`commands`|`Object[]`|[KeyCommands](#keycommands) to be processed|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `KeyPad.Row`'s height|

### KeyCommands
|Key|Value Type|Description|
|---|---|---|
|`cmd`|`string`|Passed to MathQuill's [`cmd`](http://docs.mathquill.com/en/latest/Api_Methods/#cmdlatex_string) method for the current [`MathsInput`](#mathsinput)|
|`keystroke`|`string`|Passed to MathQuill's [`keystroke`](http://docs.mathquill.com/en/latest/Api_Methods/#keystrokekeys) method for the current [`MathsInput`](#mathsinput)|
|`write`|`string`|Passed to MathQuill's [`write`](http://docs.mathquill.com/en/latest/Api_Methods/#writelatex_string) method for the current [`MathsInput`](#mathsinput)|