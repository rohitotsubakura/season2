/**@jsx jsx */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css, jsx } from "@emotion/core";
import { color } from "csx";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";

const root = css`
    display: flex;
    justify-contents: center;
    align-items: center;
    color: ${Color.White};
    ${Typography.Heading};
    text-decoration: none;
    border-radius: ${Size(1)};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    padding: ${Size(2)} ${Size(4)};
    transition: all 300ms 0s ease;
    & > svg {
        width: ${Size(5)};
        margin-right: ${Size(2)};
    }
    @media (max-width: 960px) {
        margin-bottom: ${Size(5)};
    }
`;

type LinkProps = {
    to: string,
    brandColor: string,
    name: string,
    faIconPrefix: any,
    faIconName: any
}

const SnsButton : React.FC<LinkProps> = ({ to, brandColor, name, faIconPrefix, faIconName}) => {
    const brandColorHover = color(brandColor).lighten('10%').toString();
    const brandColorStyles = css`
        background-color: ${brandColor};
        &:hover {
           background-color: ${brandColorHover}; 
        }
    `;

    return(
        <a css={[root, brandColorStyles]} href={to} target="_blank">
            <FontAwesomeIcon icon={[faIconPrefix, faIconName]} />{name}
        </a>
    )
}

export default SnsButton;
