import '../styles.css'
import { GoogleAnalytics } from '@next/third-parties/google'
// make it safer
const gaId = process.env.GA_ID || ''

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={gaId} />
    </>
  )
}
