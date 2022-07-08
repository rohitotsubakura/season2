import React from "react";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";

const root = css`
    display: flex;
    justify-content: space-between;
    width: 92%;
    max-width: ${Size(200)};
    margin: 0 2%;
    & > main {
        width: 74%;
    }
    & > aside {
        width: 22%;
    }
    & > aside > div {
        margin-bottom: ${Size(5)};
    }
    @media (max-width: 960px) {
        width: 92%;
        margin: 0 4%;
        & > main {
            width: 100%;
        }
        flex-direction: column;
        & > aside {
            width: 100%;
        }
        & > aside > div {
            margin: 0 auto;
        }
    }
`;

type Props = {
    children: React.ReactNode,
}

const NewsDetailLayout: React.FC<Props> = ({
    children,
}) => {
    return(
        <div css={root}>
            {children}
        </div>
    )
};

export default NewsDetailLayout;