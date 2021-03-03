// basic usage
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Backdrop from 'components/Backdrop'

import Block from 'components/Common/Block'

const StyledLayout = styled(Block)`
  ${props => `font-family: ${props.theme.fonts.quicksand};`}
  ${props => `color: ${props.theme.colors.text};`}
  ${props => `background-color: ${props.theme.colors.background};`}
  word-wrap: break-word;
  a {
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
`

function Layout ({ className, children, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledLayout
          className={className}
        >
          <Header pageProps={pageProps} />
          <Backdrop pageProps={pageProps} />
          {children}
          <Footer pageProps={pageProps} />
        </StyledLayout>
      </ThemeProvider>
    </>
  )
}

export default Layout
