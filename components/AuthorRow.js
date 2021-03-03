import styled from 'styled-components'
import { padding } from 'polished'

import { respondTo } from 'styles/mixins/respond-to'

import Image from 'components/Common/Image'

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    display: block;
    height: 100%;
    width: 3px;    
    ${props => `background-color: ${props.theme.colors.tangerine};`}
    position: absolute;
    top: 0;    
  }    
`

const StyledImgWrapper = styled(Image)`
  display: block;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 18px;
  flex: 1;
  ${props => `border: 2px solid ${props.theme.colors.cyan};`}
  img {
    width: 100%;
    height: auto;
  }
`

const StyledMetaRow = styled.div`
  font-size: 14px;

  flex: 6;
  ${props => `color: ${props.theme.colors.cyan};`}
  ${padding(0, 15)}

  ${respondTo.sm`
    flex: 10;
  `}  
`

const StyledName = styled.div`
  font-size: 19px;
  line-height: 21px;
  margin-bottom: 3px;

  ${respondTo.sm`
    flex: 10;
  `}  
`

function AuthorRow ({ className }) {
  return (
    <StyledRow className={className}>
      <StyledImgWrapper width="80" height="80" src="/images/profile_ac.png" />
      <StyledMetaRow>
        <StyledName>KW</StyledName>
        <div>80後IT人，揼code多過寫字。</div>
      </StyledMetaRow>
    </StyledRow>
  )
}

export default AuthorRow
