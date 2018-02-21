import request from 'request-promise-native'
import R from 'ramda'

const DEFAULT_DATAPROVIDERS_URL = 'https://raw.githubusercontent.com/Orebrokommun/Open-Meal-Information/master/dataproviders.json'

export default (url = DEFAULT_DATAPROVIDERS_URL) => request(url, {json: true})
  .then(response => response.data)
  .then(dataproviders => dataproviders.filter(R.has('baseUrl')))
