/**@jsx jsx */

import { NextPage, NextPageContext } from 'next';

import { css, jsx } from "@emotion/core";
import Global from "../src/styles/Global";
import Color from '../src/styles/Color';
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const root = css`
    background-color: ${Color.Primary};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;
`;

const Home: NextPage<{ userAgent:string }> = ({ userAgent }) => (
    <>
        <Global />
        <div css={root}>
            <Header />
            <h1>Hello Next! - user agent: {userAgent}</h1>
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