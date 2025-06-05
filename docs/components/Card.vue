<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createAt: {
    type: String,
    required: true
  },
  updateAt: {
    type: String,
    required: true
  },
  tag: {
    type: String,
  }
});

const { title, url, description, createAt, updateAt, tag = "" } = props;

const computeTime = (time) => {
  const timeObj = new Date(time);
  const year = `${timeObj.getFullYear()}`
  const month = `0${timeObj.getMonth() + 1}`.slice(-2, 3)
  const day = `0${timeObj.getDate()}`.slice(-2, 3)
  const hour = `0${timeObj.getHours() - 9}`.slice(-2, 3)
  const minute = `0${timeObj.getMinutes()}`.slice(-2, 3)
  const second = `0${timeObj.getSeconds()}`.slice(-2, 3)
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
const tagList = tag.split(',').map((tag) => tag.trim())
const createAtStr = computed(() => computeTime(createAt))
const updateAtStr = computed(() => computeTime(updateAt))

</script>

<style scoped>
.link {
  text-decoration: none black;
}

.tagList {
  list-style: none;
  display: flex;
}

.tagItem {
  background-color: #3451b2;
  border-radius: 20px;
  color: white;
  padding: 0px 5px;
  margin: 4px;
}
</style>

<template>
  <li>
    <a class="link" :href="url">
      <section>
        <h2>{{ title }}</h2>
        <ul class="tagList">
          <li class="tagItem" v-for="tagItem of tagList">{{ tagItem }}</li>
        </ul>
        작성일 : <time>{{ createAtStr }}</time>
        수정일 : <time>{{ updateAtStr }}</time>
        <p>
          {{ description }}
        </p>
      </section>
    </a>
  </li>
</template>