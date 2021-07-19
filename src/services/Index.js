const files = require.context('.', false, /\.js$/);
const Services = {}

files.keys().forEach((key) => {

  if (key === './Index.js') return
  Services[ key.replace(/(\.\/|\.js)/g, '') ] = files(key).default
})

export default Services