const path = require('path');

const isDevelopMode = process.env.NODE_ENV !== 'production';

const loaders = [
  'babel-loader',
  {
    loader: 'linaria/loader',
    options: { sourceMap: isDevelopMode },
  },
];

if (!isDevelopMode) {
  loaders.push({
    loader: 'react-docgen-typescript-loader',
    options: {
      setDisplayName: false,
      tsconfigPath: path.resolve(__dirname, '../../tsconfig.json'),
    },
  });
}

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '..', '../src'),
    loaders,
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    enforce: 'pre',
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
  });

  config.module.rules.push({
    enforce: 'pre',
    test: /\.tsx?$/,
    loader: 'source-map-loader',
  });

  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test.test('.svg')
  );
  fileLoaderRule.exclude = /\.svg$/;

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
