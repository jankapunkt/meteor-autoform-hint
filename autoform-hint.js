import { Template } from 'meteor/templating'

import './autoform-hint.html'

Template.registerHelper('afHintTop', function (target) {
  const context = (target || this)
  return context.afFieldInputAtts.hintTop || context.afFieldInputAtts.hint
})

Template.registerHelper('afHintBottom', function (target) {
  const context = (target || this)
  return context.afFieldInputAtts.hintBottom
})

// Helper shim to override template renderFunctions
// Inspired by replaces() from aldeed:template-extension package. Good stuff.
Template.prototype._override = function (replacement) {
  if (typeof replacement === 'string') {
    replacement = Template[ replacement ]
  }
  if (replacement && replacement instanceof Blaze.Template) {
    this.renderFunction = replacement.renderFunction
  }
}

Template.afFormGroup_bootstrap3._override('afFormGroup_hint3')
Template.afFormGroup_bootstrap4._override('afFormGroup_hint4')