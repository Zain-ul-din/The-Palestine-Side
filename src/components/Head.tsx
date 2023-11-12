import NextHead from "next/head";

export interface HeadProps 
{
    title?: string;
    description?: string;
}

const defaultProps: HeadProps = {
    title: 'The Palestine Side',
    description: 'The Palestine Side: Standing in Solidarity with Palestine. Discover the untold stories of Gaza and the West Bank, shedding light on human rights challenges and the impact of ongoing Israeli aggression. Join us in advocating for truth, justice, and a free Palestine. #SolidarityWithPalestine #FreePalestine'
}

export default function Head (
    { title, description }: HeadProps
) {
    return <NextHead>
        <title>{title || defaultProps.title}</title>
        <meta name="description" content={description || defaultProps.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* social */}
        
        {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://www.palestineside.site/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultProps.title} />
      <meta property="og:description" content={description || defaultProps.description} />
      <meta
        property="og:image"
        content="https://github.com/Zain-ul-din/support-palestine-banner/assets/78583049/9d3ef1bf-a641-43fd-97b4-2a4af4bdfd50"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="palestineside.site" />
      <meta property="twitter:url" content="https://www.palestineside.site/" />
      <meta name="twitter:title" content={title || defaultProps.title} />
      <meta name="twitter:description" content={description || defaultProps.description} />
      <meta
        name="twitter:image"
        content="https://github.com/Zain-ul-din/support-palestine-banner/assets/78583049/9d3ef1bf-a641-43fd-97b4-2a4af4bdfd50"
      />
    
      {/* Meta Tags Generated via https://www.opengraph.xyz */}
        
    </NextHead>
}
