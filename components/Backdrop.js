import get from 'lodash/get'

import styled from 'styled-components'
import { respondTo } from 'styles/mixins/respond-to'

const StyledHeading = styled.h1`
  && {
    font-size: 24px;
    line-height: 38px;
    ${respondTo.sm`
      font-size: 36px;
      line-height: 48px;
    `}     
  }
`

const StyledHeadline = styled.div`
  position: absolute;
  text-align: center;
  padding: 0 15px;

  width: 90%;
  
  ${respondTo.sm`
    width: 70%;
  `} 

  ${props => `color: ${props.theme.colors.white};`}
`

const StyledBackdrop = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  
  background-image: url('https://images.pexels.com/photos/1796731/pexels-photo-1796731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  &&& {
    padding: 0;
  }
`

const StyledPlaceholder = styled.div`

  padding-top: 127%;

  ${respondTo.sm`
    padding-top: 32%;
  `}  

  width: 100%;
  ${props => `background-color: ${props.theme.colors.black60};`}
`

function Backdrop ({ pageProps }) {
  const { data = {} } = pageProps

  return (
    <StyledBackdrop className="container-fluid">
      <StyledHeadline>
        <StyledHeading>{ data.title }</StyledHeading>
        <time>{ data.date }</time>
        <div>{ get(data, 'categories', []).join(' / ') }</div>
      </StyledHeadline>
      <StyledPlaceholder />
    </StyledBackdrop>
  )
}

export default Backdrop
