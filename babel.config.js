module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: "defaults", // or customize browser support
          useBuiltIns: "entry",
          corejs: "3.30" // or latest available
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-transform-private-property-in-object",
    ]
  };
  