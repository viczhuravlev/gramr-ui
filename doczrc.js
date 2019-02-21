const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

module.exports = {
  title: `Gramr`,
  description: 'description',
  src: './src',
  base: isProduction ? '/gramr/' : '/',
  typescript: true,
  codeSandbox: true,
  port: 8888,
  themeConfig: {
    colors: {
      primary: '#03a9f4'
    }
  },
  modifyBundlerConfig: (config, dev, args) => {
    const svgIndex = config.module.rules.findIndex(elem => {
      return String(elem.test) === String(/\.(svg)(\?.*)?$/);
    });

    config.module.rules.splice(svgIndex, 1);
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};
