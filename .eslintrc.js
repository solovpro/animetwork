module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['airbnb-typescript', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'no-nested-ternary': ['off'],
    'react/require-default-props': ['off'],
    'react/forbid-prop-types': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'import/no-unresolved': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'click-events-have-key-events': ['off'],
    'react/prefer-stateless-function': ['off'],
    'no-unused-expressions': ['off'],
    'no-param-reassign': ['off'],
    indent: ['warn', 3],
    'react/jsx-indent': ['warn', 3],
    'react/jsx-indent-props': ['warn', 3],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/prop-types': ['off'],
    'no-undef': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'no-multi-assign': ['off'],
    'react/jsx-pascal-case': ['warn'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/anchor-is-valid': ['warn'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'react/no-array-index-key': ['off'],
    'react/jsx-one-expression-per-line': ['warn'],
    'react/jsx-wrap-multilines': ['off'],
    camelcase: ['warn'],
    'react/jsx-no-target-blank': ['warn'],
    'prefer-template': ['warn'],
    'no-plusplus': ['off'],
    'jsx-a11y/iframe-has-title': ['warn'],
    'jsx-a11y/alt-text': ['warn'],
    'no-empty': ['warn'],
    'consistent-return': ['warn'],
    'no-useless-escape': ['warn'],
  },
};