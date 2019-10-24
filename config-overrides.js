const {
  useBabelRc,
  override,
  addWebpackAlias,
  addBabelPlugin
} = require('customize-cra');
const reactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
  useBabelRc(),
  reactHotLoader,
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom'
  }),
  addBabelPlugin('@babel/plugin-proposal-optional-chaining')
);
