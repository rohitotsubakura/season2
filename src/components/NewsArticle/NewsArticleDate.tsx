/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Typography from "../../styles/Typography";
import Color from "../../styles/Color";

const root = css`
    color: ${Color.Gray};
    ${Typography.Caption};
`;

type NewsArticleDateProps = {
    date: string
};

const NewsArticleDate: React.FC<NewsArticleDateProps> = ({date}) => {
    const createdAt:string = new Date(date).toLocaleDateString('ja-JP');
    return (
        <span css={root}>{createdAt}</span>
    )
}

export default NewsArticleDate;