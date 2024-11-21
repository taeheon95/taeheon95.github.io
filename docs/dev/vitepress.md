---
title: vitepress
tag: frontend, vue
description: 나에게 딱 맞는 정적 사이트 제네레이터
createAt: 2024-11-07
updateAt: 2024-11-07
---

# vitepress

vitepress는 마크다운으로 컨텐츠를 작성하고 쉽게 배포할 수 있도록 [vue](https://vuejs.org/), [vite](https://vite.dev/) 개발자인 [evan you](https://evanyou.me/)가 vite를 기반으로 만든 정적 사이트 생성기 이다.

## 알게된 계기

개발을 하고 회사를 다니며 블로그에 대한 고민을 많이하게 됐었다. 내가 배우게 된 지식이나 내 소감들을 정리를 하고 싶은데 내 입맛에 맞는 블로그를 찾는게 어려웠다. 많은 블로그 사이트들은 많은 테마와 깔끔함, 기능들로 어필이 되었지만, 자유도적인 측면에서 만족감이 부족했다. 또한 내가 자유롭게 표현할 수 있는 개발 블로그(jekyll, hugo, gatsby... 등등)은 반대로 너무 많은 것을 복잡하게 할 수 있었다. 그리고 표현력을 위해서 내가 사용하지 않았던 도구들(ruby, go, graphql)을 사용하고 배우는게 부담으로 다가왔다.

그래서 다른 정적 사이트 생성기 찾아보다가 vite를 좋게 사용했던 기억이 있어서 vitepress를 찾아보게 되었고 vitepress의 마크다운 기반의 확장된 표현력과 vue를 사용하여 블로그의 컨텐츠를 만들 수 있다는 점이 마음에 들어서 사용하여 블로그를 작성하게 되었다.

## 특징

vitepress는 vite 와 vue 를 기반으로 마크다운과 vue 컴포넌트를 만들어서 블로그를 만들 수 있다. vite를 사용하여 hmr(hot module reload)를 지원하며 여러가지 api를 활용하여 문서를 좀 더 잘 쓰는 것이 가능하다. 예를 들어 아래와 같이 마크 다운의 frontmatter(metadata)를 yaml을 작성했다면 문서 내부 또는 다른 파일에서 접근하는 것이 가능하다.

```yaml
title: test
next: 
  text: 'c++'
  link: '/dev/cpp'
prev: 
  text: 'java'
  link: '/dev/java'
author: taeheon
```

이렇게 작성된 파일의 frontmatter를 자바스크립트 코드로 읽어서

```vue:line-numbers
<script setup>
import {createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', /* options */)
</script>
```

markdown 파일에서 js code 로 사용하는것이 가능하다.

```vue:line-numbers
<script setup>
// content.md
import { data as posts } from './posts.data.js'
</script>

# All Blog Posts
<template>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span>by {{ post.frontmatter.author }}</span>
    </li>
  </ul>
</template>
```

위와 같이 마크 다운에 뷰 컴포넌트를 작성하는것이 가능하고 vue 컴포넌트가 다른 페이지의 데이터를 가져다 사용하는 것이 가능하다. 
이걸 익히고 사용하는 과정이 굉장히 가볍게 심플하다.

또한 여러가지 마크다운 확장 기능 들을 지원하여 키보드만을 사용하여 자유로우면서도 체계적인 문서작성이 가능하다.

::: info
[vitepress 마크다운 확장 기능](https://vitepress.dev/ko/guide/markdown)
:::