//https://eslint.org/docs/user-guide/configuring
module.exports = {
  env: {
   browser:true,
   node:true,
   jest:true,
   es6:true,
  },
  parserOptions:{
   ecmaVersion:2021
  },
  root: true,
  extends: ["eslint-config-mfe/eslintrc.es6.js"],
  rules: {
    "no-console": "off",
  },
};
