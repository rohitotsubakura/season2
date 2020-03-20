/**@jsx jsx */

import React from "react";
import Link from "next/link";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";

const root = css`
    display: inline-block;
    color: ${Color.Primary};
    background-color: ${Color.White};
    ${Typography.Button};
    text-decolation: none;
    border-radius: ${Size(1)};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    padding: ${Size(2)} ${Size(4)};
`;

type LinkProps = {
    children: React.ReactNode,
    to: string,
}

const Button : React.FC<LinkProps> = ({ children, to}) => {
    return(
        <Link href={to}>
            <a css={root}>
                { children }
            </a>
        </Link>
    )
}

export default Button;