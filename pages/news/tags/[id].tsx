/**@jsx jsx */

import React from "react";
import { NextPage, NextPageContext, GetStaticProps, GetStaticPaths } from 'next';
import axios from "axios";

import { css, jsx } from "@emotion/core";
import Global from "../../../src/styles/Global";
import Color from ',,/../../src/styles/Color';
import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import PageHead from "../../../src/components/Head";
import NewsArticle from "../../../src/components/NewsArticle";

import TextJson from "../../../src/data/ja.json";
import Typography from '../../../src/styles/Typography';
import Size from '../../../src/styles/Size';
import { Reveal, RevealMode } from 'react-genie';
import { NewsContents } from '../../../src/interfaces/NewsContents';
import { Tag } from "../../../src/interfaces/Tag";

const root = css`
    background-color: ${Color.White};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 85vh;
    margin-top: ${Size(25)};
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: ${Size(2)};
    margin-bottom: ${Size(5)};
    & > div {
        margin: 0 ${Size(2)};
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

const Home: NextPage<NewsListProps> = ({ news }) => (
    <>
        <Global />
        <PageHead
            title={NewsHeadProps.title}
            url={NewsHeadProps.url}
            ogpthumb={NewsHeadProps.ogpthumb}
            description={NewsHeadProps.description}
        />
        <div css={root}>
            <Header />
            <div css={innerStyle}>
                <h2>{NewsText.heading}</h2>
                <p>{NewsText.subheading}</p>
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
            <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
        </div>
    </>
);

export const getStaticPaths: GetStaticPaths = async () => {
    const key = {
        headers: {'X-API-KEY': process.env.api_key},
    };

    const tagsResponse = await axios.get(
        `${process.env.api_url}tags`,
        key,
    );
    const tagsData = await tagsResponse.data.contents;
    const paths = tagsData.map((tag : {id: string}) => {
        return(
            {
                params: {id : tag.id}
            }
        );
    });
    return {paths: paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async context => {
    const key = {
        headers: {'X-API-KEY': process.env.api_key},
    };

    const {id}: any = context.params;
    const newsResponse = await axios.get(
        `${process.env.api_url}news?filters=tags[contains]${id}`,
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