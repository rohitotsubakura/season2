import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";
import Link from "next/link";

const root = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Color.Primary};
    background-color: ${Color.White};
    ${Typography.Button};
    text-decoration: none;
    border-radius: ${Size(1)};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    padding: ${Size(2)} ${Size(4)};
    transition: all 300ms 0s ease;
    & > svg {
        width: ${Size(4)};
        margin-right: ${Size(1)};
    }
    &:hover {
        background-color: ${Color.Primary};
        color: ${Color.White};
    }
`;

type InternalLinkProps = {
    children: React.ReactNode,
    to: string,
}

const InternalLinkButton : React.FC<InternalLinkProps> = ({ children, to}) => {
    return(
        <Link href={to}>
            <a css={root}>
                { children }
            </a>
        </Link>
    )
}

export default InternalLinkButton;
