/**@jsx jsx */

import React from "react";
import { Howl, Howler } from "howler";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";

const root = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Color.Primary};
    background-color: ${Color.White};
    ${Typography.Button};
    text-decoration: none;
    border-radius: ${Size(1)};
    box-shadow: 0 ${Size(0.5)} ${Size(2)} ${Color.BoundaryBlack};
    padding: ${Size(2)} ${Size(4)};
    transition: all 300ms 0s ease;
    & > svg {
        width: ${Size(4)};
        margin-right: ${Size(1)};
    }
    &:hover {
        background-color: ${Color.Primary};
        color: ${Color.White};
    }
`;

type SoundButtonProps = {
    children: React.ReactNode,
};

const sound: Howl = new Howl({
    src: ['static/audio/sample_voice.mp3'],
});

const SoundButton : React.FC<SoundButtonProps> = ({ children }) => {
    return(
        <div css={root} onClick={() => sound.play()}>
            { children }
        </div>
    )
}

export default SoundButton;
