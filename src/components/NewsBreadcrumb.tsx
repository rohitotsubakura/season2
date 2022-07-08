import React from "react";

import { css, jsx } from "@emotion/core";
import Color from "../styles/Color";
import Size from "../styles/Size";
import Typography from "../styles/Typography";
import Link from "next/link";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

const root = css`
    ${Typography.Body};
    color: ${Color.Primary};
    text-decoration: none;
    transition: all 300ms 1s ease;
    &:hover {
        text-decoration: underline;
    }
`;

const tagsStyle = css`
    ${Typography.Body};
    color: ${Color.Primary};
    text-decoration: none;
`;

const deepestStyle = css`
    ${Typography.Bold};
    color: ${Color.Primary};
`;

const breadcrumbStyle = css`
    display: flex;
    flex-direction: row;
    & > a, & > p {
        margin-right: ${Size(2)};
    }
    & > a:after, & > p:after {
        content: '>';
        margin-left: ${Size(2)};
    }
    & > p:last-child:after {
        content: '';
    }
    & > a:hover:after {
        text-decoration: none;
    }
    @media (max-width: 960px) {
        ${Typography.Caption};
    }
`;

type NewsBreadcrumbProps = {
    newsTitle?: string,
    tagName?: string,
};

type RoutingMappingTypes = {
    [key: string]: {
        title: string | undefined
    }
};

const NewsBreadcrumb: React.FC<WithRouterProps & NewsBreadcrumbProps > = (props) => {
    const routingMapping:RoutingMappingTypes = {
        '/' : { title: 'TOP'},
        '/news' : { title: 'お知らせ一覧'},
        '/news/[id]': {title: props.newsTitle},
        '/news/tags' : {title: 'タグ検索'},
        '/news/tags/[id]': {title: props.tagName}
    };

    const pathname = props.router.pathname.split('/').filter(element => element.length > 0);
    const asPath = props.router.asPath.split('/').filter(element => element.length > 0);
    const length = pathname.length;

    const links = [];
    let pathnameHierarchy = '/';
    let asPathHierarchy = '/';
    for (let i = 0; i < length; i += 1) {
        const target = routingMapping[pathnameHierarchy];
        links.push(
            target? (
                target == routingMapping['/news/tags']? (
                    <p css={tagsStyle}>{target.title}</p>
                ): (
                    <Link href={asPathHierarchy} key={asPathHierarchy}>
                        <a css={root}>{target.title}</a>
                    </Link>
                )
            ) : (
                <Link href={asPathHierarchy} key={asPathHierarchy}>
                    <a css={root}>{asPath[i]}</a>
                </Link>
            )
        );
        pathnameHierarchy += pathnameHierarchy.endsWith('/') ? pathname[i] : `/${pathname[i]}`;
        asPathHierarchy += asPathHierarchy.endsWith('/') ? asPath[i] : `/${asPath[i]}`;
    }

    const deepest = routingMapping[pathnameHierarchy];
    links.push(
        deepest ? (
            <p css={deepestStyle} key={asPathHierarchy}>
                {deepest.title}
            </p>
        ) : (
            <p css={deepestStyle} key={asPathHierarchy}>
                {asPathHierarchy}
            </p>
        )
    );

    return (
        <div css={breadcrumbStyle}>
            {
                links.map(link => (link))
            }    
        </div>
    );
}

export default withRouter(NewsBreadcrumb);