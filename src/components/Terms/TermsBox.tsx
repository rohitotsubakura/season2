/**@jsx jsx */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css, jsx } from "@emotion/core";
import { color } from "csx";
import Color from "../../styles/Color";
import Size from "../../styles/Size";
import Typography from "../../styles/Typography";

const root = css`
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    color: ${Color.Black};
    width: 48%;
    margin-right: 1%;
    & > svg {
        width: ${Size(10)};
        margin: ${Size(10)};
    }
    & > h3 {
        ${Typography.Heading};
        margin-bottom: ${Size(10)}
    }
    & > ul {
        border-radius: ${Size(0.5)};
        padding: ${Size(5)};
        list-style: none;
        ${Typography.Body};
    }
    @media (max-width: 960px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: ${Size(5)};
    }
`;

type LinkProps = {
    heading: string,
    listItems: Array<string>
    brandColor: string,
    faIconPrefix: any,
    faIconName: any
}

const TermsBox : React.FC<LinkProps> = ({ heading, listItems, brandColor, faIconPrefix, faIconName}) => {
    const brandColorBg = color(brandColor).fade('20%').toString();
    const brandColorStyles = css`
        & > svg {
            color: ${brandColor};
        }
        & > ul {
            background-color: ${brandColorBg};
        }
    `;

    return(
        <div css={[root, brandColorStyles]}>
            <FontAwesomeIcon icon={[faIconPrefix, faIconName]} />
            <h3>{heading}</h3>
            <ul>
                {
                    listItems.map((listItem) => {
                        return(
                            <React.Fragment key={listItem}>
                                <li>{listItem}</li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TermsBox;
