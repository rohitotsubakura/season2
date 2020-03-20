/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../../styles/Color";
import Size from "../../styles/Size";
import Typography from "../../styles/Typography";

const root = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${Size(1.5)} ${Size(4)};
    background-color: ${Color.White};
    border-radius: ${Size(0.5)};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    ${Typography.Body};
    color: ${Color.Black};
    list-style: none;
    & > li {
        margin-right: ${Size(4)};
        transition: all 300ms 0s ease;
    }
    & > li:last-child {
        margin-right: 0;
    }
    & > li:hover {
        color: ${Color.Primary};
    }
`;

type HeaderMenuProps = {
};

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
    return (
        <>
            <ul css={root}>
                <li><a>What's New?</a></li>
                <li><a>ABOUT</a></li>
                <li><a>PROFILE</a></li>
            </ul>
        </>
    )
}

export default HeaderMenu;