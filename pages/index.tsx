import { NextPage, NextPageContext } from 'next';
import Global from "../src/styles/Global";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const Home: NextPage<{ userAgent:string }> = ({ userAgent }) => (
    <>
        <Global />
        <Header />
        <h1>Hello Next! - user agent: {userAgent}</h1>
        <Button
            to='https://github.com/rohitotsubakura/season2'
        >
            覗きに行く
        </Button>
        <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
    </>
);

Home.getInitialProps = async ({req}: NextPageContext) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;