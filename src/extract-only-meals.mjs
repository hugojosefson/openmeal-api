import R from 'ramda'

export default response => Promise.resolve(response)
  .then(data => data.map(({meals}) => meals))
  .then(R.unnest) // flatten array one level
  .then(R.unnest) // flatten array one level
