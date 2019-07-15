import parseWithKatex from ".";

describe('GIVEN the string "$x = 3$"', () => {
  const string = '$x = 3$'

  describe('WHEN it is passed to parseWithKatex', () => {
    const result = parseWithKatex(string)

    test('THEN the result is a span with katex formatting', () => {
      const expectedResult = `<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">x = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">3</span></span></span></span>`
      expect(result).toBe(expectedResult)
    })
  })
})

describe('GIVEN the string "When $x = 3$" and $y = 2$', () => {
  const string = 'When $x = 3$ and $y = 2$'

  describe('WHEN it is passed to parseWithKatex', () => {
    const result = parseWithKatex(string)

    test('THEN the result is text interspersed with spans with katex formatting', () => {
      const expectedResult = `When <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">x = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">3</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>y</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">y = 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.19444em;"></span><span class="mord mathdefault" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">2</span></span></span></span>`
      expect(result).toBe(expectedResult)
    })
  })
})