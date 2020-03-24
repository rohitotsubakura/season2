/**@jsx jsx */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import TextJson  from "../data/ja.json";
import Button from "../components/Button";
import SkewContainer from "./SkewContainer";

const root = css`
    position: relative;
    &:after {
        content: "";
        position: absolute;
        background-color: ${Color.Secondary};
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

const goodsText = TextJson[0].ja.top.goods;

type GoodsProps = {
};

const Goods: React.FC<GoodsProps> = () => {
    return (
        <SkewContainer backLink={"goods"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{goodsText.heading}</h2>
                <p>{goodsText.subheading}</p> 
                <p>{goodsText.body}</p>
                <Button to={goodsText.to}>
                    <FontAwesomeIcon icon="eye"/>{goodsText.link}
                </Button>
            </div>
        </SkewContainer>
    )
}

export default Goods;