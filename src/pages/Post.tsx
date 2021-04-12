import { useEffect, useState } from 'react'
import styled from 'styled-components'

import raw from 'raw.macro'

import MarkdownView from '../components/MarkdownView'

type PostProps = {}

const Post: React.FC<PostProps> = ({}) => {
    const [markdown, setMarkdown] = useState(``)
    useEffect(() => {
        const markdown = raw('../../md_files/transition.md')
        setMarkdown(markdown)
    }, [])

    return (
        <Wrapper>
            <View className="left_view">
                <MarkdownView markdown={markdown} />
            </View>
            <View>CssView</View>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    .left_view {
        border-right: 1px solid black;
    }
`
const View = styled.section`
    width: 50%;
    overflow-y: scroll;
`

export default Post
