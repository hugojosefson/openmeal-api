import {basename} from 'path'
import {getProvinces} from './api'

if (process.argv.length !== 2) {
  console.error(`Usage: ${basename(process.argv[1])}`)
  process.exit(1)
}

getProvinces()
  .then(provinces => JSON.stringify(provinces, null, 2))
  .then(json => console.log(json))
  .catch(err => {
    console.error('Caught error:', err.stack)
    process.exit(1)
  })
