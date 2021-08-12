import React from 'react'
import styled from 'styled-components'

const Project = ({ height, image, position, name, type }) => {

    return (
        <>
            <img src={image} alt="" style={{ height: height, objectFit: 'cover', width: '100%', objectPosition: position }} />
            <Wrapper>
                <Info>
                    <h1>{name}</h1>
                    <h2>{type}</h2>
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
    background: #fff;
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

export default Project
