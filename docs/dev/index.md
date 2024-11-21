---
title: 개발 포스팅
next: 
 text: 일상
 link: /daily
---
<script setup>
import { data as posts } from './dev.data.ts'
import Card from '../components/Card.vue'
import {computed} from 'vue';

const postList = computed(()=>{
    return posts
        .filter(post=>post.url !== '/dev/')
        .sort((a, b)=> new Date(b.frontmatter.createAt).getTime() - new Date(a.frontmatter.createAt).getTime())
})
</script>
<style scoped>
  .no-dot {
    list-style: none;
  }
</style>

# 개발 모음집

<ul class="no-dot">
  <Card 
    v-for="post of postList" 
      :title="post.frontmatter.title" 
      :url="post.url"
      :description="post.frontmatter.description"
      :createAt="post.frontmatter.createAt" 
      :updateAt="post.frontmatter.updateAt" 
      :tag="post.frontmatter.tag"
  />
</ul>
