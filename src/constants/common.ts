export type Requrement = 'draft' | 'approved' | 'paid' | 'settle'
export interface WorkflowStep {
  name: string
  key: string
  id: number
  requirement?: Requrement[]
}

export const defaultWorkflow: WorkflowStep[] = [
  {
    name: 'Invoice',
    key: 'invoice',
    requirement: ['draft', 'approved'],
    id: 0,
  },
  {
    name: 'e-Faktur',
    key: 'e-faktur',
    requirement: ['draft', 'approved'],
    id: 1,
  },
  {
    name: 'e-Bukat',
    key: 'e-bukat',
    id: 2,
  },
  {
    name: 'Payment',
    key: 'payment',
    requirement: ['paid', 'settle'],
    id: 3,
  },
  {
    name: 'e-Sign',
    key: 'e-sign',
    id: 4,
  },
  {
    name: 'e-Materai',
    key: 'e-materai',
    id: 5,
  },
]
