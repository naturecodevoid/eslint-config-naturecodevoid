#!/usr/bin/env node
require("fs").copyFileSync(
    require("path").resolve(__dirname, "exports.js"),
    require("path").resolve(process.cwd(), ".eslintrc.js"),
);
console.log("Please run 'npm i -D eslint-config-naturecodevoid' to finish installing.");