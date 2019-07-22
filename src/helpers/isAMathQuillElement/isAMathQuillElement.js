import { path } from 'ramda'

const hasMQClass = element => {
  const str = element.className || ''
  return str.includes('mq')
}

const isAMathQuillElement = element => Boolean(
  hasMQClass(element)
  || path(['attributes', 'mathquill-block-id'], element)
  || path(['attributes', 'mathquill-command-id'], element)
)

export default isAMathQuillElement