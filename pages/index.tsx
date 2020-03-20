import { NextPage } from 'next';
import Button from "../src/components/Button";

const Home: NextPage<{ userAgent:string }> = ({ userAgent }) => (
    <>
        <h1>Hello Next! - user agent: {userAgent}</h1>
        <Button
            to='https://github.com/rohitotsubakura/season2'
        >
            覗きに行く
        </Button>
    </>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;