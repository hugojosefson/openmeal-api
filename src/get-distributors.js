import request from 'request-promise-native'

const DISTRIBUTORS_PATH = '/openmeal/v2/distributors.json'

export default ({ baseUrl }) => request(baseUrl + DISTRIBUTORS_PATH, { json: true })
  .then(response => response.data)
