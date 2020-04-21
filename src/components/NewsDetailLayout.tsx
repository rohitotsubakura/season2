/**@jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";

const root = css`
    display: flex;
    justify-content: space-between;
    width: ${Size(200)};
    & > main {
        width: 74%;
    }
    & > aside {
        width: 22%;
    }
    & > aside > div {
        margin-bottom: ${Size(5)};
    }
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;

type Props = {
    children: React.ReactNode,
}

const NewsDetailLayout: React.FC<Props> = ({
    children,
}) => {
    return(
        <div css={root}>
            {children}
        </div>
    )
};

export default NewsDetailLayout;