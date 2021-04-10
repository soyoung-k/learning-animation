import styled from 'styled-components'

import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import gfm from 'remark-gfm'

type MarkdownViewProps = { markdown: string }

const MarkdownView: React.FC<MarkdownViewProps> = ({ markdown }) => {
    const renderers = {
        code: ({ value }: { value: React.ReactNode }) => {
            return <SyntaxHighlighter language={'html'} children={value} />
        }
    }
    return (
        <MdView>
            <ReactMarkdown
                renderers={renderers}
                plugins={[gfm]}
                children={markdown}
            />
        </MdView>
    )
}

const MdView = styled.div`
    pre {
        background-color: gray;
    }
`

export default MarkdownView
