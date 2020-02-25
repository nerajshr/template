module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "react/prefer-stateless-function": 0,
    "max-len": 0,
    "no-restricted-syntax": 0,
    "import/first": 0,
    "quotes": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "global-require": 0,
    "react/no-array-index-key": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "no-mixed-operators": 0,
    "no-plusplus": 0,
    "no-lonely-if": 0,
    "react/sort-comp": 0,
    "react/destructuring-assignment":0,
  },
  'globals': {
    "fetch": false
  }
};


// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };
