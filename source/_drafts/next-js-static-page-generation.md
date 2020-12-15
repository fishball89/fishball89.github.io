---
title: next-js-static-page-generation
date: 2020-10-25 17:37:44
tags:
categories:
---


使用react-markdown 配搭next.js 搭建static page blog

為了節省金錢及效能，一直在用hexo配搭markdown，寫網誌這類不常改動的東西。直接把產生出來的static HTML放在免費的 hosting 如 github 或firebase，十分方便。自從next js支援static page generation，一直很想將網誌搬遷自next js 用react來寫，然後順便把網站轉成Google AMP。


1. Create next-app
2. install react-markdown
3. next webpack 配置loader ,gray-matter, load md files
4. build url by front matter

使用static page寫網頁不是什麼新事情，

自從 Next.js