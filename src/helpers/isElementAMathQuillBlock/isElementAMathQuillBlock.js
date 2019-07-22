import { path } from 'ramda'

const isElementAMathQuillBlock = element => Boolean(
  path(['attributes', 'mathquill-block-id'], element)
)

export default isElementAMathQuillBlock