/**@jsx jsx */
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

library.add(faChevronUp);

const root = css`
    display: flex;
    position: fixed;
    top: 80vh;
    right: 10vw;
    z-index: 9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${Size(5)};
    width: ${Size(13)};
    height: ${Size(13)};
    background-color: ${Color.BackToTop};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    & > div {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        color: ${Color.White};
        ${Typography.Bold};
    } 
    @media (max-width: 960px) {
        top: 85vh;
        right: 7vw;
        padding: ${Size(5)};
        width: ${Size(6)};
        height: ${Size(6)};
        & > div {
            ${Typography.Caption};
        }
    }
    
`;

const TopLink: React.FC = () => {
    const scrollToTop = () => scroll.scrollTo(0,{
        duration: 500,
        delay: 100,
        smooth: true
    });
    return (
        <div css={root} onClick={scrollToTop}>
            <div>
                <FontAwesomeIcon icon="chevron-up" />
                <p>TOP</p>
            </div>
        </div>
    )
}

export default TopLink;