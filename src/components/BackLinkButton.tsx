import React from "react";
import Router from "next/router";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";

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

type BackLinkProps = {
    children: React.ReactNode,
}

const BackLinkButton : React.FC<BackLinkProps> = ({ children }) => {
    return(
        <div css={root} onClick={() => Router.back()}>
            { children }
        </div>
    )
}

export default BackLinkButton;
