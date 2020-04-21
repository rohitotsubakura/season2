/**@jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";

const root = css`
    display: flex;
    justify-content: space-between;
    max-width: ${Size(200)};
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