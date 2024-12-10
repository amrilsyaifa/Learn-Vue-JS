<script setup lang="ts">
import ItemListWorkflow from '../components/workflow/ItemListWorkflow.vue'
import { defaultWorkflow, type WorkflowStep } from '../constants/common'
import BrdButton from '../components/BrdButton.vue'
import { ref } from 'vue'

const workflow = ref<WorkflowStep[][]>([defaultWorkflow])

const onClick = () => {
  workflow.value = [...workflow.value, defaultWorkflow]
}

const onChange = (value: WorkflowStep[], idx: number) => {
  workflow.value[idx] = value
}
</script>

<template>
  <main>
    <h1 class="font-bold mt-8">Step One: Define overall workflows</h1>
    <div class="mt-16 flex flex-col justify-between md:flex-row">
      <h3>Account Receivable Workflows</h3>
      <div class="flex flex-row gap-2">
        <BrdButton :title="`+ Add Workflow`" :onClick="onClick" />
        <BrdButton :title="`Next`" :onClick="onClick" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24">
      <ItemListWorkflow
        v-for="(group, groupIndex) in workflow"
        :key="groupIndex"
        :workflow="group"
        @onChange="(e) => onChange(e, groupIndex)"
      />
    </div>
  </main>
</template>
