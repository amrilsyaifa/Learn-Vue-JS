export interface WorkflowStep {
  name: string
  id: number
}

export const defaultWorkflow: WorkflowStep[] = [
  {
    name: 'Invoice',
    id: 0,
  },
  {
    name: 'e-Faktur',
    id: 1,
  },
  {
    name: 'e-Bukat',
    id: 2,
  },
  {
    name: 'Payment',
    id: 3,
  },
  {
    name: 'e-Sign',
    id: 4,
  },
  {
    name: 'e-Materai',
    id: 5,
  },
]
