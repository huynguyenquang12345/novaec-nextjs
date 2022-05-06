module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nova-green': '#6ba43a',
        'nova-dark-blue': '#00224d',
        'nova-light-gray': '#bfbfbf',
        'nova-taupe-gray': '#8c8c8c',
        'nova-anti-flash-white': '#f0f0f0',
        'nova-davys-grey': '#595959'
      },
      boxShadow: {
        'nova-dropdown': '0 0.25rem 0.625rem #8c8c8c',
        'nova-header': '0 0.5625rem 1.75rem 0.5rem rgb(0 0 0 / 5%), 0 0.375rem 1rem 0 rgb(0 0 0 / 8%), 0 0.1875rem 0.375rem -0.25rem rgb(0 0 0 / 12%)',
      }
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1140px' },
    }),
  ],
};
