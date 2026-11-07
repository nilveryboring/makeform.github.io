import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import IconLogo from './public/icon.svg'

const getCanonicalUrl = (pathname: string) =>
  `https://www.makeform.ai/help${pathname === '/' ? '' : pathname}`

const themeConfig = {
  project: {
    link: 'https://github.com/nilveryboring/makeform.github.io',
  },
  docsRepositoryBase:
    'https://github.com/nilveryboring/makeform.github.io/blob/main',
  useNextSeoProps() {
    const pathname = usePathname()
    return {
      titleTemplate: '%s – Makeform Help Center',
      canonical: getCanonicalUrl(pathname),
    }
  },
  logo: () => {
    return (
      <>
        <Image
          src={IconLogo}
          alt="Makeform Logo"
          className="inline-block h-8 w-8 hover:rotate-[720deg] transition-all duration-500 ease-in-out"
          width={32}
          height={32}
        />
        <span className="ml-2 font-extrabold hidden md:inline select-none">
          Help Center
        </span>
      </>
    )
  },
  head: () => {
    const { frontMatter, title } = useConfig()
    const pathname = usePathname()
    const ogTitle = title
      ? `${title} – Makeform Help Center`
      : 'Makeform Help Center'
    const ogDescription =
      frontMatter.description ||
      'Official documentation and guides for Makeform - The AI-powered form builder'
    const ogImage =
      frontMatter.image || 'https://makeform.ai/opengraph-image.png'

    return (
      <>
        <title>{ogTitle}</title>
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@makeformAI" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta
          property="og:url"
          content={getCanonicalUrl(pathname)}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <link rel="canonical" href={getCanonicalUrl(pathname)} />
      </>
    )
  },
  footer: {
    text: () => {
      return (
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Makeform AI</span>
        </div>
      )
    },
  },
  gitTimestamp({ timestamp }) {
    return (
      <>
        Last updated on{' '}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </>
    )
  },
  primaryHue: {
    dark: 204,
    light: 204,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  defaultMenuCollapseLevel: 1,
  navigation: {
    prev: true,
    next: true,
  },
  banner: {
    key: '1.0',
    dismissible: true,
    text: (
      <a href="https://makeform.ai" target="_blank">
        🎉 Makeform is now available! Read more →
      </a>
    ),
  },
}

export default themeConfig
