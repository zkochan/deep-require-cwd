'use strict'
const deepRequireCwd = require('.')

const pkg = deepRequireCwd(['mos', 'chalk', './package.json'])

console.log(pkg.name)
