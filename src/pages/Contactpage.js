import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Contactpage = () => {
    return (
        <Contact>
            <Container>
                <Design>
                    <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">Say Hello</h1>
                    <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">&lt;Contact /&gt;</h2>
                </Design>
                <h3>Mail</h3>
                <h3>Github</h3>
                <h3>LinkedIn</h3>
            </Container>
            <Footer />
        </Contact>
    )
}

const Contact = styled.div``


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
            font-size: 11rem;
        }
    }

    & > h1 {
        font-size: 15rem;
        font-weight: 500;
        position: absolute;
        z-index: 3;
        bottom: 10%;
        left: 0%;

        @media (max-width: 768px) {
            line-height: 13rem;
            width: 70%;
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
    }
`;

export default Contactpage
