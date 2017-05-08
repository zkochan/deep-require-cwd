'use strict'
const test = require('tape')
const deepRequireCwd = require('.')

test('deepRequireCwd()', t => {
  const pkg = deepRequireCwd(['mos', 'chalk', './package.json'])
  t.equal(pkg.name, 'chalk')

  t.throws(() => deepRequireCwd(['nonexistent']), Error)

  t.end()
})

test('deepRequireCwd.silent()', t => {
  const pkg = deepRequireCwd.silent(['mos', 'chalk', './package.json'])
  t.equal(pkg.name, 'chalk')

  t.equal(deepRequireCwd.silent(['nonexistent', './package.json']), null)

  t.end()
})
