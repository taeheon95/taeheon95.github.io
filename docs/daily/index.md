---
title: 일상의 포스트
next: 
 text: 개발
 link: /dev
---

<script setup>
import { data as posts } from './daily.data.ts'
import Card from '../components/Card.vue'
import {computed} from 'vue';

const postList = computed(()=>{
    return posts
        .filter(post=>post.url !== '/daily/')
        .sort((a, b)=> new Date(b.frontmatter.createAt).getTime() - new Date(a.frontmatter.createAt).getTime())
})
</script>
<style scoped>
  .no-dot {
    list-style-type:none;
    list-style: none;
  }
</style>

# 일상의 포스트

<ul class="no-dot">
  <Card 
    v-for="post of postList" 
      :title="post.frontmatter.title" 
      :url="post.url"
      :description="post.frontmatter.description"
      :createAt="post.frontmatter.createAt" 
      :updateAt="post.frontmatter.updateAt" 
  />
</ul>
