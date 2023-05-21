import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* latin-ext */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOmCnqEu92Fr1Mu7GxKOzY.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOmCnqEu92Fr1Mu4mxK.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          /* latin-ext */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOlCnqEu92Fr1MmEU9fBBc4.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          /* latin-ext */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOlCnqEu92Fr1MmWUlfBBc4.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          /* latin-ext */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOlCnqEu92Fr1MmYUtfChc4EsA.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(${
            asset("/fonts/KFOlCnqEu92Fr1MmYUtfBBc4.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          /* latin-ext */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufD5qW54A.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufN5qU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          /* latin-ext */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufD5qW54A.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufN5qU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          /* latin-ext */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufD5qW54A.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufN5qU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          /* latin-ext */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufD5qW54A.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          /* latin */
          @font-face {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(${
            asset("/fonts/BngMUXZYTXPIvIBgJJSb6ufN5qU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          `,
        }}
      />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/logo_vtex_day-150x150")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/logo_vtex_day.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/logo_vtex_day-150x150")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
    </Head>
  );
}

export default GlobalTags;
