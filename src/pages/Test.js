import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Test = () => {

    const [name, setName] = useState('Mukul')

    const [number, setNumber] = useState(2)

    useEffect(() => {
        setName(Math.floor(Math.random() * 10))
        console.log('Called Second')
        window.addEventListener('scroll', setNumber(3214))

        return () => {
            window.removeEventListener('scroll', setNumber(3214))
            console.log('Called First')
        }

    }, [number])

    return (
        <Name2>
            <h1>{name}</h1>
            <h1>{number}</h1>
            <button onClick={() => setNumber(3)}>Click me</button>
        </Name2>
    )
}

const Name2 = styled.div`
    & > h1 {
        font-size: 10rem;
    }
`

export default Test
