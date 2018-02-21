import {basename} from 'path'
import {getDataProviders, getDistributors, getDataProviderSkolmaten} from './api'

const usageAndQuit = () => {
  console.error(`Usage: ${basename(process.argv[1])} [dataproviders|distributors]`)
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
