/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../../styles/Color";
import Size from "../../styles/Size";
import Typography from "../../styles/Typography";
import Link from "next/link";

const root = css`
    ${Typography.Body};
    color: ${Color.Black};
    & > a {
        text-decoration: none;
    }
`;

type HeaderLinkProps = {
    name: string,
    to: string,
};

const HeaderLink: React.FC<HeaderLinkProps> = ({name, to}) => {
    return (
        <li css={root}>
            <Link href={to}>
                <a>{name}</a>
            </Link>
        </li>
    )
}

export default HeaderLink;