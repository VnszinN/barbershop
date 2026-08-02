const path = require("path")

module.exports = {
  "*.{ts,tsx}": (filenames) => {
    const eslintBin = path.resolve("./node_modules/.bin/eslint")
    const prettierBin = path.resolve("./node_modules/.bin/prettier")

    const files = filenames.map((file) => `"${file}"`).join(" ")

    return [
      `"${eslintBin}" --fix ${files}`,
      `"${prettierBin}" --write ${files}`,
    ]
  },
}
