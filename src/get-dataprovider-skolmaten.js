import getDataproviders from './get-dataproviders'

export default dataProvidersUrl => getDataproviders(dataProvidersUrl)
  .then(dataProviders => dataProviders.find(({ name }) => name === 'Skolmaten'))
  .then(skolmaten => {
    if (typeof skolmaten !== 'undefined') {
      return Promise.resolve(skolmaten)
    } else {
      return Promise.reject(new Error('Data provider with name "Skolmaten" not found.'))
    }
  })
