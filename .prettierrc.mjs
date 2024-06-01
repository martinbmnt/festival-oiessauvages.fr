/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  printWidth: 180,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.astro',
      options: {
        astroAllowShorthand: true,
        parser: 'astro',
      },
    },
  ],
};
