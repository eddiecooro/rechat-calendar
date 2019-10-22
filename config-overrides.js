const { useBabelRc, override, addWebpackAlias } = require('customize-cra');
const reactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
  useBabelRc(),
  reactHotLoader,
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom'
  })
);
