import styled from 'styled-components'

import { concept, example } from '../../md_files'

type HomeProps = {}

const Home: React.FC<HomeProps> = ({}) => {
    return (
        <HomeDiv>
            <h1>목차</h1>
            <hr />
            <section>
                <h3>concept</h3>
                <ul>
                    {concept.map((name) => (
                        <li>{name}</li>
                    ))}
                </ul>
            </section>
            <hr />
            <section>
                <h3>example</h3>
                <ul>
                    {example.map((name) => (
                        <li>{name}</li>
                    ))}
                </ul>
            </section>
            <hr />
        </HomeDiv>
    )
}

const HomeDiv = styled.div`
    height: 100%;
    padding-left: 20px;
    h3 {
        margin: 10px;
    }
    li {
        margin: 10px 0;
    }
`

export default Home
