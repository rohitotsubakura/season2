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
    width: 100%;
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

type NewsArticleProps = {
    id: string,
    title: string,
    date: string,
    tags: Tag[],
    thumbnail: {
        url: string
    }
};

const NewsArticle: React.FC<NewsArticleProps> = ({ id, title, date, tags, thumbnail}) => {
    return (
        <div css={root}>
            <Link href={`/news/${id}`}>
                <a>
                    <NewsArticleThumbnail thumbnailUrl={thumbnail.url}/>
                    <NewsArticleText>
                        <NewsArticleTitle title={title} />
                        <div css={secondroot}>
                            <NewsArticleDate date={date} />
                            <NewsArticleTags tags={tags} />
                        </div>
                    </NewsArticleText>
                </a>
            </Link>
        </div>
    )
}

export default NewsArticle;