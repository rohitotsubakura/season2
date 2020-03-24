/**@jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";

const root = css`
    display: block;
    color: ${Color.Primary};
    background-color: ${Color.White};
    ${Typography.Button};
    text-decoration: none;
    border-radius: ${Size(1)};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    padding: ${Size(2)} ${Size(4)};
    transition: all 300ms 0s ease;
    & > i {
        margin-right: ${Size(1)};
    }
    &:hover {
        background-color: ${Color.Primary};
        color: ${Color.White};
    }
`;

type LinkProps = {
    children: React.ReactNode,
    to: string,
}

const Button : React.FC<LinkProps> = ({ children, to}) => {
    return(
        <a css={root} href={to}>
            { children }
        </a>
    )
}

export default Button;
