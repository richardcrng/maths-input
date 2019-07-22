

## `MathsInputEnabler`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|Primary content|

## `KeyPad`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`KeyPad.Row`s|
|`style`|`object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`when`|`boolean`|Whether or not the KeyPad is showing|

## `KeyPad.Row`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`KeyPad.Key`s|
|`style`|`object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `KeyPad.Row`'s height|

## `KeyPad.Key`
### Props
|Name|Type|Description|
|---|---|---|
|`component`|`function`|Component to be rendered|
|`html`|`string`|String to use as inner HTML|
|`latex`|`string`|Dollar delimited LaTeX code|
|`commands`|`[KeyCommand](#KeyCommand)[]`|Commands to be processed|
|`style`|`object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `KeyPad.Row`'s height|

### KeyCommand
An instruction