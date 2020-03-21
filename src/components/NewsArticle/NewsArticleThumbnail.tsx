/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../../styles/Size";
import Color from "../../styles/Color";

const root = css`
    background-color: ${Color.Primary};
    height: ${Size(30)};
    width: 100%;
    border-radius: ${Size(0.5)} ${Size(0.5)} 0 0;
    background-image: url("/static/images/lxi_makibira_bg.png");
    background-position: center;
    background-size: cover;
`;

type NewsArticleThumbnailProps = {
};

const NewsArticleThumbnail: React.FC<NewsArticleThumbnailProps> = () => {
    return (
        <div css={root}></div>
    )
}

export default NewsArticleThumbnail;