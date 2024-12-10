import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ItemWorkflow from './ItemWorkflow.vue'

describe('ItemWorkflow.vue', () => {
  it('renders the Item Workflow correctly', () => {
    const title = 'Its title'
    const wrapper = mount(ItemWorkflow, {
      props: {
        title: title,
      },
    })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe(title)
  })
})
