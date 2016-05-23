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
    description: 'Группа разработчиков, расположенная в Перми',
    head: {
      titleTemplate: 'KATAKANA: %s',
      meta: [
        {name: 'description', content: 'Группа разработчиков, расположенная в Перми'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'KATAKANA'},
        {property: 'og:image', content: 'http://katakana.xyz/logo.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'KATAKANA'},
        {property: 'og:description', content: 'Группа разработчиков, расположенная в Перми'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@codejunkienick'},
        {property: 'og:creator', content: '@codejunkienick'},
        {property: 'og:image:width', content: '500'},
        {property: 'og:image:height', content: '500'}
      ]
    }
  },

}, environment);
