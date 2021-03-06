# API for Open Meal Information

[![Build Status](https://travis-ci.org/hugojosefson/openmeal-api.svg?branch=master)](https://travis-ci.org/hugojosefson/openmeal-api)
[![npm page](https://img.shields.io/npm/v/@hugojosefson/openmeal-api.svg)](https://npmjs.com/package/@hugojosefson/openmeal-api)
[![License ISC](https://img.shields.io/npm/l/@hugojosefson/openmeal-api.svg)](https://tldrlegal.com/license/-isc-license)
[![SemVer 2.0.0](https://img.shields.io/badge/SemVer-2.0.0-lightgrey.svg)](http://semver.org/spec/v2.0.0.html)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

This is an unofficial API module for accessing Swedish school lunch
menus from [skolmaten.se](https://skolmaten.se/) via Open Meal
Information as specified at
<https://orebrokommun.github.io/Open-Meal-Information/>.

## Prerequisite

Node.js, at least `v10.13.0`.

Recommended to install latest via [nvm](https://github.com/creationix/nvm#readme):

```bash
nvm install stable
```

## Installation in a project

```bash
yarn add @hugojosefson/openmeal-api
 # or
npm install --save @hugojosefson/openmeal-api
```

## Programmatic access

It is recommended to `import` or `require` the module, and use its exported functions programmatically.

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

##### Table of Contents

-   [getDataProviders](#getdataproviders)
    -   [Parameters](#parameters)
-   [getDataProviderSkolmaten](#getdataproviderskolmaten)
    -   [Parameters](#parameters-1)
-   [getDistributors](#getdistributors)
    -   [Parameters](#parameters-2)
-   [filterDistributors](#filterdistributors)
    -   [Parameters](#parameters-3)
-   [getMeals](#getmeals)
    -   [Parameters](#parameters-4)
-   [extractOnlyMeals](#extractonlymeals)
    -   [Parameters](#parameters-5)

#### getDataProviders

Returns data providers.

##### Parameters

-   `dataprovidersJsonUrl` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** url for the data providers json. Defaults to <https://raw.githubusercontent.com/Orebrokommun/Open-Meal-Information/master/dataproviders.json> as per <https://orebrokommun.github.io/Open-Meal-Information/doc/list-data-providers.html>

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A Promise of the <code>data</code> property of the response from the server.

#### getDataProviderSkolmaten

Returns the data provider with <code>name === 'Skolmaten'</code>.

##### Parameters

-   `dataprovidersJsonUrl` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** url for the data providers json. Defaults to <https://raw.githubusercontent.com/Orebrokommun/Open-Meal-Information/master/dataproviders.json> as per <https://orebrokommun.github.io/Open-Meal-Information/doc/list-data-providers.html>

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A Promise of the <code>data</code> property of the response from the server.

#### getDistributors

Returns distributors from a data provider.

##### Parameters

-   `dataprovider` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data provider object to fetch distributors from.
    -   `dataprovider.baseUrl` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** <code>baseUrl</code> of the data provider.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A Promise of the <code>data</code> property of the response from the server.

#### filterDistributors

Filters distributors based on partial name and/or partial address.

##### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `options.distributors` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** current distributors to filter, for example from <code>getDistributors</code> or the result of previous call to this function.
    -   `options.name` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** if specified, only include distributors in result which contain this string in their <code>name</code>, case insensitively.
    -   `options.address` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** if specified, only include distributors in result which contain this string in their <code>addressRegion</code> or <code>addressLocality</code>, case insensitively.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)>** A Promise of an array of distributors matching the criteria.

#### getMeals

Fetches meals for a distributor.

##### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `options.dataprovider` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data provider object to fetch distributors from.
        -   `options.dataprovider.baseUrl` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** <code>baseUrl</code> of the data provider.
    -   `options.distributor` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** distributor whose meals to fetch.
        -   `options.distributor.distributorID` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the distributor's ID.
    -   `options.startDate` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** start date on the form <code>YYYY-MM-DD</code>.
    -   `options.endDate` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** end date on the form <code>YYYY-MM-DD</code>.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A Promise of the <code>data</code> property of the response from the server.

#### extractOnlyMeals

Extracts an array of only meals objects from a response from <code>getMeals()</code>.

##### Parameters

-   `response` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** response from calling <code>getMeals()</code>.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)>** A Promise of an array containing all meal objects from the supplied response.

## Usage on CLI

You can also try it from the command-line.

```bash
./node_modules/.bin/openmeal-api
```

Prints usage information for the CLI.
