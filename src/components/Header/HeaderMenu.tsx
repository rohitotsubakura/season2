import React, { useRef } from "react";

import { css, jsx } from "@emotion/core";
import Color from "../../styles/Color";
import Size from "../../styles/Size";
import HeaderLink from "./HeaderLink";

import TextJson from "../../data/ja.json";
import HeaderHumburger from "./HeaderHumburger";
import { useOnClickOutside } from "./hooks";

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
        transition: color 300ms 0s ease;
    }
    & > li:nth-of-type(7) {
        margin-right: 0;
    }
    & > li:hover {
        color: ${Color.Primary};
    }
    @media (max-width: 960px) {
        padding: ${Size(3)} ${Size(3)};
        flex-direction: column;
        transition: width,height,transform,opacity 0.3s ease;
        & > li {
            display: none;
            margin-right: 0;
            order: 2;
        }
        & > button {
            order: 1;
        }
    }
`;

const headerAnimation = css`
    @media (max-width: 960px) {
        position: relative;
        width: 70%;
        height: 80vh;
        padding-top: 0;
        li {
            display: flex;
        }
        & > button {
            position: absolute;
            top: ${Size(3)};
            right: ${Size(3)};
            margin-left: auto;
        }
    }
`;

const HeaderLinkList = TextJson[0].ja.common.header.list;

type HeaderMenuProps = {
    open: boolean,
    setOpen: Function
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({open, setOpen}) => {
    const node = useRef<HTMLUListElement>(null);
    useOnClickOutside(node, () => setOpen(false));
    return (
        <ul css={open ? [root, headerAnimation] : root} ref={node}>
            {
                HeaderLinkList.map( item => 
                    <React.Fragment key={item.name}>
                        <HeaderLink
                            name={item.name}
                            to={item.to}
                            open={open}
                            setOpen={setOpen}
                        />
                    </React.Fragment>
                )
            }
            <HeaderHumburger open={open} setOpen={setOpen}/>
        </ul>
    )
}

export default HeaderMenu;