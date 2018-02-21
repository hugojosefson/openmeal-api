import request from 'request-promise-native'

export default () => request('http://meny.dinskolmat.se/?fmt=json', {json: true})
  .then(response => response.provinces)
