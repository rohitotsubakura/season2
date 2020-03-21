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
    width: 150%;
    padding: ${Size(20)} 0;
    -webkit-transform: rotate(-5deg) translate3d(0, 0, 0);
    tranform: rotate(-5deg) translate3d(0, 0, 0);
    & > div {
        -webkit-transform: rotate(5deg) translate3d(0, 0, 0);
        tranform: rotate(5deg) translate3d(0, 0, 0);
    }
    &:before {
        content: '';
        position: absolute;
        background: inherit;
        filter: blur(20px) brightness(0.5);
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