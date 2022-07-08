import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Reveal, RevealMode } from "react-genie";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import  TextJson  from "../data/ja.json";
import InternalLinkButton from "../components/InternalLinkButton";
import SkewContainer from "./SkewContainer";
import NewsArticle from "./NewsArticle";
import { NewsContents } from "../interfaces/NewsContents";

const root = css`
    background-color: ${Color.White};
    z-index: 0;
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: ${Size(200)};
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
    align-items: flex-start;
    justify-content: center;
    margin-bottom: ${Size(5)};
    & > div {
        margin: 0 ${Size(2)};
    }
    @media (max-width: 960px) {
        flex-direction: column;
        & > div {
            margin-bottom: ${Size(5)};
        }
        & > div:last-child {
            margin-bottom: 0;
        }
    }
`;

const newsText = TextJson[0].ja.top.news;

type NewsProps = {
    news: NewsContents[]
};

const News: React.FC<NewsProps> = ({news}) => {
    return (
        <SkewContainer backLink={"news"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{newsText.heading}</h2>
                <p>{newsText.subheading}</p>
                <Reveal mode={RevealMode.Clone}>
                    <div css={newsStyle}>
                        {
                            news.map((item) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <NewsArticle
                                            id={item.id}
                                            title={item.title}
                                            date={item.createdAt}
                                            tags={item.tags}
                                            thumbnail={item.thumbnail}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </Reveal>
                <InternalLinkButton to={"/news"}>
                    <FontAwesomeIcon icon="eye"/>もっと見る
                </InternalLinkButton>
            </div>
        </SkewContainer>
    )
}

export default News;