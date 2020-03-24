/**@jsx jsx */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import  TextJson  from "../data/ja.json";
import Button from "../components/Button";
import SkewContainer from "./SkewContainer";
import NewsArticle from "./NewsArticle";

const root = css`
    background-color: ${Color.White};
    z-index: 0;
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${Size(100)};
    & > h2 {
        color: ${Color.Black};
        ${Typography.Display1};
        margin-bottom: ${Size(2.5)};
    }
    & > p {
        color: ${Color.Black};
        ${Typography.Body};
        margin-bottom: ${Size(10)};
    }
`;

const newsStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: ${Size(5)};
    & > div {
        margin: 0 ${Size(2)};
    }
`;

const newsText = TextJson[0].ja.top.news;

type NewsProps = {
};

const News: React.FC<NewsProps> = () => {
    return (
        <SkewContainer backLink={"news"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{newsText.heading}</h2>
                <p>{newsText.subheading}</p>
                <div css={newsStyle}>
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                </div>
                <Button to={"/news"}>
                    <FontAwesomeIcon icon="eye"/>もっと見る
                </Button>
            </div>
        </SkewContainer>
    )
}

export default News;