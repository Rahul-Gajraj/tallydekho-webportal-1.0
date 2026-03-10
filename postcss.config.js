export default {
  plugins: {
    "tailwindcss/nesting": "postcss-nesting",
    "postcss-preset-env": {
      features: {
        "nesting-rules": false,
        "is-pseudo-class": false,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
