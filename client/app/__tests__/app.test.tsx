import React from 'react'
import renderer from 'react-test-renderer'

import { App } from '../src/app'

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}))

jest.mock('../src/navigation/app.navigator', () => 'AppNavigator')

describe('App', () => {
  jest.useFakeTimers()

  it(`renders the loading screen`, () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`renders the root without loading screen`, () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
