/**@jsx jsx */

import { NextPage, NextPageContext } from 'next';

import { css, jsx } from "@emotion/core";
import Global from "../src/styles/Global";
import Color from '../src/styles/Color';
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import NewsArticle from '../src/components/NewsArticle';
import MainVisual from '../src/components/MainVisual';
import About from '../src/components/About';
import News from '../src/components/News';
import Profile from '../src/components/Profile';

const root = css`
    background-color: ${Color.Primary};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Home: NextPage<{ userAgent:string }> = ({ userAgent }) => (
    <>
        <Global />
        <div css={root}>
            <Header />
            <MainVisual />
            <News />
            <About />
            <Profile />
            <Button
                to='https://github.com/rohitotsubakura/season2'
            >
                覗きに行く
            </Button>
            <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
        </div>
    </>
);

Home.getInitialProps = async ({req}: NextPageContext) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;