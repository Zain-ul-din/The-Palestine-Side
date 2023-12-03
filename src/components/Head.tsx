import NextHead from "next/head";

export interface HeadProps 
{
    title?: string;
    description?: string;
    socialCardLink?: string;
}

const defaultProps: HeadProps = {
    title: 'The Palestine Side',
    description: 'The Palestine Side: Standing in Solidarity with Palestine. Discover the untold stories of Gaza and the West Bank, shedding light on human rights challenges and the impact of ongoing Israeli aggression. Join us in advocating for truth, justice, and a free Palestine. #SolidarityWithPalestine #FreePalestine',
    socialCardLink: 'https://github.com/Zain-ul-din/support-palestine-banner/assets/78583049/9d3ef1bf-a641-43fd-97b4-2a4af4bdfd50'
}

export default function Head (
    { title, description, socialCardLink }: HeadProps
) {
    return <NextHead>
      <title>{title || defaultProps.title}</title>

      <meta name="description" content={description || defaultProps.description} />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width" />
      <meta name="language" content="English" />
      <meta name="keywords" content="Palestine, Palestine Side, The Palestine Side" />
      <link rel="icon" href="/favicon.ico" />

      {/* PWA 
          source:  https://progressier.com/pwa-icons-and-ios-splash-screen-generator
      */}

      <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"  />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/iPhone_11__iPhone_XR_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/12.9__iPad_Pro_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/10.9__iPad_Air_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/10.5__iPad_Air_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/10.2__iPad_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/splash_screens/8.3__iPad_Mini_landscape.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/iPhone_11__iPhone_XR_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/12.9__iPad_Pro_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/10.9__iPad_Air_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/10.5__iPad_Air_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/10.2__iPad_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/splash_screens/8.3__iPad_Mini_portrait.png" />

      
      <link rel="manifest" href="/manifest.json" />
      
      {/* social */}
      
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://www.palestineside.site/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultProps.title} />
      <meta property="og:description" content={description || defaultProps.description} />
      <meta
        property="og:image"
        content={socialCardLink || defaultProps.socialCardLink}
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="palestineside.site" />
      <meta property="twitter:url" content="https://www.palestineside.site/" />
      <meta name="twitter:title" content={title || defaultProps.title} />
      <meta name="twitter:description" content={description || defaultProps.description} />
      <meta
        name="twitter:image"
        content={socialCardLink || defaultProps.socialCardLink}
      />

      {/* Meta Tags Generated via https://www.opengraph.xyz */}

    </NextHead>
}

// figma link
// https://www.figma.com/file/I1vgigSyjfcQhATEdUh8wo/Untitled?type=design&node-id=111-2&mode=design&t=KZs0ZgNTrBxwUeWa-0
