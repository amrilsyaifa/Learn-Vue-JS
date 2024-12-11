import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { WorkflowStep } from '../constants/common'

export const useWorkflowStore = defineStore('workflow', () => {
  const workflow = ref<WorkflowStep[][]>([])
  const activeWorkflow = ref<number>(0)

  const onSetWorkFlow = (val: WorkflowStep[][]) => {
    workflow.value = val
  }

  return { workflow, activeWorkflow, onSetWorkFlow }
})
