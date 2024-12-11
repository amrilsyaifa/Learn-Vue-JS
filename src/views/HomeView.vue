<script setup lang="ts">
import ItemListWorkflow from '../components/workflow/ItemListWorkflow.vue'
import { defaultWorkflow, type WorkflowStep } from '../constants/common'
import BrdButton from '../components/BrdButton.vue'
import { ref } from 'vue'
import { useWorkflowStore } from '../stores/workflow'
import router from '@/router'

const store = useWorkflowStore()
const workflow = ref<WorkflowStep[][]>([])

const onClick = () => {
  workflow.value = [...workflow.value, defaultWorkflow]
}

const onChange = (value: WorkflowStep[], idx: number) => {
  workflow.value[idx] = value
}

const onNext = () => {
  store.onSetWorkFlow(workflow.value)
  workflow.value = []
  router.push('/workflow/0')
}
</script>

<template>
  <main>
    <h1 class="font-bold mt-8">Step One: Define overall workflows</h1>
    <div class="mt-16 flex flex-col justify-between md:flex-row">
      <h3>Account Receivable Workflows</h3>
      <BrdButton :title="`+ Add Workflow`" :onClick="onClick" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24">
      <ItemListWorkflow
        v-for="(group, groupIndex) in workflow"
        :key="groupIndex"
        :workflow="group"
        @onChange="(e) => onChange(e, groupIndex)"
      />
    </div>

    <div v-if="workflow.length > 0" class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <BrdButton :title="`Next`" :onClick="onNext" />
    </div>
  </main>
</template>
