<script setup lang="ts">
  import { DateTime } from 'luxon'
  import { ref, computed } from 'vue'
  import type { ComputedRef, Ref } from 'vue'

  import { TimelinePost, today, thisWeek, thisMonth } from '../interfaces/posts'
  import TimelineItem from './TimelineItem.vue'

  const periods = ['Today', 'This week', 'This month'] as const

  type Period = typeof periods[number]

  const selectedPeriod: Ref<Period> = ref('Today')

  const selectPeriod = (period: Period): void => {
    selectedPeriod.value = period
  }

  const posts: ComputedRef<TimelinePost[]> = computed<TimelinePost[]>(() => {
    return [today, thisWeek, thisMonth]
    .map(post => {
      return {
        ...post,
        created: DateTime.fromISO(post.created)
      }
    })
    .filter(post => {
      if (selectedPeriod.value === 'Today') {
        return post.created >= DateTime.now().minus({ day: 1 })
      }

      if (selectedPeriod.value === 'This week') {
        return post.created >= DateTime.now().minus({ week: 1})
      }

      return post
    })
  }) 
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="(period, index) in periods"
        :key="index"
        href="javascript:void(0)"
        :class="{ 'is-active': period === selectedPeriod}"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <TimelineItem
      v-for="post of posts"
      :key="post.id"
      :post="post"
    />
  </nav>
</template>

<style></style>