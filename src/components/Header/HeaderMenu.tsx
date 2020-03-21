/**@jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../../styles/Color";
import Size from "../../styles/Size";
import HeaderLink from "./HeaderLink";

import TextJson from "../../data/ja.json";

const root = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${Size(1.5)} ${Size(4)};
    background-color: ${Color.White};
    border-radius: ${Size(0.5)};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    list-style: none;
    & > li {
        margin-right: ${Size(4)};
        transition: all 300ms 0s ease;
    }
    & > li:last-child {
        margin-right: 0;
    }
    &> li:hover {
        color: ${Color.Primary};
    }
`;

const HeaderLinkList = TextJson[0].ja.common.header.list;

type HeaderMenuProps = {
};

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
    return (
        <ul css={root}>
            {
                HeaderLinkList.map( item => 
                    <React.Fragment key={item.name}>
                        <HeaderLink name={item.name} to={item.to}/>
                    </React.Fragment>
                )
            }
        </ul>
    )
}

export default HeaderMenu;