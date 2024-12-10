<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <main data-testid="item-workflow">
    <h1
      class="block w-full md:min-w-[150px] p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
    >
      {{ props.title }}
    </h1>
  </main>
</template>
