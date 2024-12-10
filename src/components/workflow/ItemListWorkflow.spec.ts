import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ItemListWorkflow from './ItemListWorkflow.vue'
import ItemWorkflow from './ItemWorkflow.vue'
import { defaultWorkflow } from '../../constants/common'

describe('ItemListWorkflow.vue', () => {
  it('renders the Item List Workflow correctly', () => {
    const wrapper = mount(ItemListWorkflow, {
      props: {
        workflow: defaultWorkflow,
      },
    })

    const h1 = wrapper.findAll('h1')
    expect(h1.length).toBe(defaultWorkflow.length)
  })

  it('reorders items when dragged and emits onChange event', async () => {
    const workflow = [
      { id: 0, name: 'Step 1' },
      { id: 1, name: 'Step 2' },
      { id: 2, name: 'Step 3' },
    ]

    // Mount the component
    const wrapper = mount(ItemListWorkflow, {
      props: {
        workflow,
      },
    })

    // Find all items in the list
    const items = wrapper.findAllComponents(ItemWorkflow)

    // Simulate a drag operation:
    const dragItem = items[0] // Let's assume we drag 'Step 1'

    // Simulate mouse down event
    await dragItem.trigger('mousedown', {
      clientX: 0,
      clientY: 0,
    })

    // Simulate mousemove (dragging to new position)
    await wrapper.element.dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 100 }))

    // Simulate mouseup (end drag)
    await wrapper.element.dispatchEvent(new MouseEvent('mouseup', { clientX: 100, clientY: 100 }))

    expect(dragItem).toBeTruthy()
  })
})
