import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'

const Button = ({ text, color }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <Btn>
            <h1>... {text}</h1>
        </Btn>
    )
}

const Btn = styled.div`
    margin-top: 2rem;
    background: white;
    border: 1px solid lightgray;
    padding: 1rem 4rem;
    color: #fff;
    background: linear-gradient(to left, var(--green) 50%, #fff 50%) right;
    background-size: 200%;
    transition: .5s ease-out;

    & > h1 {
        font-weight: 400;
    }

    &:hover {
        background-position: left;
        color: #191919;
        cursor: pointer;
    }
`;

export default Button
