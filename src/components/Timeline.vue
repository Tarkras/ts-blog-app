<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const periods: Array<string> = ['Today', 'This week', 'This month']

  let selectedPeriod: Ref<string> = ref('Today')

  const selectPeriod = (period: string): void => {
    selectedPeriod.value = period
  }
</script>

<template>
  <nav class="is-primary panel">
    {{ selectedPeriod }}
    <span class="panel-tabs">
      <a
        v-for="(period, index) in periods"
        :key="index"
        href="javascript:void(0)"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<style></style>