/**@jsx jsx */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import TextJson  from "../data/ja.json";
import SkewContainer from "./SkewContainer";

const root = css`
    position: relative;
    &:after {
        content: "";
        position: absolute;
        background-color: ${Color.White};
        z-index: -1;
    }
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${Size(200)};
    & > h2 {
        color: ${Color.Black};
        ${Typography.Display1};
        margin-bottom: ${Size(2.5)};
    }
    & > p {
        color: ${Color.Black};
        ${Typography.Body};
        margin-bottom: ${Size(10)};
    }
`;

const termsText = TextJson[0].ja.top.terms;

type TermsProps = {
};

const Terms: React.FC<TermsProps> = () => {
    return (
        <SkewContainer backLink={"terms"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{termsText.heading}</h2>
                <p>{termsText.subheading}</p> 
            </div>
        </SkewContainer>
    )
}

export default Terms;
