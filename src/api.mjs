/**
 * Returns data providers.
 *
 * @param {string} url for the data providers json. Defaults to https://raw.githubusercontent.com/Orebrokommun/Open-Meal-Information/master/dataproviders.json as per https://orebrokommun.github.io/Open-Meal-Information/doc/list-data-providers.html
 * @returns {Promise} A Promise of the <code>data</code> property of the response from the server.
 * @name getDataProviders
 */
export { default as getDataProviders } from './get-dataproviders'

/**
 * Returns the data provider with name === 'Skolmaten'.
 *
 * @param {string} url for the data providers json. Defaults to https://raw.githubusercontent.com/Orebrokommun/Open-Meal-Information/master/dataproviders.json as per https://orebrokommun.github.io/Open-Meal-Information/doc/list-data-providers.html
 * @returns {Promise} A Promise of the <code>data</code> property of the response from the server.
 * @name getDataProviderSkolmaten
 */
export { default as getDataProviderSkolmaten } from './get-dataprovider-skolmaten'

/**
 * Returns distributors from a data provider.
 *
 * @param {{baseUrl}} data provider object to fetch distributors from.
 * @returns {Promise} A Promise of the <code>data</code> property of the response from the server.
 * @name getDistributors
 */
export { default as getDistributors } from './get-distributors'
