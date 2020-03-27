/**@jsx jsx */

import { NextPage, NextPageContext } from 'next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStickyNote, faHeadphones, faEye } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";

import { css, jsx } from "@emotion/core";
import Global from "../src/styles/Global";
import Color from '../src/styles/Color';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import MainVisual from '../src/components/MainVisual';
import About from '../src/components/About';
import News from '../src/components/News';
import Profile from '../src/components/Profile';
import PageHead from "../src/components/Head";
import Videos from '../src/components/Videos';
import Goods from '../src/components/Goods';

import TextJson from "../src/data/ja.json";
import Terms from '../src/components/Terms';
import Links from '../src/components/Links';
import TopLink from '../src/components/TopLink';
import { Tag } from '../src/interfaces/Tag';
import { NewsContents } from '../src/interfaces/NewsContents';

library.add(faYoutube, faTwitter, faGithubAlt,faStickyNote, faHeadphones, faEye);

const root = css`
    background-color: ${Color.Gray};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const IndexText = TextJson[0].ja.common.ogp;

const IndexHeadProps = {
    title: IndexText.title.top,
    url: IndexText.url.top,
    ogpthumb: IndexText.ogpthumb.top,
    description: IndexText.description.top
};

type NewsProps = {
    news: NewsContents[]
};

const Home: NextPage<NewsProps> = ({news}) => (
    <>
        <Global />
        <PageHead
            title={IndexHeadProps.title}
            url={IndexHeadProps.url}
            ogpthumb={IndexHeadProps.ogpthumb}
            description={IndexHeadProps.description}
        />
        <div css={root}>
            <Header />
            <TopLink />
            <MainVisual />
            <News news={news}/>
            <About />
            <Profile />
            <Videos />
            <Goods />
            <Terms />
            <Links />
            <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
        </div>
    </>
);

export async function getStaticProps() {
    const key = {
        headers: {'X-API-KEY': process.env.api_key},
    };
    const res = await axios.get(
        `https://rhttbkr.microcms.io/api/v1/news?limit=3`,
        key,
    );
    const data = await res.data.contents;
    return {props: {news: data}};
};

export default Home;