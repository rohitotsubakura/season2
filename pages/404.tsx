/**@jsx jsx */

import { NextPage, NextPageContext } from 'next';

import { css, jsx } from "@emotion/core";
import Global from "../src/styles/Global";
import Color from '../src/styles/Color';
import BackLinkButton from "../src/components/BackLinkButton";
import Footer from "../src/components/Footer";
import PageHead from "../src/components/Head";

import TextJson from "../src/data/ja.json";
import Typography from '../src/styles/Typography';
import Size from '../src/styles/Size';
import InternalLinkButton from '../src/components/InternalLinkButton';

const root = css`
    background-color: ${Color.Gray};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url("/static/images/image404.png");
    background-size: cover;
    background-position: 0 20%;
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: inherit;
        filter: sepia(0.5);
        z-index: 1;
    }
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(112, 58, 22, 0.4);
        mix-blend-mode: multiply;
        z-index: 2;
    }
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

const buttonsStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-conetnt: center;
    margin-bottom: ${Size(20)};
    & > * {
        margin-right: ${Size(5)};
    }
    & > *:last-child {
        margin-right: 0;
    }
`;

const NotFoundHeadText = TextJson[0].ja.common.ogp;
const NotFoundText = TextJson[0].ja["404"];

const NotFoundHeadProps = {
    title: NotFoundHeadText.title["404"],
    url: NotFoundHeadText.url["404"],
    ogpthumb: NotFoundHeadText.ogpthumb["404"],
    description: NotFoundHeadText.description["404"]
};

const Custom404: NextPage = () => {
    return (
        <>
            <Global />
            <PageHead
                title={NotFoundHeadProps.title}
                url={NotFoundHeadProps.url}
                ogpthumb={NotFoundHeadProps.ogpthumb}
                description={NotFoundHeadProps.description}
            />
            <div css={root}>
                <div css={innerStyle}>
                    <h1>{NotFoundText.heading}</h1>
                    <h2>{NotFoundText.subheading}</h2>
                    <p>{NotFoundText.body}</p>
                    <div css={buttonsStyle}>
                        <BackLinkButton>{NotFoundText.links[0].name}</BackLinkButton>
                        <InternalLinkButton to={NotFoundText.links[1].to}>
                            {NotFoundText.links[1].name}
                        </InternalLinkButton>
                    </div>
                </div>
                <Footer year={2020} copyright={"Rohito Tsubakura"}></Footer>
            </div>
        </>
    );
};

export default Custom404;