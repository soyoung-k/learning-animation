import { useEffect, useState } from 'react'

import styled from 'styled-components'
import palette from '../../lib/palette'

type CssViewProps = { markdown: string }

const CssView: React.FC<CssViewProps> = ({ markdown }) => {
    const [codeBlocks, setCodeBlocks] = useState<string[]>([])
    useEffect(() => {
        const codeBlocksInMarkdown = markdown.match(/```html([^`]*)```/g)
        if (Array.isArray(codeBlocksInMarkdown)) {
            setCodeBlocks(codeBlocksInMarkdown)
        }
    }, [markdown])
    const renderCode = codeBlocks.map((code) => {
        const newCode = code.replace(/```html/g, '').replace(/```/g, '')
        return <div dangerouslySetInnerHTML={{ __html: newCode }}></div>
    })

    return <HtmlView>{renderCode}</HtmlView>
}

const HtmlView = styled.div`
    padding: 0 20px;
    line-height: 1.4em;
    font-size: 15px;
    color: ${palette.gray9};
`

export default CssView
