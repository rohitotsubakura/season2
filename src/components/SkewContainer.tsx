/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

const root = css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 0;
    width: 100%;
    padding: ${Size(20)} 0 ${Size(30)} 0;
    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
        -webkit-transform: skewY(-5deg);
        transform: skewY(-5deg);
        transform-origin: bottom left;
        z-index: -1;
    }
`;

type SkewContainerProps = {
    backLink: string,
    children: React.ReactNode,
    overrideStyle: any
};

const SkewContainer: React.FC<SkewContainerProps> = ({backLink, children, overrideStyle}) => {
    return (
        <div css={[root, overrideStyle]} id={backLink}>
            {children}
        </div>
    )
}

export default SkewContainer;