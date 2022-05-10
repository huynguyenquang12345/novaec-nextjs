import '../styles/globals.scss';
// import '../node_modules/slick-carousel/slick/slick.css';
// import '../node_modules/slick-carousel/slick/slick-theme.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}