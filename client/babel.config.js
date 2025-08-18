module.exports = {
  presets: [
    "@babel/preset-env", // Для поддержки современных возможностей JavaScript
    "@babel/preset-react", // Для поддержки JSX
    "@babel/preset-typescript", // Если вы используете TypeScript
    'babel-plugin-react-compiler', // Для поддержки React 19
  ],
};
