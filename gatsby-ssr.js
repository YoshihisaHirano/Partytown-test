import React from "react";
import { Partytown } from "@builder.io/partytown/react";

export const onRenderBody = ({ setHeadComponents }) => {
  const resolveUrl = (url, location, type) => {
    const baseUrl = new URL(
      "https://main--flourishing-brigadeiros-99374f.netlify.app/"
    );
    if (type === "script") {
      const proxyUrl = new URL(baseUrl);
    //   console.log(proxyUrl);
      proxyUrl.searchParams.append('url', '/reactful/'.concat(url.href));
      return proxyUrl;
    }
    return url;
  };
  setHeadComponents([
    <Partytown
      key="partytown"
      resolveUrl={resolveUrl}
      forward={["window.dataLayer.push"]}
    />,
    // <script
    //   type="text/partytown"
    //   src="https://www.googletagmanager.com/gtag/js?id=G-B6SXD335KF"
    //   key="blocking-script"
    // ></script>,
    // <script
    //   key="executed-code"
    //   dangerouslySetInnerHTML={{
    //     __html: `window.dataLayer = window.dataLayer || [];
    //         function gtag(){window.dataLayer.push(arguments)}
    //         gtag('js', new Date());
    //         gtag('config', 'G-B6SXD335KF');
    //     `,
    //   }}
    // ></script>,
    <script type="text/partytown" key="hopefully-cors" src="https://visitor.reactful.com/dist/main.rtfl.js"></script>,
    // <script type="text/partytown" key="hopefully-cors-2" src="https://www.google-analytics.com/dist/analytics.js"></script>
  ]);
};
