import '../styles.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={'G-5QNPN82FR3'} />
      <Script
        defer
        data-domain="makeform.ai"
        src="https://plausible.nilni.com/js/script.outbound-links.js"
        strategy="afterInteractive"
      />
    </>
  )
}
