import '../styles.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={'G-5QNPN82FR3'} />
    </>
  )
}
