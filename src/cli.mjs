import {basename, relative} from 'path'
import {
  getDataProviders,
  getDistributors,
  getDataProviderSkolmaten,
  filterDistributors,
  getMeals,
  extractOnlyMeals
} from './api'

const HARDCODED_DISTRIBUTORS_FILTER = {
  name: 'Kungshög',
  address: 'Malmö'
}

const usageMessage = proc => `
Usage: ${basename(proc.argv[1])} [dataproviders|distributors|meals]

Please see ${relative(proc.cwd(), __filename)} for any hard-coded filters when fetching meals.
`

const usageAndQuit = () => {
  const message = usageMessage(process)
  console.error(message)
  process.exit(1)
}

if (process.argv.length !== 3) {
  usageAndQuit()
}

const command = process.argv[2]

const action = () => {
  if (command === 'dataproviders') {
    return getDataProviders()
  } else if (command === 'distributors') {
    return getDataProviderSkolmaten()
      .then(getDistributors)
  } else if (command === 'meals') {
    return getDataProviderSkolmaten()
      .then(
        skolmaten => getDistributors(skolmaten)
          .then(distributors => filterDistributors({distributors, ...HARDCODED_DISTRIBUTORS_FILTER}))
          .then(distributors => getMeals({dataprovider: skolmaten, distributor: distributors[0]}))
          .then(extractOnlyMeals)
      )
  } else {
    usageAndQuit()
  }
}

action().then(result => JSON.stringify(result, null, 2))
  .then(json => console.log(json))
  .catch(err => {
    console.error('Caught error:', err.stack)
    process.exit(1)
  })
