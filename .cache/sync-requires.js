// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/mili/other/michaelli1324.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mili/other/michaelli1324.github.io/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mili/other/michaelli1324.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/mili/other/michaelli1324.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/mili/other/michaelli1324.github.io/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/mili/other/michaelli1324.github.io/.cache/json/index.json")
}