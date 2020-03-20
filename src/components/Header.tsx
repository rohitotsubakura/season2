/**@jsx jsx */

import React from "react";
import Link from "next/link";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";

const root = css`

`;

type HeaderProps = {
    to? : string,
};

const Header: React.FC<HeaderProps> = () => {
    return (
        <p>これはヘッダーです</p>
    )
}

export default Header;