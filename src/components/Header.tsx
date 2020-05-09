/**@jsx jsx */
import React, {useState, useRef} from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import HeaderLogo from "./Header/HeaderLogo";
import HeaderMenu from "./Header/HeaderMenu";

const root = css`
    display: flex;
    position: fixed;
    top: 0;
    z-index: 10;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    max-width: ${Size(200)};
    padding: ${Size(5)} 0;
    @media (max-width: 960px) {
        width: 92%;
        margin: 4% 0;
        padding: 0;
        align-items: flex-start;
    }
`;


type HeaderProps = {
    open: boolean,
    setOpen: Function
};

const Header: React.FC<HeaderProps> = ({open, setOpen}) => {
    return (
        <nav css={root}>
            <HeaderLogo to={'/'}/>
            <HeaderMenu open={open} setOpen={setOpen} />
        </nav>
    )
}

export default Header;