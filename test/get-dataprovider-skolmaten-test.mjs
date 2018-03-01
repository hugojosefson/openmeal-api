/* eslint-env mocha */

import assert from 'assert'
import {getDataProviderSkolmaten} from '../src/api'

describe('getDataProviderSkolmaten', () => {
  it('should return a Promise when called', () =>
    assert.ok(typeof getDataProviderSkolmaten().then === 'function')
  )

  describe('skolmaten', () => {
    let skolmatenPromise
    before(() => { skolmatenPromise = getDataProviderSkolmaten() })

    it('should be an object', () =>
      skolmatenPromise
        .then(skolmaten => assert.ok(typeof skolmaten === 'object'))
    ).timeout(5000)

    it('should have string property name', () =>
      skolmatenPromise
        .then(skolmaten => assert.ok(typeof skolmaten.name === 'string'))
    ).timeout(5000)

    it('should have string property name === "Skolmaten"', () =>
      skolmatenPromise
        .then(skolmaten => assert.ok(skolmaten.name === 'Skolmaten'))
    ).timeout(5000)

    it('should have string property baseUrl', () =>
      skolmatenPromise
        .then(skolmaten => assert.ok(typeof skolmaten.baseUrl === 'string'))
    ).timeout(5000)
  })
})
