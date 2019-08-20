const path = require('path');

module.exports = root => {
  const webpackConfigPath = path.join(root, 'webpack.config');
  return {
    webpackConfig: require(webpackConfigPath),
    styleguideComponents: {
      Wrapper: path.join(root, 'lib/styleguide/Wrapper'),
    },
    sections: [
      {
        name: 'Components',
        ignore: ['**/*.test.js', 'src/**/[A-Z]*Container.js'],
        components: 'src/**/[A-Z]*.js',
        skipComponentsWithoutExample: true,
      },
    ],
    template: {
      head: {
        links: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Lato:300,400'
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Archivo:400,400i,500,600'
          },
        ]
      }
    },
    theme: {
      fontFamily: {
        base: [
          '"Archivo", sans-serif',
          '"Lato", sans-serif'
        ]
      },
    },
  }
};
