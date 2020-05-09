/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../../styles/Size";
import Color from "../../styles/Color";

const root = css`
    background-color: ${Color.Primary};
    padding-top: 56.25%;
    width: 100%;
    border-radius: ${Size(0.5)} ${Size(0.5)} 0 0;
    background-position: center;
    background-size: cover;
`;

type NewsArticleThumbnailProps = {
    thumbnailUrl: string
};

const NewsArticleThumbnail: React.FC<NewsArticleThumbnailProps> = ({thumbnailUrl}) => {
    const bgImageStyle = css`
        background-image: url(${thumbnailUrl});
    `;

    return (
        <div css={[root, bgImageStyle]}></div>
    )
}

export default NewsArticleThumbnail;