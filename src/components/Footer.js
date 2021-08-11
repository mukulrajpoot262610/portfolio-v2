import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Foot>
            <LeftFoot>
                <h6 data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000">Ready to go? <br />Let's chat!</h6>
                <Circle data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                    <Link to="/contact">
                        <h2 >Let's Discuss</h2>
                    </Link>
                </Circle>
            </LeftFoot>
            <hr data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" />
            <LeftFoot>
                <h1 data-aos="flip-up" data-aos-delay="700" data-aos-duration="1000">Portfolio 2021 <br />Designed and developed by me with ❤</h1>
            </LeftFoot>
        </Foot>
    )
}

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    background-color: #fff;

    & > a {
        text-decoration: none;
    }

    & > a > h2 {
        color: #191919;
        font-size: 2rem;
        font-weight: 600;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            transform: rotate(-30deg);
            color: var(--yellow);
        }
    }
`

const Foot = styled.footer`
    height: max-content;
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
    justify-content: space-between;
    /* align-items: flex-start; */

     & > h6 {
        color: #fff;
        font-weight: 400;
        font-size: 5rem;
    }
     & > h1 {
        color: #fff;
        font-weight: 400;
        font-size: 2rem;
    }
`

export default Footer
