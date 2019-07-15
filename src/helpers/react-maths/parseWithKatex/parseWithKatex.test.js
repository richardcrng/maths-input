import parseWithKatex from ".";

describe('GIVEN the string $x = 3$', () => {
  const string = '$x = 3$'

  describe('WHEN it is passed to parseWithKatex', () => {
    const result = parseWithKatex(string)

    test('THEN the result is a span with katex formatting', () => {
      const expectedResult = `<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">x = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">3</span></span></span></span>`
      expect(result).toBe(expectedResult)
    })
  })
})