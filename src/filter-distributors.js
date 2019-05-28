const l = s => s.toLowerCase()

const stringIncludes =
        originalName => partialName =>
          l(originalName).includes(l(partialName))

const addressIncludes =
    ({ addressRegion, addressLocality }) => partialAddress =>
      l(addressRegion).includes(l(partialAddress)) ||
        l(addressLocality).includes(l(partialAddress))

const filterDistributors = ({ distributors, name, address }) => distributors
  .filter(distributor => (typeof name === 'undefined' ? true : stringIncludes(distributor.name)(name)))
  .filter(distributor => (typeof address === 'undefined' ? true : addressIncludes(distributor.address)(address)))

export default args => Promise.resolve(filterDistributors(args))
