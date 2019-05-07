const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://ryankeithgrant.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://ryankeithgrant.herokuapp.com/',
  'process.env.CLIENT_ID': 'peI7TO1zYkHlpyiPFWJWBPZebtu2IXUP'
}
