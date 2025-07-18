module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['tailwindcss', 'jsx-a11y'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
