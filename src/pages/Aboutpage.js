import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Aboutpage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })

        document.title = 'Mukul Rajpoot -- About'
    }, [])

    return (
        <About>
            <Container>
                <Design>
                    <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">Mukul Rajpoot</h1>
                    <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">&lt;About /&gt;</h2>
                </Design>
                <h3 data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">I am a full-stack creative developer based in Barielly, India. I am a Computer Science graduate and did some coursework to the awesome world of designing digital interfaces and products.</h3>
                <h4 data-aos="fade-up" data-aos-delay="2500" data-aos-duration="1000"> I enjoy using my skill-set to empower people to accomplish their goals.
                    My development stack is focused on performance & accessibility with delightful interactions. I create lighting fast WebApps and Websites using <span>MERN</span> Stack with the help of NextJS.</h4>
            </Container>
            <Container>
                <Design2>
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">ToolBox</h1>
                    <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">TECH</h2>
                </Design2>
                <ToolBox>
                    <Circle data-aos="zoom-in" data-aos-delay="3500" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-html5"></i>
                        <span>HTML</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="3700" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-css3-alt"></i>
                        <span>CSS</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="3900" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-sass"></i>
                        <span>SASS</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="3700" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-react"></i>
                        <span>REACT</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="4100" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-node-js"></i>
                        <span>NODEJS</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="4300" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-shopify"></i>
                        <span>SHOPIFY</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="4500" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-js-square"></i>
                        <span>JS</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="4700" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fas fa-database"></i>
                        <span>MONGODB</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="4900" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-bootstrap"></i>
                        <span>BOOTSTRAP</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="5100" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-docker"></i>
                        <span>DOCKER</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="5300" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-figma"></i>
                        <span>FIGMA</span>
                    </Circle>
                    <Circle data-aos="zoom-in" data-aos-delay="5500" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                        <i className="fab fa-python"></i>
                        <span>PYTHON</span>
                    </Circle>
                </ToolBox>
            </Container>
            <Footer />
        </About>
    )
}

const About = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const Circle = styled.div`
    padding: 2rem 0;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 9vh;
    width: 9vh;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s ease-in-out;

    & > i {
        font-size: 3rem;
    }
`

const Design = styled.div`
    position: relative;
    overflow: hidden;
    height: 45vh;

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
    flex-direction: column;

    @media (max-width: 1024px) {
        min-height: 90vh;
    }

    & > h3 {
        margin-left: auto;
        margin-top: 5rem;
        width: 60%;
        text-align: left;
        font-weight: 400;
        font-size: 3rem;

        @media (max-width: 768px) {
            margin: 2rem 0;
            width: 90%;
        }
    }

    & > h4 {
        margin: 4rem 0;
        margin-left: auto;
        width: 60%;
        text-align: left;
        font-weight: 400;
        font-size: 2rem;

        & > span {
            color: var(--green);
        }

        @media (max-width: 768px) {
            margin: 2rem 0;
            width: 90%;
        }
    }

    & > i {
        font-size: 3rem;
    }
`;

const Design2 = styled(Design)`
    height: 30vh;

    @media (max-width: 768px) {
        height: 20vh;
    }

    & > h2 {
        color: transparent;
        font-size: 20rem;
        position: absolute;
        z-index: -3;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--yellow);
        left: 0%;

        @media (max-width: 768px) {
            left: 10%;
            font-size: 13rem;
        }
    }

    & > h1 {
        font-size: 15rem;
        font-weight: 500;
        position: absolute;
        z-index: 0;
        left: 0%;

        @media (max-width: 768px) {
            left: 5%;
            line-height: 13rem;
        }
    }
`

const ToolBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    width: 60%;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export default Aboutpage
