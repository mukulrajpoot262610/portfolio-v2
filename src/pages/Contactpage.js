import React, { useEffect } from 'react'
import styled from 'styled-components'

const Contactpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Contact>
            <Container>
                <Design>
                    <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">Let's Discuss</h1>
                    <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">&lt;Contact /&gt;</h2>
                </Design>
                <img data-aos="zoom-in" data-aos-duration="2000" src="/images/pose/pose_m12.png" alt="" />
                <span>
                    <a href="https://www.linkedin.com/in/mukul-rajpoot-262610/" target="_blan">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                </span>
                <span>
                    <a href="https://github.com/mukulrajpoot262610" target="_blan">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </span>
                <span>
                    <a href={"mailto: mukulrajpoot262610@gmail.com"}>
                        <i class="fas fa-envelope"></i> Mail
                    </a>
                </span>
            </Container>
        </Contact>
    )
}

const Contact = styled.div`
    width: 100%;
    min-height: 50vh;
    overflow: hidden;
`


const Design = styled.div`
    position: relative;
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
    overflow: hidden;

    & > span > a {
        font-size: 5rem;
        text-decoration: none;
        color: #191919;

        &:hover {
            text-decoration: underline;
            color: var(--yellow);
        }
    }

    & > h3 {
        margin-left: auto;
        width: 50%;
        text-align: left;
        font-weight: 400;
        font-size: 3rem;
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
`;

export default Contactpage
