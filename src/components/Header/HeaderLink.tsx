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
    @media (max-width: 768px) {
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

type HeaderLinkProps = {
    name: string,
    to: string,
    open: boolean,
    setOpen: Function
};

const HeaderLink: React.FC<HeaderLinkProps> = ({name, to, open, setOpen}) => {
    return (
        <li css={root} onClick={() => setOpen(false)}>
            <Link href={to}>
                <a>{name}</a>
            </Link>
        </li>
    )
}

export default HeaderLink;