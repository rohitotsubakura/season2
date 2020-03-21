/**@jsx jsx */
import React from "react";
import Link from "next/link";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import HeaderLogo from "./Header/HeaderLogo";
import HeaderMenu from "./Header/HeaderMenu";

const root = css`
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${Size(200)};
    padding: ${Size(5)} 0;
`;

type HeaderProps = {
};

const Header: React.FC<HeaderProps> = () => {
    return (
        <div css={root}>
            <HeaderLogo to={'/'}/>
            <p>これはヘッダーです</p>
            <HeaderMenu />
        </div>
    )
}

export default Header;