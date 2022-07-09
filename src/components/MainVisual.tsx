import React from "react";
import { Reveal, RevealMode, Animation } from "react-genie";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

const root = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    z-index: 1;
    & > img {
        max-width: ${Size(70)};
        margin-bottom: ${Size(2.5)};
    }
    & > p {
        color: ${Color.White};
        ${Typography.Bold};
        margin-bottom: ${Size(2.5)};
    }
    & > div > svg {
        color: ${Color.White};
        width: ${Size(10)};
        margin-bottom: ${Size(5)};
    }
    @media (max-width: 960px) {
        & > img {
            width: 70%;
            max-width: ${Size(60)};
            margin-bottom: ${Size(2.5)};
        }
    }
`;

type MainVisualProps = {
    keyvisualUrl: string
};

const MainVisual: React.FC<MainVisualProps> = ({keyvisualUrl}) => {
    const bgimageStyle = css`
        background-image: url(${keyvisualUrl});
    `;
    return (
        <div css={[root, bgimageStyle]} id="top">
            <img src="/images/Logo_white-M.png" alt="ロゴ" />
            <p>Web Developer | Virtual YouTuber</p>
            <Reveal mode={RevealMode.Wrap} animation={Animation.FadeInUp}>
                <FontAwesomeIcon icon="chevron-down" />
            </Reveal>
        </div>
    )
}

export default MainVisual;