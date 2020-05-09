/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import TextJson  from "../data/ja.json";
import SkewContainer from "./SkewContainer";
import SnsButton from "./SnsButton";


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
    width: 90%;
    max-width: ${Size(200)};
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

const linksStyle = css`
    display: flex;
    flex-direction: row;
    width: ${Size(150)};
    justify-content: space-around;
    align-items: center;
    @media (max-width: 960px) {
        width: 100%;
        flex-direction: column;
        & > * {
            magin-bottom: ${Size(10)};
        }
    }
`;


const linksText = TextJson[0].ja.top.links;

const Links: React.FC = () => {
    return (
        <SkewContainer backLink={"links"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{linksText.heading}</h2>
                <p>{linksText.subheading}</p>
                <div css={linksStyle}>
                    {
                        linksText.items.map((item, index) => 
                            <React.Fragment key={index}>
                                <SnsButton
                                    to={item.url}
                                    brandColor={item.brandColor}
                                    name={item.name}
                                    faIconPrefix={item.faIconPrefix}
                                    faIconName={item.faIconName}
                                />
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        </SkewContainer>
    )
}

export default Links;