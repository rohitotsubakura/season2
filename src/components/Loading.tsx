/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

const root = css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: ${Color.Black};
    background-size: cover;
    background-position: center;
    z-index: 15;
    & > div {
        max-width: ${Size(70)};
        margin-bottom: ${Size(2.5)};
    }
    & > p {
        color: ${Color.White};
        ${Typography.Bold};
        margin-bottom: ${Size(2.5)};
    }
    }
    @media (max-width: 960px) {
    }
`;

const loadingAnimation = css`
    display: inline-block;
    position: relative;
    width: 160px;
    height: 80px;
    & > div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: ${Color.Primary};
        animation: wappen 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    & > div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    & > div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    & > div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
    & > div:nth-child(4) {
        left: 104px;
        animation-delay: -0.12s;
    }
    & > div:nth-child(5) {
        left: 128px;
        animation-delay: -0.24s;
    }
    @keyframes wappen {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 8px;
            height: 32px;
        }
    }
`;
const fadeout = css`
    animation: fadeout 1.5s ease;
    @keyframes fadeout {
        0%, 75%{
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

type LoadingProps = {
};

const Loading: React.FC<LoadingProps> = () => {
    return (
        <div css={[root, fadeout]}>
            <div css={loadingAnimation}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>Please wait a moment...</p>
        </div>
    )
}

export default Loading;