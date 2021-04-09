import styled from 'styled-components'

type AppLayoutProps = {}

const Main = styled.main`
    background-color: pink;
`

const AppLayout: React.FC<AppLayoutProps> = ({}) => {
    return <Main>AppLayout</Main>
}

export default AppLayout
