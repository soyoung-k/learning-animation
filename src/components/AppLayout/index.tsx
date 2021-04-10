import styled from 'styled-components'

type AppLayoutProps = { children: React.ReactNode }

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return <Main>{children}</Main>
}

const Main = styled.main`
    height: 100%;
`

export default AppLayout
