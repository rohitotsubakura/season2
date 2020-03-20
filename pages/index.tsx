import { NextPage, NextPageContext } from 'next';
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";

const Home: NextPage<{ userAgent:string }> = ({ userAgent }) => (
    <>
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