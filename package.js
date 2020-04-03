/* eslint-env meteor */

Package.describe({
  name: 'jkuester:autoform-hint',
  version: '0.3.1',
  // Brief, one-line summary of the package.
  summary: 'Add hints to your quickForms using SimpleSchema.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jankapunkt/meteor-autoform-hint.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.6')
  api.use('ecmascript')
  api.use('templating@1.3.2')
  api.use('aldeed:autoform@6.3.0')
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
