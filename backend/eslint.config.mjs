export default [
    ...compat.extends("@typescript-eslint"),
    {
files: ['**/*.{js,cjs,mjs,ts}'],
languageOptions: {
    // ecmaVersion: "latest",
    // sourceType: "module",

    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: "./tsconfig.json",
        sourceType: 'module',
    },
},

},
{
    // files: ['**/*.{js,cjs,mjs,ts}'],
}];