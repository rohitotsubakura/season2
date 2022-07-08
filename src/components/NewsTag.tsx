import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";
import Link from "next/link";

const root = css`
    ${Typography.Body};
    color: ${Color.Primary};
    list-style: none;
    & > a {
        text-decoration: none;
        transition: all 300ms 1s ease;
    }
    & > a:hover {
        text-decoration: underline overline;
    }
    @media (max-width: 960px) {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: ${Size(5)};
        & > a {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
    }
`;

type TagLinkProps = {
    tagName: string,
    to: string,
};

const TagLink: React.FC<TagLinkProps> = ({tagName, to}) => {
    return (
        <li css={root}>
            <Link href={to}>
                <a>#{tagName}</a>
            </Link>
        </li>
    )
}

export default TagLink;