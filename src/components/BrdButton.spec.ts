import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import BrdButton from './BrdButton.vue'

describe('BrdButton.vue', () => {
  it('renders the button with the correct title', () => {
    const title = 'Click Me'
    const wrapper = mount(BrdButton, {
      props: {
        title: title,
        variant: 'primary',
        onClick: vi.fn(),
      },
    })

    const button = wrapper.find('button')
    expect(button.text()).toBe(title)
  })

  it('applies the correct class based on the variant prop', () => {
    const wrapperPrimary = mount(BrdButton, {
      props: {
        title: 'Primary Button',
        variant: 'primary',
        onClick: vi.fn(),
      },
    })

    const primaryButton = wrapperPrimary.find('button')
    expect(primaryButton.classes()).toContain('btn-primary')

    const wrapperSecondary = mount(BrdButton, {
      props: {
        title: 'Secondary Button',
        variant: 'secondary',
        onClick: vi.fn(),
      },
    })

    const secondaryButton = wrapperSecondary.find('button')
    expect(secondaryButton.classes()).toContain('btn-secondary')
  })

  it('applies the primary variant when variant undefined', () => {
    const wrapperPrimary = mount(BrdButton, {
      props: {
        title: 'Variant Undefined',
        onClick: vi.fn(),
      },
    })

    const primaryButton = wrapperPrimary.find('button')
    expect(primaryButton.classes()).toContain('btn-primary')
  })

  it('triggers the onClick function when clicked', async () => {
    const onClickMock = vi.fn()

    const wrapper = mount(BrdButton, {
      props: {
        title: 'Clickable Button',
        variant: 'primary',
        onClick: onClickMock,
      },
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(onClickMock).toHaveBeenCalledOnce()
  })
})
