const path = require('path');
const del = require('del');
const fs = require('fs-extra');

module.exports = {
  port: '8080',
  host: 'localhost',
  publicPath: '/',
  path: 'lib',
  vendors: false,
  hash: false,
  // 第三方分析插件
  bundleAnalyzer: false,
  folder: false, // 是否把构建后的目录整理成  css, images, js, html
  cssOptions: undefined, // loader
  lessOptions: undefined, // loader
  sassOptions: undefined, // loader
  htmlOptions: undefined, // loader
  urlOptions: undefined, // loader
  htmlPluginOptions: undefined, // html-webpack-plugin
  swOptions: undefined, // workbox InjectManifest config or boolean
  extraBabelPresets: [],
  extraBabelPlugins: [],
  babelPresetsEnvConfig: {},
  postcssPlugins: [],
  webpackMerge: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  afterBuild() {
    // console.log('afterBuild');
    // fs.copySync('lib/src', 'lib');
    // del.sync(['lib/test', 'lib/src']);

  },
  afterStart() {
    console.log('afterStart');
  },
  // 对应环境独立webpack的配置
  webpackDevelopmentMerge: {},
  // 对应环境独立webpack的配置
  webpackProductionMerge: {
    output: {
      library: 'faceMerge',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  },
  // 对应环境独立的配置
  development: {
    entrys: [
      {
        template: 'test/index.html',
        filename: 'index.html',
        entry: 'test/index.ts',
      },
    ],
  },
  // 对应环境独立的配置
  production: {
    entrys: [
      {
        entry: 'src/index.ts',
      },
    ],
  },
  // 如果某些的特定的依赖需要同项目一样构建，正则表达式
  // buildInclude: undefined,

  // buildInclude: [{
  //   include: '(node_modules/antd)',
  //   cssModules: false,
  // }],
};
