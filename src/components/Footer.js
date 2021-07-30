import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Foot>
            <LeftFoot>
                <h6 data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000">Let's work<br />
                    together</h6>
                <Links data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                    <h2 >Let's Discuss</h2>
                </Links>
            </LeftFoot>
            <hr data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" />
            <LeftFoot>
                <h1 data-aos="flip-up" data-aos-delay="1500" data-aos-duration="1000">Portfolio 2021 <br />Designed and developed by me</h1>
            </LeftFoot>
        </Foot>
    )
}

const Foot = styled.footer`
    height: 50vh;
    padding: 5rem;
    background-color: #191919;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;

    & > hr {
        width: 90%;
    }

    & > img {
        height: 30vh;
        position: absolute;
        bottom: 10%;
        right: 10%;

        @media (max-width: 768px) {
            top: 20%;
            height: 20vh;
        }
    }
`


const LeftFoot = styled.div`
    padding: 5rem;
    height: 100%;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    /* align-items: flex-start; */

     & > h6 {
        color: #fff;
        font-weight: 600;
        line-height: 10rem;
        font-size: 8rem;
    }
     & > h1 {
        color: #fff;
        font-weight: 400;
        line-height: 2rem;
        font-size: 2rem;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    background-color: #fff;

    & > h2 {
        color: #191919;
        font-size: 2rem;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            transform: rotate(-20deg);
            color: var(--yellow);
        }
    }
`

export default Footer
