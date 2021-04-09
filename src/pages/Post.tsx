import styled from 'styled-components'

type PostProps = {}

const Post: React.FC<PostProps> = ({}) => {
    return (
        <Wrapper>
            <View className="left_view">Markdown</View>
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
const View = styled.div`
    width: 50%;
`

export default Post
