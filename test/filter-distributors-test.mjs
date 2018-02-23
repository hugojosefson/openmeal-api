/* eslint-env mocha */

import assert from 'assert'

import distributors from './distributors.json'
import {filterDistributors} from '../src/api'

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

  it('returns all if no criteria', () => assert.deepEqual(distributors, filterDistributors({distributors})))

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
    [5447],
    [88, 'information'] // TODO: how should we really handle these?
  ]

  pairs.forEach(
    ([count, name, address]) =>
      it(
        `returns ${count} if filtered by ${j({name, address})}`,
        () => assert.equal(count, filterDistributors({distributors, name, address}).length)
      )
  )
})
