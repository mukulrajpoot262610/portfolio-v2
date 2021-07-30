import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Workpage = () => {
    return (
        <Work>
            <Container>
                <Design>
                    <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">Projects</h1>
                    <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">&lt;Work /&gt;</h2>
                </Design>
                <h3 data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">A collection of more designs and front-end coding. These are a mix of freelance, contest, practice and side projects.</h3>
            </Container>
            <Footer />
        </Work>
    )
}

const Work = styled.div`
    width: 100%;
    min-height: 100vh;
`

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
        -webkit-text-stroke-color: var(--green);
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
    padding: 2rem;
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

         @media (max-width: 768px) {
            margin: 2rem 0;
            width: 90%;
        }
    }
`;

export default Workpage
