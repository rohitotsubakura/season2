
/**@jsx jsx */
import React from "react";
import Link from "next/link";

import { css, jsx } from "@emotion/core";
import Color from "../../styles/Color";
import Size from "../../styles/Size";

const root = css`
    display: inline-block;
    width: ${Size(20)};
    & > img {
        max-width: 100%;
        -webkit-filter: drop-shadow(${Size(5)} ${Size(5)} ${Size(5)} ${Color.BoundaryBlack});
        filter: drop-shadow(${Size(5)} ${Size(5)} ${Size(5)} ${Color.BoundaryBlack});
    }
`;

type HeaderLogoTypes = {
    to : string
};

const HeaderLogo: React.FC<HeaderLogoTypes> = ({ to }) => (
    <Link href={to}>
        <a css={root}>
            <img src="/static/images/mark_color-S.svg" alt="ここに画像があるはず"/>
        </a>
    </Link>
);

export default HeaderLogo;