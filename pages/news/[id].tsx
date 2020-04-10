/**@jsx jsx */

import { NextPage, NextPageContext } from 'next';

import { css, jsx } from "@emotion/core";
import Global from "../../src/styles/Global";
import Color from '../../src/styles/Color';
import Button from "../../src/components/Button";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import PageHead from "../../src/components/Head";

import TextJson from "../../src/data/ja.json";
import Typography from '../../src/styles/Typography';
import Size from '../../src/styles/Size';

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

const NewsDetailHeadText = TextJson[0].ja.common.ogp;
const NewsDetailText = TextJson[0].ja.common.news;

const NewsDetailHeadProps = {
    title: NewsDetailHeadText.title.newsDetail,
    url: NewsDetailHeadText.url.newsDetail,
    ogpthumb: NewsDetailHeadText.ogpthumb.newsDetail,
    description: NewsDetailHeadText.description.newsDetail
};

const Home: NextPage<{ userAgent:string }> = ({ userAgent }) => (
    <>
        <Global />
        <PageHead
            title={NewsDetailHeadProps.title}
            url={NewsDetailHeadProps.url}
            ogpthumb={NewsDetailHeadProps.ogpthumb}
            description={NewsDetailHeadProps.description}
        />
        <div css={root}>
            <Header />
            <div css={innerStyle}>
                <h2>{NewsDetailText.heading}</h2>
                <p>{NewsDetailText.subheading}</p>
            </div>
            <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
        </div>
    </>
);

export default Home;