import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";

const root = css`
    ${Typography.Heading};
    color: ${Color.White};
    background-color: ${Color.Primary};
    text-align: center;
    padding: ${Size(2)};
    margin-bottom: ${Size(2.5)};
    border-radius: ${Size(0.5)};
    width: 100%;
`;

type NewsSidebarTitleProps = {
    title: string
};

const NewsSidebarTitle: React.FC<NewsSidebarTitleProps> = ({title}) => {
    return (
        <h3 css={root}>
            {title}
        </h3>
    )
}

export default NewsSidebarTitle;