import React from "react";
import Head from "next/head";
import Color from "../styles/Color";

type HeadProps = {
    title: string,
    url: string,
    ogpthumb?: string,
    description?: string
}

const PageHead: React.FC<HeadProps> = ({title, url, ogpthumb, description}) => {
    return(
        <Head>
            <title>ツバクラロヒト公式 - {title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:url" content={url} /> 
            <meta property="og:title" content={`ツバクラロヒト公式 - ${title}`} /> 
            <meta property="og:image" content={ogpthumb} /> 
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" /> 
            <meta name="twitter:site" content="@RhtTbkr" />
            <meta name="theme-color" content={Color.Primary}/>
            <link rel="icon" href="/favicon.ico"/>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Noto+Serif+JP:400,700,900&display=swap&subset=japanese" rel="stylesheet"></link>
        </Head>
    );
}

export default PageHead;