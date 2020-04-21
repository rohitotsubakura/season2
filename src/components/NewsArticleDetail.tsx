/**@jsx jsx */
import React from "react";
import MarkdownIt from "markdown-it";

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
    & > a {
        display: block;
        text-decoration: none;
        color: ${Color.Primary};
    }
`;

const secondroot = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const bodyStyle = css`
    margin: ${Size(5)} 0;
    & > a {
        color: ${Color.Primary};
    }
`;

type NewsArticleDetailProps = {
    title: string,
    date: string,
    tags: Tag[],
    thumbnail: {
        url: string
    },
    body: string
};

const NewsArticleDetail: React.FC<NewsArticleDetailProps> = ({title, date, tags, thumbnail, body}) => {
    const md = new MarkdownIt({ html: true});
    return (
        <div css={root}>
            <NewsArticleThumbnail thumbnailUrl={thumbnail.url}/>
            <NewsArticleText>
                <NewsArticleTitle title={title} />
                <div css={secondroot}>
                    <NewsArticleDate date={date} />
                    <NewsArticleTags tags={tags} />
                </div>
                <div css={bodyStyle} dangerouslySetInnerHTML={{__html: body}} />
            </NewsArticleText>
        </div>
    )
}

export default NewsArticleDetail;