<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    validator: (value: string) => ['primary', 'secondary'].includes(value),
    default: 'primary',
  },
  onClick: {
    type: Function as PropType<(payload: MouseEvent) => void>,
    required: true,
  },
})
const primaryClass = 'btn-primary'
const secondaryClass = 'btn-secondary'
const className = props.variant === 'primary' ? primaryClass : secondaryClass
</script>

<template>
  <button :class="className" @click="props.onClick">{{ props.title }}</button>
</template>
