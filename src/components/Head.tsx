import React from "react";
import Head from "next/head";

type HeadProps = {
    title: string
}

const PageHead: React.FC<HeadProps> = ({title}) => {
    return(
        <Head>
            <title>ツバクラロヒト公式 - {title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Noto+Serif+JP:400,700,900&display=swap&subset=japanese" rel="stylesheet"></link>
        </Head>
    );
}

export default PageHead;