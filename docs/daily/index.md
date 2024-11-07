---
title: 일상의 포스트
next: 
 text: 개발
 link: /dev
---

<script setup>
import { data as posts } from './daily.data.ts'
import {computed} from 'vue';

const postList = computed(()=>{
    return posts
        .filter(post=>post.url !== '/daily/')
        .sort((a, b)=> new Date(b.frontmatter.createAt).getTime() - new Date(a.frontmatter.createAt).getTime())
})
</script>

# 일상의 포스트

<ul>
  <li v-for="post of postList">
    <section>
      <h2>
        <a :href="post.url">{{post.frontmatter.title}}</a>
      </h2>
      <label>
        작성일 :
        <time :datetime="post.frontmatter.createAt">
          {{post.frontmatter.createAt}}
        </time>
      </label>
      <p>
        {{post.frontmatter.description}}
      </p>
    </section>
  </li>
</ul>
