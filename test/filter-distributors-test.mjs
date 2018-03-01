/* eslint-env mocha */

import assert from 'assert'

import distributors from './fixtures/distributors.json'
import {filterDistributors, getDataProviders} from '../src/api'

const j = o => JSON.stringify(o)

describe('filter-distributors', () => {
  describe('setup', () => {
    it('distributors is an array', () => {
      assert.ok(distributors.length)
    })
    it('filterDistributors is a function', () => {
      assert.ok(typeof filterDistributors === 'function')
    })
  })

  it('should return a Promise when called', () =>
    assert.ok(typeof getDataProviders().then === 'function')
  )

  it('resolves to all if no criteria', () => filterDistributors({distributors}).then(actual => {
    assert.deepEqual(distributors, actual)
  }))

  const pairs = [
    [1, 'Abrahamsberg'],
    [2, 'Agneberg'],
    [2, 'agneberg'],
    [8, 'alléskolan'],
    [1, 'vÄstra alléskolan'],
    [2, undefined, 'boden'],
    [684, undefined, 'skåne'],
    [3, 'alléskolan', 'skåne'],
    [3, 'alléskolan', 'skån'],
    [1, 'kungshög', 'malmö'],
    [5447],
    [88, 'information'] // TODO: how should we really handle these?
  ]

  pairs.forEach(
    ([count, name, address]) =>
      it(
        `resolves to ${count} if filtered by ${j({name, address})}`,
        () => filterDistributors({distributors, name, address}).then(actual => {
          assert.equal(count, actual.length)
        })
      )
  )
})
