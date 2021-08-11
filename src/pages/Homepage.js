import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { isMobile } from 'react-device-detect';
import Project from '../components/Project'
import { Link } from 'react-router-dom'
import Moreproject from '../components/Moreproject'


const Homepage = () => {

    const [offesetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        if (isMobile) {
            setOffsetY(0);
        } else {
            setOffsetY(window.pageYOffset);
        }
    };

    useEffect(() => {
        if (isMobile) return
        window.addEventListener("scroll", handleScroll);

        return () => {
            if (isMobile) return
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // window.scrollTo(0, 0)
        Aos.init({ duration: 2000 })
        document.title = 'Mukul Rajpoot Portfolio'
    }, [])

    return (
        <Home>
            <Container>
                <LeftHero>
                    <h3 data-aos="flip-up" data-aos-duration="1000">Hey, I'm</h3>
                    <h1 data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000">MUKUL RAJPOOT</h1>
                    <h3 data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1000">A web designer + developer <br /> from India.</h3>
                    {/* <Button text="Contact" /> */}
                    <BG style={{ backgroundColor: '#FEECEA' }}></BG>
                    <img data-aos="zoom-in" data-aos-duration="2000" src="/images/pose/pose_m18.png" alt="" />
                </LeftHero>
            </Container>

            <Container2>
                <h1>&lt; Selected</h1>
                <h1>Projects  /&gt;</h1>
                <Row>
                    <Col style={{
                        transform: `translateY(${offesetY * 0.08}px)`,
                    }}>
                        <Project height="50vh" image="/images/1.jpg" position='left' name='Netflix Clone' />
                    </Col>
                    <Col style={{
                        transform: `translateY(-${offesetY * 0.05}px)`,
                    }}>
                        <Project height="60vh" image="/images/3.jpg" position='left' name='Dev.to Clone' />
                    </Col>
                </Row>
                <Row>
                    <Col style={{
                        transform: `translateY(${offesetY * 0.08}px)`,
                    }}>
                        <Project height="60vh" image="/images/2.jpg" position='left' name='Netflix Clone' />
                    </Col>
                    <Col style={{
                        transform: `translateY(-${offesetY * 0.05}px)`,
                    }}>
                        <Project height="50vh" image="/images/4.jpg" position='left' name='Netflix Clone' />
                    </Col>

                </Row>
            </Container2>

            <ContainerA>
                <Design>
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">Mukul Rajpoot</h1>
                    <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">&lt;About /&gt;</h2>
                </Design>
                <Circle data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                    <Link to="/about">
                        <h2>About Me</h2>
                    </Link>
                </Circle>
                <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">I am a full-stack creative developer based in Barielly, India. I am a Computer Science undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts.</h3>
                <h4 data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000"> I enjoy using my skill-set to empower people to accomplish their goals.
                    My development stack is focused on building incredible fast websites and WebApps with delightful interactions.</h4>
            </ContainerA>

            <Container3>
                <Wrapper>
                    <h1>I’m currently available for freelance projects. <span>Let’s work together</span> to create something worth sharing.
                    </h1>
                    <BG style={{ backgroundColor: 'rgb(49,196,140, 0.2)', top: '10%', left: '60%' }}></BG>
                    <img src="/images/pose/pose_m13.png" alt="" />
                </Wrapper>
            </Container3>

            <Container>
                <h1>&lt; More Works /&gt;</h1>
                <Row>
                    <Col>
                        <BG style={{ backgroundColor: 'rgb(0,0,0, 0.2)', top: '20%', left: '-15%' }}></BG>
                        <img src="/images/pose/pose_m14.png" alt="" />
                    </Col>
                    <Col>
                        <Moreproject name="TrackIt" />
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Moreproject name="Portfolio 2019" />
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Moreproject name="Bankist" />
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Moreproject name="doubts.com" />
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Moreproject name="TrackIt" />
                    </Col>
                </Row>
            </Container>

            <Main>
                <Container3>
                    <h1>Mukul <br />Rajpoot</h1>
                    <img src="/images/pose/pose_m20.png" alt="" className="first" />
                    <img src="/images/pose/pose_m19.png" alt="" className="third" />
                    <img src="/images/pose/tree.png" alt="" className="back1" />
                    <img src="/images/pose/tree.png" alt="" className="back2" />
                    <img src="/images/pose/pose_m21.png" alt="" className="second" />
                </Container3>
            </Main>
        </Home>
    )
}

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background-color: #191919;

    & > a > h2 {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            transform: rotate(-30deg);
            color: var(--yellow);
        }
    }
`
const Home = styled.div`
    width: 100%;
    min-height: 90vh;
    position: relative;
    overflow: hidden;
`;
const Container = styled.div`
    /* overflow: hidden; */
    width: 100%;
    max-width: 1280px;
    min-height: 90vh;
    margin: 0 auto;
    position: relative;
    padding: 2rem;
    z-index: 0;

    & > h1 {
        color: #191919;
        font-size: 7rem;
        font-weight: 300;
    }

    & > h3 {
        font-weight: 300;
        color: #fff;
        font-size: 7rem;
        margin-left: 5rem;
    }
`;
const Main = styled.div`
    width: 100%;
    height: max-content;
    background-color: rgba(255,0,0,0.1);
`

const Container2 = styled(Container)`
    max-width: 1580px;
    width: 100%;
    padding: 10rem 2rem;
`
const Row = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Col = styled.div`
    flex: 1;
    width: 50%;
    min-height: max-content;
    margin: 2rem;
    display: flex;
    flex-direction: column;

    & > h1 {
        font-size: 5rem;
        font-weight: 400;
        margin: 2rem;
        margin-bottom: 0;
    }

    & > img {
        width: 100%;
        height: auto;

        @media (max-width: 768px) {
            width: 50%;
        }
    }

    & > h2 {
        color: gray;
        font-size: 2rem;
        font-weight: 400;
        margin: 0 2rem;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`
const ContainerA = styled.div`
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
        min-height: 30vh;
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
const Design = styled.div`
    position: relative;
    overflow: hidden;
    height: 50vh;

    @media (max-width: 1024px) {
        height: 30vh;
    }

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
const Container3 = styled(Container)`
    width: 100%;
    height: 90vh;
    position: relative;
    margin: 5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & > h1 {
        font-size: 15rem;
        font-weight: 900;
        text-transform: uppercase;
        z-index: -3;
    }

    & > .first {
        position: absolute;
        width: 50%;
        height: auto;
        left: 10%;
        z-index: -2;

        @media (max-width: 768px) {
            width: 80%;
        }
    }

    & > .back1 {
        position: absolute;
        width: 50%;
        height: auto;
        left: 10%;
        z-index: -4;
    }

    & > .back2 {
        position: absolute;
        width: 30%;
        height: auto;
        left: 50%;
        z-index: -4;
    }

    & > .second {
        position: absolute;
        width: 50%;
        height: auto;
        left: 100%;
        z-index: -2;

        @media (max-width: 768px) {
            width: 80%;
        }
    }

    & > .third {
        position: absolute;
        width: 50%;
        height: auto;
        left: 50%;
        z-index: -2;

        @media (max-width: 768px) {
            width: 80%;
        }
    }
`


const Wrapper = styled.div`
    padding: 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    & > h3 {
        margin-left: auto;
        font-size: 3rem;
    }

    & > img {
        position: absolute;
        top: 10%;
        left: 80%;
        height: auto;
        width: 50%;

        @media (max-width: 768px) {
            width: 60%;
            top: 20%
        }
    }

    & > h1 {
        color: #191919;
        font-size: 7rem;
        font-weight: 300;

        & >  span {
            font-weight: 400;
            color: var(--green);
        }
    }
`


const LeftHero = styled.div`
    padding: 2rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    & > h1 {
        font-size: 5rem;
        background-color: var(--dark);
        color: var(--white);
        font-family: 'Otomanopee One', sans-serif;
        padding: .1rem 1rem;
        margin: 2rem 0;
    }

    & > h3 {
        font-size: 6rem;
        /* -webkit-text-stroke-width: 1px; */
        /* color: transparent; */
        /* -webkit-text-stroke-color: #000; */
        /* font-family: 'Otomanopee One', sans-serif; */
    }

    & > img {
        position: absolute;
        width: 50%;
        height: auto;
        left: 70%;
        z-index: -2;

        @media (max-width: 768px) {
            width: 80%;
        }
    }

    & > h6 {
        font-size: 1.5rem;
    }
`

const BG = styled.div`
    position: absolute;
    left: 53%;
    width: 70rem;
    height: 70rem;
    border-radius: 50%;
    z-index: -5;
`

export default Homepage
