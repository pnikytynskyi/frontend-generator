const resolvedPath = require.resolve('./src/utils/react-intl-dev/react-intl-override.js')

module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ],
  presets: [
    "@babel/preset-react"
  ],
  env: {
    "test": {
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread"
      ],
      "presets": [
        [
          "@babel/preset-env", {
            "modules": "commonjs"
          }
        ]
      ]
    },
    "development": {
      "plugins": [
        ["react-intl", {
          // We use this part of config for babel-plugin-react-intl to extract messages from components
          // But we also need an additional option 'moduleSourceName', because when we override react-intl path then we break moduleSourceName,
          // therefore we also need to point moduleSourceName to our overridden react-intl
            "messagesDir": "src/translations/extractedMessages",
            "moduleSourceName": resolvedPath
        }],
        ["module-resolver", {
          extensions: [".js"],
          resolvePath(sourcePath, currentFile) {
            if (sourcePath === 'react-intl' && currentFile !== resolvedPath) {
              return resolvedPath;
            }
            return sourcePath;
          }
        }],
      ]
    },
  }
}
