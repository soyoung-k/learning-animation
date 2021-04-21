import { concept, example } from '.'

import raw from 'raw.macro'

describe('파일 확인', () => {
    it('concept 파일', () => {
        concept.forEach((name) => raw(`./${name}.md`))
        expect(true).toBe(true)
    })
    it('example 파일 확인', () => {
        example.forEach((name) => raw(`./${name}.md`))
        expect(true).toBe(true)
    })
})
