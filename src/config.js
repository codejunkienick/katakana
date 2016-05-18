require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'KATAKANA',
    description: 'Developer group based in Perm, Russia.',
    head: {
      titleTemplate: 'KATAKANA: %s',
      meta: [
        {name: 'description', content: 'Developer group based in Perm, Russia.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'KATAKANA'},
        // {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'KATAKANA'},
        {property: 'og:description', content: 'Developer group based in Perm, Russia.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@codejunkienick'},
        {property: 'og:creator', content: '@codejunkienick'},
        // {property: 'og:image:width', content: '200'},
        // {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
