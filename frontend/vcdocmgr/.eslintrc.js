module.exports = {
  parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
          "jsx": true,
      }
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}