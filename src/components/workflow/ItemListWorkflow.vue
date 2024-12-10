<script setup lang="ts">
import type { WorkflowStep } from '@/constants/common'
import ItemWorkflow from './ItemWorkflow.vue'
import { ref, type PropType } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

// Props
const props = defineProps({
  workflow: {
    type: Array as PropType<WorkflowStep[]>,
    required: true,
  },
})

const list = ref(props.workflow)

// Emit definition
const emit = defineEmits<{
  (e: 'onChange', updatedWorkflow: WorkflowStep[]): void
}>()

function onEnd() {
  const updatedIdx = list.value.map((item, index) => ({
    ...item,
    id: index, // Update idx based on new order
  }))
  list.value = updatedIdx
  emit('onChange', updatedIdx)
}
</script>

<template>
  <div class="flex flex-col gap-y-2 w-full" id="itemlist-workflow">
    <VueDraggable v-model="list" class="flex flex-col gap-y-2" @end="onEnd">
      <ItemWorkflow v-for="item in list" :key="item.id" :title="item.name" />
    </VueDraggable>
  </div>
</template>
