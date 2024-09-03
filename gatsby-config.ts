import 'dotenv/config';

import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `doggy-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-custom-api',
      options: {
          url: 'https://api.api-ninjas.com/v1/dogs?min_height=1',
          headers: {
            'X-Api-Key': process.env.API_KEY,
          },
          name: 'dogs',
      }
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            name: 'Cormorant',
            file: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;700&display=swap',
          },
        ],
      },
    },
  ],
  trailingSlash: 'never',
};

export default config;
