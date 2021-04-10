import styled from 'styled-components'
import palette from '../../lib/palette'

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
    padding: 0 20px;
    line-height: 1.4em;
    font-size: 15px;
    color: ${palette.gray9};
    h1 {
        font-size: 2em;
        border-bottom: 1px solid ${palette.gray2};
        padding-bottom: 0.75em;
    }
    h2 {
        font-size: 1.65em;
        border-bottom: 1px solid ${palette.gray2};
        padding-bottom: 0.55em;
    }
    h3 {
        font-size: 1.45em;
    }
    h4 {
        font-size: 1.23em;
    }
    h6 {
        font-size: 0.83em;
        color: ${palette.gray6};
    }
    ul,
    ol {
        margin: 0;
        li {
            line-height: 1.75em;
        }
    }
    a {
        color: ${palette.blue7};
        &:hover {
            color: ${palette.blue4};
        }
        &:active {
            color: #4263eb;
        }
    }
    table {
        width: 100%;
        border: 1px solid ${palette.gray3};
        line-height: 2.7em;
        padding: 0 10px;
        border-collapse: collapse;
        th,
        td {
            border: 1px solid ${palette.gray3};
            padding: 0 0.65em;
        }
        th {
            text-align: left;
        }
        thead {
            background-color: ${palette.gray0};
        }
        tr {
            &:nth-child(even) {
                background-color: ${palette.gray0};
            }
        }
    }
    blockquote {
        color: ${palette.gray6};
        border-left: 4px solid ${palette.gray3};
        padding-inline-start: 1em;
        padding-inline-end: 1em;
        margin: 0;
    }
    pre {
        border-radius: 3px;
        font-size: 0.8em;
    }
    p {
        code {
            background-color: rgb(240, 240, 240);
            border-radius: 4px;
            font-size: 14px;
            color: #e64980;
        }
    }
`

export default MarkdownView
