import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/logo.ico"/>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/icon-152x152.png' />   
        <link rel='apple-touch-icon' sizes='192x192' href='/icons/icon-192x192.png' />  
        <link rel='apple-touch-icon' sizes='384x384' href='/icons/icon-384x384.png' />
        <link rel='mask-icon' href='logo.svg' color='#979797' />
        <meta name='theme-color' content='#979797'/>
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#979797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}