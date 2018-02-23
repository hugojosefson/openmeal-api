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

/**
 * Filters distributors based on partial name and/or partial address.
 *
 * @param {Array} distributors current distributors to filter, for example from <code>getDistributors</code> or the result of previous call to this function.
 * @param {string|undefined} name if specified, only include distributors in result which contain this string in their <code>name</code>, case insensitively.
 * @param {string|undefined} address if specified, only include distributors in result which contain this string in their <code>addressRegion</code> or <code>addressLocality</code>, case insensitively.
 * @returns {Array} array of distributors matching the criteria.
 * @name filterDistributors
 */
export { default as filterDistributors } from './filter-distributors'
