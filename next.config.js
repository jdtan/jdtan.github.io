const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/jdtan.github.io/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}