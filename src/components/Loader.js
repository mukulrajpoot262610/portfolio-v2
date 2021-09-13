import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'

const Loader = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        Aos.init({ duration: 1000 })
        document.title = 'Mukul Rajpoot Portfolio'
    }, [])

    return (
        <Load>
            <h1 data-aos="fade-up">namaste</h1>
            <h2 data-aos="fade-up">🙏</h2>
        </Load>
    )
}

const Load = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5rem;

    & > h1 {
        font-size: 10vw;
    }
    & > h2 {
        font-size: 2rem;
    }
`

export default Loader
