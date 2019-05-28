/* eslint-env mocha */

import assert from 'assert'

import {
  getDataProviderSkolmaten,
  getDistributors,
  filterDistributors,
  getMeals,
  extractOnlyMeals
} from '../src/api'

describe('getMeals', () => {
  it('makes a request successfully', () => getDataProviderSkolmaten()
    .then(skolmaten => getDistributors(skolmaten)
      .then(distributors => filterDistributors(({ distributors, name: 'Kungshög', address: 'Malmö' }))
        .then(filteredDistributors => {
          assert.ok(Array.isArray(filteredDistributors))
          assert.ok(filteredDistributors.length === 1)

          const kungshogsskolan = filteredDistributors[0]
          return kungshogsskolan
        })
        .then(kungshogsskolan => getMeals({
          dataprovider: skolmaten,
          distributor: kungshogsskolan
        })
          .then(extractOnlyMeals)
          .then(meals => {
            assert.ok(Array.isArray(meals))
            assert.strict.equal(meals.length, 6)
          })
        )
      )
    )
  ).timeout(10000)
})
