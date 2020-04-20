/**@jsx jsx */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Reveal, RevealMode } from "react-genie";

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import  TextJson  from "../data/ja.json";
import SoundButton from "../components/SoundButton";
import SkewContainer from "./SkewContainer";

const root = css`
    position: relative;
    &:after {
        content: "";
        position: absolute;
        background-color: ${Color.Primary};
        background-image: url("/static/images/imageprofile.png");
        background-size: 35%;
        background-position: 75% 25%;
        z-index: -1;
    }
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h2 {
        color: ${Color.White};
        ${Typography.Display1};
        margin-bottom: ${Size(2.5)};
    }
    & > h3 {
        color: ${Color.White};
        ${Typography.Display2};
        margin-bottom: ${Size(10)};
    }
    & > p {
        color: ${Color.White};
        ${Typography.Body};
        margin-bottom: ${Size(10)};
    }
`;

const descStyle = css`
    display: flex;
    flex-direction: row;
    width: ${Size(200)};
    & > div {
        width: 46%;
        margin-right: 2%;
    }
    & > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
    & > div > h2 {
        color: ${Color.White};
        ${Typography.Display1};
        margin-bottom: ${Size(2.5)};
    }
    & > div > h3 {
        color: ${Color.White};
        ${Typography.Display2};
        margin-bottom: ${Size(5)};
    }
    & > div > p {
        color: ${Color.White};
        ${Typography.Body};
        margin-bottom: ${Size(2.5)};
    }
`;

const profileText = TextJson[0].ja.top.profile;

type ProfileProps = {
};

const Profile: React.FC<ProfileProps> = () => {
    return (
        <SkewContainer backLink={"profile"} overrideStyle={root}>
            <Reveal mode={RevealMode.Clone}>
                <div css={innerStyle}>
                    <h2>{profileText.heading}</h2>
                    <p>{profileText.subheading}</p> 
                    <div css={descStyle}>
                        <div>
                            <h3>ツバクラロヒト</h3>
                            <p dangerouslySetInnerHTML={{__html: profileText.body}} />
                        </div>
                        <div>
                            <SoundButton>
                                <FontAwesomeIcon icon="headphones"/><i className="fas fa-headphones-alt"></i>声を聞く
                            </SoundButton>
                        </div>
                    </div>
                </div>
            </Reveal>
        </SkewContainer>
    )
}

export default Profile;