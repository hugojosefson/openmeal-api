import request from 'request-promise-native'

const MEALS_PATH = '/openmeal/v2/meals.json'

export default ({ dataprovider, distributor, startDate, endDate }) => request({
  url: dataprovider.baseUrl + MEALS_PATH,
  qs: {
    startDate, endDate, distributorID: distributor.distributorID
  },
  json: true
})
  .then(response => response.data)
