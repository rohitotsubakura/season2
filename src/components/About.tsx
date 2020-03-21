/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import  TextJson  from "../data/ja.json";
import Button from "../components/Button";
import SkewContainer from "./SkewContainer";

const root = css`
    position: absolute;
    top: 80vh; 
    padding-top: ${Size(50)};
    background-image: url("/static/images/lxi_makibira_bg.png");
    background-size: cover;
    background-position: center;
    &::before {
        content: '';
        position: absolute;
        background: inherit;
        filter: blur(20px) brightness(0.5);
    }
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${Size(100)};
    & > h2 {
        color: ${Color.White};
        ${Typography.Display1};
        margin-bottom: ${Size(10)};
    }
    & > h3 {
        color: ${Color.White};
        ${Typography.Heading};
        margin-bottom: ${Size(10)};
    }
    & > p {
        color: ${Color.White};
        ${Typography.Body};
        margin-bottom: ${Size(10)};
    }
`;

const aboutText = TextJson[0].ja.top.about;

type AboutProps = {
};

const About: React.FC<AboutProps> = () => {
    return (
        <SkewContainer backLink={"about"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{aboutText.heading}</h2>
                <h3>{aboutText.subheading}</h3> 
                <p>{aboutText.body}</p>
                <Button to={""}>
                    覗きに行く
                </Button>
            </div>
        </SkewContainer>
    )
}

export default About;