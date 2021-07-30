import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Aboutpage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <About>
            <Container>
                <Design>
                    <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">Mukul Rajpoot</h1>
                    <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">&lt;About /&gt;</h2>
                </Design>
                <h3 data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">I am a full-stack creative developer based in Barielly, India. I am a Computer Science graduate and did some coursework to the awesome world of designing digital interfaces and products.</h3>
            </Container>
            <Footer />
        </About>
    )
}

const About = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const Design = styled.div`
    position: relative;
    overflow: hidden;
    height: 35vh;

    & > h2 {
        color: transparent;
        font-size: 20rem;
        position: absolute;
        z-index: -3;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--yellow);
        bottom: 10%;
        left: 0%;

        @media (max-width: 768px) {
            font-size: 13rem;
        }
    }

    & > h1 {
        font-size: 15rem;
        font-weight: 500;
        position: absolute;
        z-index: 0;
        bottom: 10%;
        left: 0%;

        @media (max-width: 768px) {
            line-height: 13rem;
        }
    }
`

const Container = styled.div`
    overflow: hidden;
    width: 100%;
    max-width: 1280px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    padding: 5rem;
    z-index: 0;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* background-color: brown; */
    flex-direction: column;

    @media (max-width: 1024px) {
        min-height: 80vh;
    }

    & > h3 {
        margin-left: auto;
        width: 50%;
        text-align: left;
        font-weight: 400;
        font-size: 3rem;

        @media (max-width: 768px) {
            margin: 2rem 0;
            width: 90%;
        }
    }
`;

export default Aboutpage
