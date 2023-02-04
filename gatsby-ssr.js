import React from "react"
import { Partytown } from '@builder.io/partytown/react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <Partytown key="partytown" debug={true} forward={['window.dataLayer.push']} />,
        <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-B6SXD335KF" key="blocking-script"></script>,
        <script key="executed-code" dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-B6SXD335KF');
        `}}></script>
    ])
}