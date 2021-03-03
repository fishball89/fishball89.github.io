import Head from 'next/head'

import styled from 'styled-components'
import 'styles/globals.css'
import bootstrapStyle from 'styles/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Layout from 'components/Layout'

library.add(fab, fas)

const StyledLayout = styled(Layout)`
  ${bootstrapStyle}
  p, ul, ol {
    font-size: 15px;
    margin-bottom: 20px;
  }
`

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>非同步日常 | Async Daily</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/icon@2x.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/icon@3x.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon/icon@4x.png" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <StyledLayout pageProps={pageProps}>
        <Component {...pageProps} />
      </StyledLayout>
    </>
  )
}

export default App
