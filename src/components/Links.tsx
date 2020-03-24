/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import TextJson  from "../data/ja.json";
import SkewContainer from "./SkewContainer";

const root = css`
    position: relative;
    &:before {
        content: "";
        position: absolute;
        -webkit-transform: skewY(0deg);
        transform: skewY(0deg);
    }
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${Size(200)};
    & > h2 {
        color: ${Color.White};
        ${Typography.Display1};
        margin-bottom: ${Size(2.5)};
    }
    & > p {
        color: ${Color.White};
        ${Typography.Body};
        margin-bottom: ${Size(10)};
    }
`;


const linksText = TextJson[0].ja.top.links;

const Links: React.FC = () => {
    return (
        <SkewContainer backLink={"links"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{linksText.heading}</h2>
                <p>{linksText.subheading}</p> 
            </div>
        </SkewContainer>
    )
}

export default Links;