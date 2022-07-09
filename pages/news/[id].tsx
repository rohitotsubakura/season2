import React, { useState } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import axios from "axios";

import { css, jsx } from "@emotion/core";
import Global from "../../src/styles/Global";
import Color from '../../src/styles/Color';
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import PageHead from "../../src/components/Head";
import NewsDetailLayout from "../../src/components/NewsDetailLayout";

import TextJson from "../../src/data/ja.json";
import {NewsContents} from "../../src/interfaces/NewsContents";
import Typography from '../../src/styles/Typography';
import Size from '../../src/styles/Size';
import NewsArticle from '../../src/components/NewsArticle';
import NewsArticleDetail from '../../src/components/NewsArticleDetail';
import TagLink from "../../src/components/NewsTag";
import NewsSidebarTitle from "../../src/components/NewsSidebarTitle";
import NewsBreadcrumb from "../../src/components/NewsBreadcrumb";

const root = css`
    background-color: ${Color.White};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: ${Size(25)};
    overflow: hidden;
    @media (max-width: 960px) {
        margin-top: ${Size(20)};
    }
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
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        max-width: ${Size(200)};
        margin-bottom: ${Size(5)};
    }
    & > div > li {
        margin-bottom: ${Size(2.5)};
    }
    @media (max-width: 960px) {
        margin-right: 0;
        justify-content: center;
        & > div > li {
            margin-bottom: 0;
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

const NewsDetailHeadText = TextJson[0].ja.common.ogp;
const NewsDetailText = TextJson[0].ja.common.news;

const NewsDetailHeadProps = {
    title: NewsDetailHeadText.title.newsDetail,
    url: NewsDetailHeadText.url.newsDetail,
    ogpthumb: NewsDetailHeadText.ogpthumb.newsDetail,
    description: NewsDetailHeadText.description.newsDetail
};

type NewsDetailProps = {
    newsDetail: NewsContents,
    recentNews: NewsContents[],
};

const NewsDetail: NextPage<NewsDetailProps> = ({ newsDetail, recentNews }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Global />
            <PageHead
                title={`${newsDetail.title}${NewsDetailHeadProps.title}`}
                url={`${NewsDetailHeadProps.url}${newsDetail.id}`}
                ogpthumb={newsDetail.thumbnail.url}
                description={NewsDetailHeadProps.description}
            />
            <div css={root}>
                <Header open={open} setOpen={setOpen}/>
                <div css={breadcrumbStyle}>
                    <NewsBreadcrumb newsTitle={newsDetail.title}/>
                </div>
                <div css={innerStyle}>
                    <h2>{NewsDetailText.heading}</h2>
                    <p>{NewsDetailText.subheading}</p>
                </div>
                <NewsDetailLayout>
                    <main>
                        <NewsArticleDetail
                            title={newsDetail.title}
                            date={newsDetail.createdAt}
                            tags={newsDetail.tags}
                            thumbnail={newsDetail.thumbnail}
                            body={newsDetail.body}
                        />
                    </main>
                    <aside>
                        <NewsSidebarTitle title={NewsDetailText.sidebarHeading}/>
                        {
                            recentNews.map((item) => {
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

                        <div css={tagStyle}>
                            <p>{NewsDetailText.tagTitle}</p>
                            <div>
                                {
                                    NewsDetailText.tags.map((tag) => {
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
                    </aside>
                </NewsDetailLayout>
                <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const key = {
        headers: {'X-API-KEY': process.env.api_key},
    };

    const newsResponse = await axios.get(
        `${process.env.api_url}news`,
        key,
    );
    const newsData = await newsResponse.data.contents;
    const paths = newsData.map((news : {id: string}) => {
        return(
            {
                params: {id: news.id}
            }
        );
    });
    return {paths: paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async context => {
    const key = {
        headers: {'X-API-KEY': process.env.api_key},
    };

    const newsResponse = await axios.get(
        `${process.env.api_url}news?limit=3`,
        key,
    );
    const newsData = await newsResponse.data.contents;

    const {id}: any = context.params;
    const newsDetailResponse = await axios.get(
        `${process.env.api_url}news/${id}`,
        key,
    );
    const newsDetailData = await newsDetailResponse.data;

    return {
        props: {
            newsDetail: newsDetailData,
            recentNews: newsData,
        }
    };
};

export default NewsDetail;