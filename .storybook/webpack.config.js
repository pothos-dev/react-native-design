module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    include: require('path').resolve('./'),
    exclude: /(node_modules|dist)/, // exclude any commonjs files
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: true, typescript: true }]],
    },
  })
  config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx')
  config.resolve.alias['react-native'] = 'react-native-web'
  return config
}
