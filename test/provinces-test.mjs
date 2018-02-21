/* eslint-env mocha */

import assert from 'assert'
import {getProvinces} from '../src/api'

describe('getProvinces', () => {
  it('should return a Promise when called', () =>
    assert.ok(typeof getProvinces().then === 'function')
  )

  describe('the Promise\'s resolution', () => {
    let provincesPromise
    before(() => { provincesPromise = getProvinces() })

    it('should be an array with .length > 1', () =>
      provincesPromise
        .then(provinces => assert.ok(provinces.length > 1))
    ).timeout(5000)

    it('first item should have string property name', () =>
      provincesPromise
        .then(provinces => assert.ok(typeof provinces[0].name === 'string'))
    ).timeout(5000)

    it('first item should have array property districts', () =>
      provincesPromise
        .then(provinces => assert.ok(typeof provinces[0].districts === 'object' && typeof provinces[0].districts.length === 'number'))
    ).timeout(5000)
  })
})
