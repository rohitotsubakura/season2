/**@jsx jsx */

import { NextPage, NextPageContext } from 'next';

import { css, jsx } from "@emotion/core";
import Global from "../src/styles/Global";
import Color from '../src/styles/Color';
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import PageHead from "../src/components/Head";

import TextJson from "../src/data/ja.json";
import Typography from '../src/styles/Typography';
import Size from '../src/styles/Size';

const root = css`
    background-color: ${Color.White};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: 3;
    color: ${Color.White};
    & > h1 {
        ${Typography.Hero};
        margin-bottom: ${Size(1)};
    }
    & > h2 {
        ${Typography.Display1};
        margin-bottom: ${Size(5)};
    }
    & > p {
        ${Typography.Heading};
        margin-bottom: ${Size(10)};
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

const Home: NextPage<{ userAgent:string }> = ({ userAgent }) => (
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
            <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
        </div>
    </>
);

export default Home;