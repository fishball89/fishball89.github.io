---
title: 使用react-markdown 配搭next.js 搭建static page blog
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

開啟一個 `pages/post/[slug].js`

因為我們用的是next.js的static build，所以我們需要加入`getStaticPaths` 去告訴next.js有那些HTML path需要在build time 打包出來


```js
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
```


1. Create next-app
2. install react-markdown
3. next webpack 配置loader ,gray-matter, load md files
4. build url by front matter
5. Create amp
6. export to github

使用static page寫網頁不是什麼新事情，

自從 Next.js