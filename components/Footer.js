import styled from 'styled-components'
import { respondTo } from 'styles/mixins/respond-to'

import Image from 'components/Common/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFooter = styled.footer`
  ${props => `background-color: ${props.theme.colors.footer};`}   
  ${props => `color: ${props.theme.colors.white};`}   
  min-height: 300px;
  padding-top: 36px;
  ${respondTo.sm`
     padding-top: 25px;
  `}    
`

const StyledFooterRow = styled.div`
  display: flex;
  justify-content: space-between;  
  flex-direction: column;
  align-items: center;
  ${respondTo.sm`
     flex-direction: row;
  `}  


`

const StyledBrandRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${respondTo.sm`
     margin-bottom: 0;
  `}    
`

const StyledIcon = styled(Image)`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  margin-top: -8px;

  ${respondTo.sm`
      width: 56px;
      height: 56px;
  `}
`

const StyledText = styled.div` 
  font-size: 20px;  
`

const StyledSocialRow = styled.div`
  align-items: center;
  display: flex;
`

const StyledFaIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;   
  

  ${respondTo.sm`
      
      font-size: 24px
  width: 24px;
  height: 24px;   

  `}

  margin-left: 10px; 
  margin-right: 10px;
`

function Footer ({ Component, pageProps }) {
  return (
    <StyledFooter className="container-fluid">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">

          <StyledFooterRow>

            <StyledBrandRow>
              <StyledIcon width="56" height="56" src="/icon/icon.png" />
              <StyledText>非同步日常 | Async Daily</StyledText>
            </StyledBrandRow>

            <StyledSocialRow>
              <StyledFaIcon icon={['fab', 'linkedin']} />
              <StyledFaIcon icon="envelope" />
              <StyledFaIcon icon={['fab', 'github']} />
            </StyledSocialRow>

          </StyledFooterRow>

        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
