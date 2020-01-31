module.exports = {
  stories: [
    '../src/attributes/**/*.stories.(js|mdx)',
    '../src/components/base/**/*.stories.(js|mdx)',
    '../src/components/utils/**/*.stories.(js|mdx)',
    '../src/components/atoms/**/*.stories.(js|mdx)',
    '../src/components/blocks/**/*.stories.(js|mdx)',
    '../src/components/elements/**/*.stories.(js|mdx)',
    '../src/components/layout/**/*.stories.(js|mdx)',
    '../src/components/templates/**/*.stories.(js|mdx)',
    '../src/components/work/**/*.stories.(js|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: {},
      },
    },
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    'storybook-addon-specifications',
    // '@storybook/addon-links',
  ],
};