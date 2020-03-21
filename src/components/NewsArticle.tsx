/**@jsx jsx */
import React from "react";
import Link from "next/link";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import NewsArticleThumbnail from "./NewsArticle/NewsArticleThumbnail";

const root = css`
    display: flex;
    flex-direction: column;
    background-color: ${Color.White};
    width: ${Size(60)};
    border-radius: ${Size(0.5)};
    @media (max-width: 768px) {
        width: 96%;
    }
    & > a {
        display: block;
        text-decoration: none;
    }
`;

type NewsArticleProps = {
};

const NewsArticle: React.FC<NewsArticleProps> = () => {
    return (
        <div css={root}>
            <Link href={"https://note.com/frontendpict/n/n1b0f8cf8e22d"}>
                <a>
                    <NewsArticleThumbnail/>
                    <p>これは新着情報です</p>
                </a>
            </Link>
        </div>
    )
}

export default NewsArticle;