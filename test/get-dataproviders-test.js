/* eslint-env mocha */

import assert from 'assert'
import { getDataProviders } from '../src/api'

describe('getDataProviders', () => {
  it('should return a Promise when called', () =>
    assert.ok(typeof getDataProviders().then === 'function')
  )

  describe('dataproviders', () => {
    let dataprovidersPromise
    before(() => { dataprovidersPromise = getDataProviders() })

    it('should be an array with .length > 1', () =>
      dataprovidersPromise
        .then(dataproviders => assert.ok(dataproviders.length > 1))
    ).timeout(5000)

    it('first item should have string property name', () =>
      dataprovidersPromise
        .then(dataproviders => assert.ok(typeof dataproviders[0].name === 'string'))
    ).timeout(5000)

    it('first item should have string property baseUrl', () =>
      dataprovidersPromise
        .then(dataproviders => assert.ok(typeof dataproviders[0].baseUrl === 'string'))
    ).timeout(5000)
  })
})
