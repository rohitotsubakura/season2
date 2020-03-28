/**@jsx jsx */
import React from "react";

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
        width: ${Size(90)};
        margin-bottom: ${Size(2.5)};
    }
    & > p {
        color: ${Color.White};
        ${Typography.Bold};
        margin-bottom: ${Size(10)};
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
            <img src="/static/images/Logo_white-M.png" alt="ロゴ"/>
            <p>Web Developer | Virtual YouTuber</p>
        </div>
    )
}

export default MainVisual;