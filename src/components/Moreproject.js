import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import PROJECTS_DATA from '../projects.data'

const Moreproject = ({ name, id }) => {

    const data = PROJECTS_DATA.find((e) => e.id == id)
    console.log(data)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Wrapper data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" image={data.image}>
                <Info>
                    <h2>{data.type}</h2>
                    <h1>{name}</h1>
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
    transition: all 1s ease-in-out;

    &:hover {
        background: url(${props => props.image});
    }

`
const Info = styled.div`
    & > h1 {
        font-size: 3rem;
        font-weight: 400;
        line-height: 5rem;
    }

    & > h2 {
        color: gray;
        font-size: 1.5rem;
        font-weight: 400;
    }
`


const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    height: 9rem;
    width: 9rem;
    border-radius: 50%;
    background-color: #191919;

    & > h2 {
        color: #fff;
        font-size: 1rem;
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
