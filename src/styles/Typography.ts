import { css } from "@emotion/core";

type fontFamilyType = {
    serif: string,
    sansSerif: string
}

const fontFamily: fontFamilyType = {
    serif: `font-family: 'Noto Serif JP', serif;`,
    sansSerif: `font-family: 'Noto Sans JP', sans-serif;`
};

const Hero = css`
    ${fontFamily.serif}
    font-size: 10rem;
    line-height: 11.2rem;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 8rem;
        line-height: 9.2rem; 
    }
`;

const Display2 = css`
    ${fontFamily.serif}
    font-size: 3rem;
    line-height: 3.8rem;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 2.8rem;
        line-height: 1.6rem; 
    }
`;

const Display1 = css`
    ${fontFamily.serif}
    font-size: 2.8rem;
    line-height: 3.2rem;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 2.6rem;
        line-height: 3rem; 
    }
`;

const Heading = css`
    ${fontFamily.serif}
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 1.4rem;
        line-height: 1.6rem; 
    }
`;

const Bold = css`
    ${fontFamily.sansSerif}
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem; 
    }
`;

const Body = css`
    ${fontFamily.sansSerif}
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem; 
    }
`;

const Button = css`
    ${fontFamily.serif}
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem; 
    }
`;

const Caption = css`
    ${fontFamily.sansSerif}
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 1.2rem; 
    }
`;

export default {
    Hero: Hero,
    Display2: Display2,
    Display1: Display1,
    Heading: Heading,
    Bold: Bold,
    Body: Body,
    Button: Button,
    Caption: Caption
}
