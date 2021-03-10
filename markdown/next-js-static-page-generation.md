---
title: 使用markdown 配搭next.js 搭建static page blog
date: '2020-10-25'
tags:
categories:
  - Coding
slug: next-js-markdown-page-generation
---

為了節省金錢及效能，一直在用hexo配搭markdown，寫網誌這類不常改動的東西。直接把產生出來的static HTML放在免費的 hosting 如 github 或firebase，十分方便。自從next js支援static page generation，一直很想將網誌搬遷自next.js 用react來寫，然後順便把網站轉成Google AMP。

首先開始一個[next.js](https://nextjs.org/docs/getting-started)的project

```
npx create-next-app
# or
yarn create next-app
```

next.js 會自動產生一個擁有基本配置的project，執行`yarn dev`就會運行。

由於我之前是用hexo來寫markdown，舊文章的front matter設定了一些URL slug。next用的是file-based routing，我想把文章的URL從 `/[url-slug]` 改成 `/post/[url-slug]`。

首先在page folder 開啟一個 `pages/post/[slug].js` 的js file。這次用的是next.js的static build，需要在`[slug].js`中加入`getStaticPaths` 去告訴next.js有那些URL需要在build time產生出來。

```js
// [slug].js

import matter from 'gray-matter'
import glob from 'glob'

const readMarkdownFiles = () => new Promise((resolve) => {
  glob("markdown/*", {}, async function (er, files) {
    const alls = await Promise.all(files.map(async path => await import(`../../${path}`)))
    const defaults = map(alls, 'default')
    const datas = map(defaults, (item) => {
      const { content, data } = matter(item)
      return {
        url: get(data, 'slug'),
        data,
        content,
      }
    })
    resolve(datas)
  })
})

export async function getStaticPaths() {
  const datas = await readMarkdownFiles()
  const paths = map(datas, data => ({
    params: {
      slug: get(data, 'url', ''),
    },
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const currentNodeSlug = get(params, 'slug', '')
  const data = await readMarkdownFiles()
  const { data: currentNodeData, content } = find(data, ['url', currentNodeSlug]) || {}
  // Pass post data to the page via props
  return {
    props: {
      data: currentNodeData,
      content,
    },
  }
}
```


`getStaticPaths` 負責處理 build path；而 `getStaticProps` 就處理data。在這裡我只簡單用了slug pattern 來對應markdown 的內容作處理。

在這之後還要作一點修改。因為next 的webpack 不會處理markdown 的import，所以要在project root產生一個 `next.config.js`，去配置next 的webpack setting。`gray-matter` 之後會幫助分拆mardown，因此這邊我只用了`raw-loader`。 


```js
// next.config.js

const path = require('path')
module.exports = {
  webpack: function (config) {
    config.resolve.modules.push(path.resolve('./'))

    config.module.rules.push({
      test: /(\.md|\.css)$/,
      use: [
        'raw-loader',
      ]
    })
    return config
  }
}
```


終於可以著手寫react component，next js 支援AMP page generation。但markup也要符合AMP standard，完成之後然後把成品放在Google 的 AMP validator測試便可。


```js
// [slug].js

export const config = { amp: true }

export default function Post ({ data = {}, content }) {
  return (
    <div>
      My Post Page
    </div>
  )
}
```


Frontend 的部分開發完之後便差不多，最後執行 `yarn export` 便會得到一堆static page output，把它直接放在hosting就可以了。

由於我用的是github page，我想將blog page自動deploy。把之前用來build hexo 的travis ci 的 config yaml 改一改，便大功告成！


```yaml
sudo: false
language: node_js
install:
  - yarn
node_js:
  - 10 # use nodejs v10 LTS
cache: npm
branches:
  only:
    - master # build master branch only
    - github-pages
script:
  - npm run export # generate static files
deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_TOKEN
  keep-history: true
  target_branch: master
  on:
    branch: github-pages
  local-dir: out
```
