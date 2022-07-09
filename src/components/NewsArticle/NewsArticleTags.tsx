import React from "react";

import { css, jsx } from "@emotion/core";
import Typography from "../../styles/Typography";
import Color from "../../styles/Color";

import { Tag } from "../../interfaces/Tag";
import Size from "../../styles/Size";

const root = css`
    display: flex;
    flex-direction: row;
    list-style: none;
    color: ${Color.Primary};
    ${Typography.Body};
    & > li {
        margin-right: ${Size(1)};
    }
`;

type NewsArticleTagsProps = {
    tags: Tag[]
};

const NewsArticleTags: React.FC<NewsArticleTagsProps> = ({tags})  => {
    return (
        <ul css={root}>
        {
            tags.map( tag => (
                    <li key={tag.id}>
                        <span>#{tag.name}</span>
                    </li>
                )
            )
        }
        </ul>
    )
}

export default NewsArticleTags;