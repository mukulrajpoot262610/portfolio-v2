import React from 'react'
import styled from 'styled-components'

const Project = ({ data }) => {

    const { name, desc, image } = data

    return (
        <Pro>
            <img src={image} alt="" />
            <Data>
                <h1>
                    {name}
                </h1>
                <h3>
                    {desc}
                </h3>
            </Data>
        </Pro>
    )
}

const Pro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rem;

    & > img {
        height: auto;
        width: 50%;
    }
`

const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    & > h3 {
        width: 70%;
    }
`

export default Project
