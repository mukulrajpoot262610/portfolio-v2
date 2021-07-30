import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Homepage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Home>
            <Container>
                <LeftHero>
                    <h3 data-aos="flip-up" data-aos-duration="1000">👋 I'm</h3>
                    <h1 data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000">MUKUL RAJPOOT</h1>
                    <h3 data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1000">Web Developer who speak Code so you don't have to</h3>
                    <h6 data-aos="flip-up" data-aos-delay="1500" data-aos-duration="1000">I bring together Creativity and art to create brand and website projects that makes difference in your business.</h6>
                    <Button text="Contact" />
                </LeftHero>
            </Container>
            <Footer />
        </Home>
    )
}

const Home = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;


const Container = styled.div`
    overflow: hidden;
    width: 100%;
    max-width: 1280px;
    min-height: 120vh;
    margin: 0 auto;
    position: relative;
    padding: 2rem;
    z-index: 0;

    & > h1 {
        color: #fff;
        font-size: 7rem;
        font-weight: 300;
    }

    & > h3 {
        font-weight: 300;
        color: #fff;
        font-size: 7rem;
        margin-left: 5rem;
    }

    & > .second {
        position: absolute;
        bottom: 10%;
        right: 0;
        z-index: -10;

        @media (max-width: 540px) {
            left: 40%;
        }

        @media (max-width: 420px) {
            left: 5%;
            bottom: 5%;
        }
    }
`;


const LeftHero = styled.div`
    padding: 2rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > h1 {
        font-size: 4rem;
        background-color: var(--dark);
        color: var(--white);
        font-family: 'Otomanopee One', sans-serif;
        padding: .1rem 1rem;
        margin: 2rem 0;
    }

    & > h3 {
        font-size: 7rem;
        font-family: 'Otomanopee One', sans-serif;
    }

    & > h6 {
        font-size: 1.5rem;
    }
`


export default Homepage
