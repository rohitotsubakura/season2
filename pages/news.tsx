import React, { useState } from "react";
import { NextPage, NextPageContext, GetStaticProps } from 'next';
import axios from "axios";

import { css, jsx } from "@emotion/core";
import Global from "../src/styles/Global";
import Color from '../src/styles/Color';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import PageHead from "../src/components/Head";
import NewsArticle from "../src/components/NewsArticle";

import TextJson from "../src/data/ja.json";
import Typography from '../src/styles/Typography';
import Size from '../src/styles/Size';
import { Reveal, RevealMode } from 'react-genie';
import { NewsContents } from '../src/interfaces/NewsContents';
import TagLink from "../src/components/NewsTag";
import NewsBreadcrumb from "../src/components/NewsBreadcrumb";

const root = css`
    background-color: ${Color.White};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-height: 85vh;
    margin-top: ${Size(25)};
    overflow: hidden;
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: ${Size(100)};
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
    width: 92%;
    max-width: ${Size(200)};
    margin: 0 4%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: ${Size(2)};
    margin-bottom: ${Size(5)};
    & > div {
        margin: 0 ${Size(2)};
    }
    @media (max-width: 960px) {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        & > div {
            width: 48%;
            margin-bottom: ${Size(5)};
        }
    }
    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        & > div {
            width: 100%;
            margin-bottom: ${Size(5)};
        }
    }
`;

const tagStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${Size(100)};
    margin-bottom: ${Size(5)};
    & > p {
        ${Typography.Bold};
        color: ${Color.Primary};
        margin-bottom: ${Size(2.5)};
    }
    & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        max-width: ${Size(100)};
        margin-bottom: ${Size(5)};
    }
    @media (max-width: 960px) {
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
        }
    }
`;

const breadcrumbStyle = css`
    display: flex;
    flex-direction: row;
    width: 92%;
    max-width: ${Size(200)};
    margin: 0 4%;
    align-items: start;
    justify-content: start;
    margin-bottom: ${Size(5)};
    @media (max-width: 960px) {
        justify-content: center;
        margin-bottom: ${Size(5)};
    }
`;

const NewsHeadText = TextJson[0].ja.common.ogp;
const NewsText = TextJson[0].ja.common.news;

const NewsHeadProps = {
    title: NewsHeadText.title.newsList,
    url: NewsHeadText.url.newsList,
    ogpthumb: NewsHeadText.ogpthumb.newsList,
    description: NewsHeadText.description.newsList
};

type NewsListProps = {
    news: NewsContents[],
};

const Home: NextPage<NewsListProps> = ({ news }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Global />
            <PageHead
                title={NewsHeadProps.title}
                url={NewsHeadProps.url}
                ogpthumb={NewsHeadProps.ogpthumb}
                description={NewsHeadProps.description}
            />
            <div css={root}>
                <Header open={open} setOpen={setOpen}/>
                <div css={breadcrumbStyle}>
                    <NewsBreadcrumb />
                </div>
                <div css={innerStyle}>
                    <h2>{NewsText.heading}</h2>
                    <p>{NewsText.subheading}</p>
                </div>
                <div css={tagStyle}>
                    <p>{NewsText.tagTitle}</p>
                    <div>
                        {
                            NewsText.tags.map((tag) => {
                                return (
                                    <React.Fragment key={tag.name}>
                                        <TagLink
                                            tagName={tag.name} 
                                            to={tag.to}
                                        />
                                    </React.Fragment>
                                );
                            })
                        }
                    </div>
                </div>
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
                <Footer year={2023} copyright={"Rohito Tsubakura"}></Footer>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const key = {
        headers: {'X-API-KEY': process.env.api_key},
    };

    const newsResponse = await axios.get(
        `${process.env.api_url}news`,
        key,
    );
    const newsData = await newsResponse.data.contents;

    return {
        props: {
            news: newsData,
        }
    };
};

export default Home;