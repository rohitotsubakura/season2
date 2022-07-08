import { NextPage, NextPageContext } from 'next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStickyNote, faHeadphones, faEye, faHeart, faBan, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import axios from "axios"; 
import React, { useState } from "react";

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
import { NewsContents } from '../src/interfaces/NewsContents';

import { RevealGlobalStyles } from "react-genie";

library.add(
    faChevronDown,
    faYoutube,
    faTwitter,
    faGithubAlt,
    faStickyNote,
    faHeadphones,
    faEye,
    faHeart,
    faBan
);

const root = css`
    background-color: ${Color.Gray};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
`;

const IndexText = TextJson[0].ja.common.ogp;

const IndexHeadProps = {
    title: IndexText.title.top,
    url: IndexText.url.top,
    ogpthumb: IndexText.ogpthumb.top,
    description: IndexText.description.top
};

type HomeProps = {
    news: NewsContents[],
    keyvisual: {
        image: {
            url: string
        }
    },
    videos: any
};

const Home: NextPage<HomeProps> = ({news, keyvisual, videos}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Global />
            <RevealGlobalStyles />
            <PageHead
                title={IndexHeadProps.title}
                url={IndexHeadProps.url}
                ogpthumb={IndexHeadProps.ogpthumb}
                description={IndexHeadProps.description}
            />
            <div css={root}>
                <Header open={open} setOpen={setOpen} />
                <TopLink />
                <MainVisual keyvisualUrl={keyvisual.image.url}/>
                <News news={news}/>
                <About />
                <Profile />
                <Videos videos={videos}/>
                <Goods />
                <Terms />
                <Links />
                <Footer year={2022} copyright={"Rohito Tsubakura"}></Footer>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const key = {
        headers: {'X-API-KEY': process.env.api_key},
    };

    const newsResponse = await axios.get(
        `${process.env.api_url}news?limit=3`,
        key,
    );
    const newsData = await newsResponse.data.contents;

    const keyvisualResponse = await axios.get(
        `${process.env.api_url}keyvisual`,
        key,
    );
    const keyvisualData = await keyvisualResponse.data;

    const videoResponse = await axios.get(
        `${process.env.yt_api_url}${process.env.yt_api_url_params}&key=${process.env.yt_api_key}`
    );
    const videoData = await videoResponse.data.items;
    return {
        props: {
            news: newsData,
            keyvisual: keyvisualData,
            videos: videoData
        }
    };
};

export default Home;