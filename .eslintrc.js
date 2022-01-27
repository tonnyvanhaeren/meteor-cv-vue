module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        sourceType: 'module',
    },
    extends: [
        "eslint:recommended",
        'plugin:vue/vue3-recommended',
        'prettier',
    ],

    plugins: ['prettier'],
    rules: {
        'no-console': 'off',
    },
}