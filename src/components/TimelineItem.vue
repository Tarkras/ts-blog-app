<script setup lang="ts">
  import { TimelinePost } from '../interfaces/posts'

  defineProps<{
    post: TimelinePost
  }>()
</script>

<template>
  <a href="javascript:void(0)"
    class="panel-block is-flex is-flex-direction-column is-align-items-flex-start"
  >
    <a>{{ post.title }}</a>
    <div>{{ post.created.toFormat('d MMM') }}</div>
  </a>
</template>