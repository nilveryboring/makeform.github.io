const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  shiki: {
    theme: 'github-dark', // Or another theme you prefer
    langs: ['javascript', 'typescript', 'react', 'nextjs', 'vue'] // Add Vue explicitly
  }
})

module.exports = withNextra({
  basePath: '/help',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'makeform.ai',
      },
    ],
  },
})
