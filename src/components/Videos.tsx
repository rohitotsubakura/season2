/**@jsx jsx */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { css, jsx } from "@emotion/core";
import Size from "../styles/Size";
import Color from "../styles/Color";
import Typography from "../styles/Typography";

import TextJson  from "../data/ja.json";
import Button from "../components/Button";
import SkewContainer from "./SkewContainer";

const root = css`
    position: relative;
    &:after {
        content: "";
        position: absolute;
        background-color: ${Color.Black};
        z-index: -1;
    }
`;

const innerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${Size(200)};
    & > h2 {
        color: ${Color.White};
        ${Typography.Display1};
        margin-bottom: ${Size(2.5)};
    }
    & > p {
        color: ${Color.White};
        ${Typography.Body};
        margin-bottom: ${Size(10)};
    }
`;

const videoStyles = css `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    & > a {
        margin-bottom: ${Size(10)};
        margin-right: ${Size(2)};
    }
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const videosText = TextJson[0].ja.top.videos;

type VideosProps = {
    videos: [{
        id: {
            videoId: string
        }
    }]
};

const Videos: React.FC<VideosProps> = ({videos}) => {
    return (
        <SkewContainer backLink={"videos"} overrideStyle={root}>
            <div css={innerStyle}>
                <h2>{videosText.heading}</h2>
                <p>{videosText.subheading}</p> 
                <div css={videoStyles}>
                    {
                        videos.map((item) => {
                            return(
                                <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} key={item.id.videoId}>
                                    <img src={`https://img.youtube.com/vi/${item.id.videoId}/mqdefault.jpg`} width="320" height="180"/>
                                </a>
                            )
                        })
                    }
                </div>
                <Button to={TextJson[0].ja.top.videos.to}>
                    <FontAwesomeIcon icon="eye"/>もっと見る
                </Button>
            </div>
        </SkewContainer>
    )
}

export default Videos;