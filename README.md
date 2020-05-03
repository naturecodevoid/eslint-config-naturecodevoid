<h1 align="center">eslint-config-naturecodevoid</h1>

<p align="center">naturecodevoid's <a href="https://eslint.io/">Eslint</a> Config

<p align="center"><a href="https://github.com/naturecodevoid/eslint-config-naturecodevoid/blob/master/LICENSE"><img src="https://img.shields.io/github/license/naturecodevoid/eslint-config-naturecodevoid?style=flat-square"></a> <a href="https://www.npmjs.com/package/eslint-config-naturecodevoid"><img src="https://img.shields.io/npm/v/eslint-config-naturecodevoid?style=flat-square"></a></p>

<h2 align="center">Installing</h2>

<h3 align="center">CLI</h3>

This assumes you have Node.js and npm (bundled with node) and the terminal's working directory is where you want to make
the `.eslintrc.js`.

1. Install config: `$ npm install --save-dev eslint-config-naturecodevoid`
1. Generate the `.eslintrc.js`: `$ npx eslint-config-naturecodevoid`

If you want to change options:

<!-- prettier-ignore-start -->

```javascript
// .eslintrc.js
module.exports = {
    extends: "naturecodevoid",
    rules: {
        myRule: "error",
        myRule2: "warn",
    }
};
```

<!-- prettier-ignore-end -->

<h3 align="center">Manual</h3>

Install:

```shell
$ npm install --save-dev eslint-config-naturecodevoid
```

Edit `.eslintrc.js`:

```javascript
module.exports = {
    extends: "naturecodevoid"
};
```

Or if you want to change some rules:

```javascript
// .eslintrc.js
module.exports = {
    extends: "naturecodevoid",
    rules: {
        myRule: "error",
        myRule2: "warn",
    }
};
```
