import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutPage from '../AboutView.vue'

describe('AboutPage.vue', () => {
  it('renders the page correctly', () => {
    const wrapper = mount(AboutPage)

    // Check if the h1 element exists with correct text
    expect(wrapper.find('h1').text()).toBe('This is an about page')
  })
})
