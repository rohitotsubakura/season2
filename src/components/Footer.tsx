/**@jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";

const root = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${Color.White};
    ${Typography.Body};
    background-color: ${Color.Black};
    padding: ${Size(0.5)} 0;
    margin-top: auto;
    z-index: 10;
`;

type FooterProps = {
    year: number,
    copyright: string,
}

const Footer : React.FC<FooterProps> = ({year, copyright}) => {
    return(
        <footer css={root}>
           <p>
               &copy;{year} {copyright}
           </p>
        </footer>
    )
}

export default Footer;