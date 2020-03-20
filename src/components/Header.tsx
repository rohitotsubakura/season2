/**@jsx jsx */
import React from "react";
import Link from "next/link";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";
import HeaderLogo from "./Header/HeaderLogo";

const root = css`
    fill: ${Color.BackToTop};
`;

type HeaderProps = {
};

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <HeaderLogo to={'/'}/>
            <p>これはヘッダーです</p>
        </>
    )
}

export default Header;