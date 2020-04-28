/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../../styles/Color";
import Size from "../../styles/Size";

const root = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${Size(4)};
    height: ${Size(4)};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: ${Size(4)};
        height: ${Size(0.5)};
        background: ${Color.BoundaryBlack};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
`;

type HeaderHumburgerTypes = {
    open?: boolean,
    setOpen?: Function
};

const HeaderHumburger: React.FC<HeaderHumburgerTypes> = ({ open, setOpen }) => (
    <button css={root}>
        <div/>
        <div/>
        <div/>
    </button>
);

export default HeaderHumburger;