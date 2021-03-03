import map from 'lodash/map'

import styled from 'styled-components'

const StyledList = styled.ul`
  padding: 0;
  ${props => `color: ${props.theme.colors.tags};`}   
  list-style: none;
`

const StyledListItem = styled.li`
  display: inline-block;
  border-radius: 5px;
  margin-right: 10px;
`

const Output = ({ data }) => (<StyledList>{map(data, item => <StyledListItem>{ `#${item}` }</StyledListItem>)}</StyledList>)

function PostTags ({ className, data = [] }) {
  return (
    <div className={className}>
      <Output data={data} />
    </div>
  )
}

export default PostTags
