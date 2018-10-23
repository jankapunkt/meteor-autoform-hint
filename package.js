/* eslint-env meteor */

Package.describe({
  name: 'jkuester:autoform-hint',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.8')
  api.use('ecmascript')
  api.use('templating')
  api.use('aldeed:autoform')
  api.addFiles([
    'autoform-hint.html',
    'autoform-hint.js'
  ], 'client')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('jkuester:autoform-hint')
  api.mainModule('autoform-hint-tests.js')
})
