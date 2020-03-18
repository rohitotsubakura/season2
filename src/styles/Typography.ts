import { css } from "@emotion/core";

const Display2 = css`
    font-size: 3rem;
    line-height: 3.8rem;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 2.8rem;
        line-height: 1.6rem; 
    }
`;

const Display1 = css`
    font-size: 2.8rem;
    line-height: 3.2rem;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 2.6rem;
        line-height: 3rem; 
    }
`;

const Heading = css`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1.4rem;
        line-height: 1.6rem; 
    }
`;

const Bold = css`
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem; 
    }
`;

const Body = css`
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem; 
    }
`;

const Button = css`
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem; 
    }
`;

const Caption = css`
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 1.2rem; 
    }
`;

export default {
    Display2: Display2,
    Display1: Display1,
    Heading: Heading,
    Bold: Bold,
    Body: Body,
    Button: Button,
    Caption: Caption
}
