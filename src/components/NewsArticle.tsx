/**@jsx jsx */
import React from "react";
import Link from "next/link";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import NewsArticleThumbnail from "./NewsArticle/NewsArticleThumbnail";
import NewsArticleText from "./NewsArticle/NewsArticleText";
import NewsArticleTitle from "./NewsArticle/NewsArticleTitle";
import NewsArticleDate from "./NewsArticle/NewsArticleDate";
import NewsArticleTags from "./NewsArticle/NewsArticleTags";

import { Tag } from "../interfaces/Tag";

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

const secondroot = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const tagList = [
    {
        id: 0,
        name: "お知らせ"
    },
    {   
        id: 1,
        name: "動画"
    }
];

type NewsArticleProps = {
};

const NewsArticle: React.FC<NewsArticleProps> = () => {
    return (
        <div css={root}>
            <Link href={"https://note.com/frontendpict/n/n1b0f8cf8e22d"}>
                <a>
                    <NewsArticleThumbnail/>
                    <NewsArticleText>
                        <NewsArticleTitle title={"Webサイト制作講座 #4 公開"} />
                        <p>これは新着情報です</p>
                        <div css={secondroot}>
                            <NewsArticleDate date={"2020.03.30"} />
                            <NewsArticleTags tags={tagList} />
                        </div>
                    </NewsArticleText>
                </a>
            </Link>
        </div>
    )
}

export default NewsArticle;