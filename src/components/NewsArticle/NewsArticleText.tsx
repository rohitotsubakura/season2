import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../../styles/Size";

const root = css`
    align-items: stretch;
    width: 100%;
    padding: ${Size(2)};
    box-sizing: border-box;
`;

type NewsArticleTextProps = {
};

const NewsArticleText: React.FC<NewsArticleTextProps> = ({children}) => {
    return (
        <div css={root}>
            {children}
        </div>
    )
}

export default NewsArticleText;