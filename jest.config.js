const path = require('path');

const env = {
  NODE_ENV: 'test',
  APP_CONFIG: 'test',
  ...process.env,
}


module.exports = root => ({
  testURL: 'http://localhost',
  verbose: true,
  moduleDirectories: [
    path.join(root, 'node_modules'),
    path.join(root, 'src'),
  ],
  moduleNameMapper: {
    '^src(.*)$': path.join(root, 'src', '$1'),
    '^config(.*)$': path.join(root, 'app-config', '$1'),
    '\\.(css|less)$': path.join(root, 'styleMock.js'),
    'static-config': path.join(root, 'app-config', 'static', 'test.js'),
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.join(root, 'fileTransformer.js'),
  },
  transformIgnorePatterns: [
    // `/node_modules/(?!${modules})`
  ],
  moduleFileExtensions: [
    'js',
    'json',
  ],
  testPathIgnorePatterns: [
    path.join(root, 'node_modules'),
    path.join(root, 'blueprints'),
    path.join(root, 'cypress'),
    path.join(root, 'app-config'),
  ],
  setupFiles: [
    path.join(root, '__mocks__', 'setup.js'),
  ],
});
