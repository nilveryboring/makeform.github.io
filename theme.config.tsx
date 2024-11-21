import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useConfig } from 'nextra-theme-docs'

const themeConfig = {
  project: {
    link: 'https://github.com/nilveryboring/makeform.github.io',
  },
  docsRepositoryBase:
    'https://github.com/nilveryboring/makeform.github.io/blob/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Makeform',
    }
  },
  logo: () => {
    return (
      <>
        <Image
          src="https://makeform.ai/icon.png"
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
    const ogTitle = title ? `${title} – Makeform` : 'Makeform - Form Builder'
    const ogDescription = frontMatter.description || 'Build forms with AI'

    return (
      <>
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@makeformAI" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
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
