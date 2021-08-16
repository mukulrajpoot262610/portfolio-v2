import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PROJECTS_DATA from '../projects.data'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect';
import Moreproject from '../components/Moreproject'

const Projectpage = () => {

    const { id } = useParams()
    const [project, setProject] = useState()
    const [offesetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        if (isMobile) {
            setOffsetY(0);
        } else {
            setOffsetY(window.pageYOffset);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        setProject(PROJECTS_DATA.find((e) => e.id === Number(id)))
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);

    return (
        <Home>
            <Container>
                <LeftHero>
                    <h3 data-aos="fade-in" data-aos-duration="1000" style={{
                        transform: `translateX(${offesetY * 0.5}px)`,
                    }}>{project && project.name}</h3>
                    <img data-aos="fade-in" data-aos-duration="1000" src={project && project.image} alt="" style={{
                        transform: `translateX(-${offesetY * 0.8}px)`,
                    }} />
                    <h2 data-aos="fade-in" data-aos-duration="1000" style={{
                        transform: `translateX(${offesetY * 0.5}px)`,
                    }}>{project && project.name}</h2>
                </LeftHero>
            </Container>

            <Container>
                <h1 data-aos="fade-in" data-aos-duration="1000">{project && project.name}</h1>
                <h2 data-aos="fade-in" data-aos-duration="1000">{project && project.desc}</h2>
                <ProjectContact>
                    <div>
                        <h1>Website Link</h1>
                        <a href={project && project.link} target='_blanc'>
                            <h2>{project && project.link}</h2>
                        </a>
                    </div>
                    <div>
                        <h1>project && Project Date</h1>
                        <h2>{project && project.date}</h2>
                    </div>
                </ProjectContact>
                <h1>Tech Used</h1>
                <Tech>
                    {
                        project && project.tech.map((t) => <Circle key={t.id} data-aos="zoom-in" data-aos-duration="1000" style={{ backgroundColor: "#E5F1F8" }}>
                            <i className={t.class}></i>
                            <img src={t.class} alt="" />
                            <span>{t.name}</span>
                        </Circle>)
                    }
                </Tech>
            </Container>
            <Container>
                <h2>It was a fun project to work on. There were almost no constraints (eg. colors, typography, etc.). The communication went very smooth, from initial discovery to branding and through the final revisions and delivery.</h2>
                <h1>&lt; More Works /&gt;</h1>
                <Row>
                    <Col>
                        <BG style={{ backgroundColor: 'rgb(0,0,0, 0.2)', top: '10%', left: '-15%' }}></BG>
                        <img src="/images/pose/pose_m14.png" alt="" />
                    </Col>
                    <Col>
                        <Link to="/project/1">
                            <Moreproject name="Dev.to Clone" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/6">
                            <Moreproject name="Portfolio 2019" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/8">
                            <Moreproject name="Bankist" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/5">
                            <Moreproject name="Netflix Clone" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/2">
                            <Moreproject name="TrackerX" />
                        </Link>
                    </Col>
                </Row>
            </Container>

        </Home>
    )
}

const Home = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1480px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    padding: 2rem;
    z-index: 0;

    & > h1 {
        margin-top: 10rem;
        font-size: 5rem;
        font-weight: 900;
    }

    & > h2 {
        margin-left: 5rem;
        margin-top: 2rem;
        font-size: 3rem;
        font-weight: 400;
    }
`;

const ProjectContact = styled.div`
    margin: 5rem;
    display: flex;
    justify-content: space-between;

    & > div > h1{
        font-weight: 400;
        color: #868787;
    }

    & > div > h2 {
        font-size: 2rem;
    }

    & > div > a > h2{
        font-size: 2rem;
    }
`

const Tech = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5rem;
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

    & > h3 {
        position: absolute;
        font-family: 'Dela Gothic One', cursive;
        text-transform: uppercase;
        font-size: 15rem;
        z-index: -2;

        @media (max-width: 767px) {
            font-size: 8rem;
        }
    }

    & > h2 {
        position: absolute;
        font-family: 'Dela Gothic One', cursive;
        text-transform: uppercase;
        font-size: 15rem;
        -webkit-text-stroke-width: 1px;
        color: transparent;
        -webkit-text-stroke-color: #000;
        z-index: 2;

        @media (max-width: 767px) {
            font-size: 8rem;
        }
    }

    & > img {
        position: absolute;
        width: 100%;
        height: auto;
        left: 40%;
        z-index: 0;
        border-radius: .5rem;

        @media (max-width: 768px) {
            width: 200%;
        }
    }
`

const Circle = styled.div`
    padding: 2rem 0;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 15vh;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s ease-in-out;

    & > img {
        height: auto;
        width: 30%;
    }

    & > span {
        font-size: 2rem;
    }

    & > i {
        font-size: 3.5rem;
    }
`

const Row = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

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


const BG = styled.div`
    position: absolute;
    width: 70rem;
    height: 70rem;
    border-radius: 50%;
    z-index: -5;
`

export default Projectpage
