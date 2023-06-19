import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

//deploy https://component-inmbts.vercel.app/
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}