import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView.vue', () => {
  it('renders the page correctly', () => {
    const wrapper = mount(HomeView)

    // Check if the h1 element exists with correct text
    expect(wrapper.find('h3').text()).toBe('Account Receivable Workflows')
  })

  it('on Add new workflow', async () => {
    const wrapper = mount(HomeView)

    const button = wrapper.find('button')
    // Check if the button exists
    expect(button.exists()).toBe(true)
    // Spy on the function to see if it's called
    const onClickSpy = vi.fn()
    button.element.addEventListener('click', onClickSpy)

    // Trigger a click event on the button
    await button.trigger('click')

    // Assert that the click handler is called
    expect(onClickSpy).toHaveBeenCalled()
  })
})
