import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'

const Moreproject = ({ height }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Wrapper data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <Info>
                    <h1>Hello</h1>
                    <h2>Website</h2>
                </Info>
                <Circle>
                    <h2>Let's Visit</h2>
                </Circle>
            </Wrapper>
        </>
    )
}


const Wrapper = styled.div`
    padding: 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Info = styled.div`
    & > h1 {
        font-size: 5rem;
        font-weight: 400;
        line-height: 5rem;
    }

    & > h2 {
        color: gray;
        font-size: 2rem;
        font-weight: 400;
    }
`


const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background-color: #191919;

    & > h2 {
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
export default Moreproject
