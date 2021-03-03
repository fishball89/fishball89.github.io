import styled from 'styled-components'

import Image from 'components/Common/Image'

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 1;
`

const StyledBrandRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`

const StyledIcon = styled(Image)`
  width: 32px;
  height: 32px;
  margin-right: 6px;
`

const StyledHeaderText = styled.a`
  && {
    ${props => `color: ${props.theme.colors.white};`}
  }
  margin-top: 5px
  font-size: 20px;
`

function Header ({ Component, pageProps }) {
  return (
    <StyledHeader className="container-fluid">
      <div className="row">

        <StyledBrandRow>
          <StyledIcon width="32" height="32" src="/icon/icon.png" />
          <StyledHeaderText>
            非同步日常 | Async Daily
          </StyledHeaderText>
        </StyledBrandRow>

      </div>
    </StyledHeader>
  )
}

export default Header
