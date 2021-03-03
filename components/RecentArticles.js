import map from 'lodash/map'
import get from 'lodash/get'

import styled from 'styled-components'

const StyledHeader = styled.h3`
  && {
    margin: 40px 0 18px;
    color: #aaa;
  }
`

const StyledList = styled.ul`
  padding-left: 28px;
  padding-right: 28px;
  color: #aaa;

`

const StyledListItem = styled.li`
  border-radius: 5px;
  margin-bottom: 10px;
`

const StyledLink = styled.a`
  && {
    color: #aaa;
  }
`

const urlFormatter = (slug) => slug ? `/post/${slug}` : '/'

const Output = ({ data }) => (<StyledList>{map(data, item => <StyledListItem><StyledLink href={urlFormatter(get(item, 'data.slug'))}>{ get(item, 'data.title', 'No Title') }</StyledLink></StyledListItem>)}</StyledList>)

function RecentArticles ({ className, data = [] }) {
  return (
    <div className={className}>
      <StyledHeader>最近的文章: </StyledHeader>
      <Output data={data} />
    </div>
  )
}

export default RecentArticles
