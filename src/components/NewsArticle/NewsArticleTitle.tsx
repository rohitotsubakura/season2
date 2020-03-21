/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Typography from "../../styles/Typography";
import Color from "../../styles/Color";

const root = css`
    color: ${Color.Black};
    ${Typography.Heading};
`;

type NewsArticleTitleProps = {
    title: string
};

const NewsArticleTitle: React.FC<NewsArticleTitleProps> = ({title}) => {
    return (
        <h3 css={root}>{title}</h3>
    )
}

export default NewsArticleTitle;