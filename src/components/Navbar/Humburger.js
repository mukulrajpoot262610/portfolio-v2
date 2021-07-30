import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import styled from 'styled-components'

import {
    staggerReveal,
    staggerRevealClose
} from "./Animations";

const Humburger = ({ state, setState }) => {

    // Create varibles of our dom nodes
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let reveal3 = useRef(null);

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.
            staggerRevealClose(reveal3, reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // setState({ color: "#f2efe7" })
            // Set menu to display block
            gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([reveal1, reveal2, reveal3], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2, reveal3);
        }
    }, [state]);


    return (
        <Burger ref={el => (menuLayer = el)}>
            <div
                ref={el => (reveal1 = el)}
                className='menu-secondary-background-color'></div>
            <div
                ref={el => (reveal2 = el)}
                className='menu-tertiary-background-color'></div>
            <div ref={el => (reveal3 = el)} className='menu-layer'>
                <Container>
                    <ul>
                        <li>
                            <Link to='/work'>
                                &lt;Works /&gt;
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                &lt;About Me /&gt;
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                &lt;Connect /&gt;
                            </Link>
                        </li>
                    </ul>
                    <Info>
                        <h3>Social Links</h3>
                        <Social>
                            <a href="https://www.linkedin.com/in/mukul-rajpoot-262610/" target="_blan">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/mukulrajpoot262610" target="_blan">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href={"mailto: mukulrajpoot262610@gmail.com"}>
                                <i className="fas fa-envelope"></i>
                            </a>
                        </Social>
                    </Info>
                </Container>
            </div>
        </Burger>
    )
}

const Burger = styled.div`
    display: none;
    position: fixed;
    z-index: 100;
    top: 0;
    height: 100vh;
    width: 100%;

    & > .menu-secondary-background-color {
      background: var(--green);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
    & > .menu-tertiary-background-color {
      background: var(--yellow);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
    & > .menu-layer {
      position: relative;
      background: var(--dark);
      /* background: url('/images/bg.svg'); */
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

const Container = styled.div`
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    padding: 3rem;

    @media (max-width: 1024px) {
        padding: 5rem;
        flex-direction: column;
    }

    ul {
        width: 50%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        flex-direction: column;

        @media (max-width: 1024px) {
            width: 100%;
            height: 200vh;
            align-items: center;
        }

        & > li {
            list-style: none;
            font-size: 8rem;
            line-height: 14rem;
            font-weight: 700;
            cursor: pointer;
            overflow: hidden;

            @media (max-width: 768px) {
            line-height: 7rem;
            font-size: 5rem;
        }
            a {
                color: var(--white);
                text-decoration: none;
                &:hover {
                 color: var(--yellow);
                }
        }
    }
    }
`

const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


    & > a > i {
        color: var(--white);
        font-size: 5rem;
        margin: 2rem;

         &:hover {
        color: var(--blue);
    }
    }
`;

const Info = styled.div`
    color: #fff;
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    @media (max-width: 1024px) {
        width: 100%;
        align-items: center;
    }

    & > h3 {
        font-size: 2rem;
    }

    & > p {
        font-size: 1rem;
    }
`

export default Humburger
