/**
 * Returns data providers.
 *
 * @param {string} dataprovidersJsonUrl url for the data providers json. Defaults to https://raw.githubusercontent.com/Orebrokommun/Open-Meal-Information/master/dataproviders.json as per https://orebrokommun.github.io/Open-Meal-Information/doc/list-data-providers.html
 * @returns {Promise} A Promise of the <code>data</code> property of the response from the server.
 * @name getDataProviders
 */
export { default as getDataProviders } from './get-dataproviders'

/**
 * Returns the data provider with <code>name === 'Skolmaten'</code>.
 *
 * @param {string} dataprovidersJsonUrl url for the data providers json. Defaults to https://raw.githubusercontent.com/Orebrokommun/Open-Meal-Information/master/dataproviders.json as per https://orebrokommun.github.io/Open-Meal-Information/doc/list-data-providers.html
 * @returns {Promise} A Promise of the <code>data</code> property of the response from the server.
 * @name getDataProviderSkolmaten
 */
export { default as getDataProviderSkolmaten } from './get-dataprovider-skolmaten'

/**
 * Returns distributors from a data provider.
 *
 * @param {object} dataprovider data provider object to fetch distributors from.
 * @param {string} dataprovider.baseUrl <code>baseUrl</code> of the data provider.
 * @returns {Promise} A Promise of the <code>data</code> property of the response from the server.
 * @name getDistributors
 */
export { default as getDistributors } from './get-distributors'

/**
 * Filters distributors based on partial name and/or partial address.
 *
 * @param {object} options
 * @param {Array} options.distributors current distributors to filter, for example from <code>getDistributors</code> or the result of previous call to this function.
 * @param {string|undefined} options.name if specified, only include distributors in result which contain this string in their <code>name</code>, case insensitively.
 * @param {string|undefined} options.address if specified, only include distributors in result which contain this string in their <code>addressRegion</code> or <code>addressLocality</code>, case insensitively.
 * @returns {Promise<Array>} A Promise of an array of distributors matching the criteria.
 * @name filterDistributors
 */
export { default as filterDistributors } from './filter-distributors'

/**
 * Fetches meals for a distributor.
 *
 * @param {object} options
 * @param {object} options.dataprovider data provider object to fetch distributors from.
 * @param {string} options.dataprovider.baseUrl <code>baseUrl</code> of the data provider.
 * @param {object} options.distributor distributor whose meals to fetch.
 * @param {string} options.distributor.distributorID the distributor's ID.
 * @param {string|undefined} options.startDate start date on the form <code>YYYY-MM-DD</code>.
 * @param {string|undefined} options.endDate end date on the form <code>YYYY-MM-DD</code>.
 * @returns {Promise} A Promise of the <code>data</code> property of the response from the server.
 * @name getMeals
 */
export { default as getMeals } from './get-meals'

/**
 * Extracts an array of only meals objects from a response from <code>getMeals()</code>.
 *
 * @param {object} response response from calling <code>getMeals()</code>.
 * @returns {Promise<Array>} A Promise of an array containing all meal objects from the supplied response.
 * @name extractOnlyMeals
 */
export { default as extractOnlyMeals } from './extract-only-meals'
