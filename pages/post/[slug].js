import map from 'lodash/map'
import get from 'lodash/get'
import find from 'lodash/find'
import orderBy from 'lodash/orderBy'
import floor from 'lodash/floor'
import take from 'lodash/take'
import compact from 'lodash/compact'

import styled from 'styled-components'
import { margin } from 'polished'

import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

import * as markdowns from '../../markdown'

import AuthorRow from 'components/AuthorRow'
import PostTags from 'components/Post/Tags'
import RecentArticles from 'components/RecentArticles'

export const config = { amp: true }

const StyledAuthorRow = styled(AuthorRow)`
  ${margin(32, 0)}
`

const StyledContentWrapper = styled.div`
  border-radius: 14px;
  margin-bottom: 60px;
`

const StyledContent = styled(ReactMarkdown)`
  ${margin(0, 0, 28)}
`

export default function Post ({ data = {}, content, recent = [] }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <StyledContentWrapper className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <StyledAuthorRow />
          <StyledContent>{ content }</StyledContent>
          <PostTags data={ get(data, 'tags', []) } />
          <RecentArticles data={recent} />
        </StyledContentWrapper>
      </div>
    </div>
  )
}

const readMarkdownFiles = () => new Promise((resolve) => {
  const datas = map(markdowns, (item) => {
    const { content, data } = matter(item)
    return {
      url: get(data, 'slug'),
      data,
      content,
    }
  })

  resolve(datas)
})

export async function getStaticPaths () {
  const datas = await readMarkdownFiles()
  const paths = map(datas, data => ({
    params: {
      slug: get(data, 'url', ''),
    },
  }))

  return {
    paths,
    fallback: false // See the "fallback" section below
  }
}

export async function getStaticProps ({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const currentNodeSlug = get(params, 'slug', '')
  const datas = await readMarkdownFiles()
  const { data: currentNodeData, content } = find(datas, ['url', currentNodeSlug]) || {}

  // slice the first three articles
  // filter the article itself
  const mappedPubDateArticles = compact(map(datas, (data) => {
    const date = get(data, 'data.date')
    const slug = get(data, 'data.slug')
    const pubDate = get(data, 'data.date') ? new Date(date) : new Date()
    if (currentNodeSlug && currentNodeSlug === slug) {
      return false
    }
    return {
      ...data,
      sortPubDate: floor(pubDate.getTime() / 1000),
    }
  }))

  // Pass post data to the page via props
  return {
    props: {
      data: currentNodeData,
      content,
      recent: take(orderBy(mappedPubDateArticles, ['sortPubDate'], ['desc']), 3),
    },
  }
}
