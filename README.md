# meteor-autoform-hint
Add hints to your quickForms, defined via  SimpleSchema.

Compatible with bootstrap3 and bootstrap4.



## Installation

```
meteor add jkuester:autoform-hint
```

If you want to use bootstrap 4 add the following package:

```
meteor add imajus:autoform-bootstrap4
```

This will auto-override the rendering method of `afFormGroup_bootstrap3` and `afFormGroup_bootstrap4` template. The template will keep all it's original functionality. Works also with bootstrap4.

### Usage

Define a hint on your schema:

```javascript
new SimpleSchema({
  username: {
    type: String,
    autoform: {
      hint: 'Enter a username. Allowed characters are....'
    }
  },
  password: {
    type: String,
    autoform: {
      hint: 'Enter a password. Allowed characters are....'
    }
  }
})
```

### Customization


Note, that the default position is on top next to the label. You can also define the position more precise using `hintTop` and `hintBottom`:

```javascript
new SimpleSchema({
  username: {
    type: String,
    autoform: {
      hintTop: 'Enter a username. Allowed characters are....'
    }
  },
  password: {
    type: String,
    autoform: {
      hintBottom: 'Enter a password. Allowed characters are....'
    }
  }
})
```

You can also customize the position / style by defining the following css classes:

```css
.afhint-bottom-block {
  /* style here */
}

.afhint-top-block {
  /* style here */
}
```

### License

MIT, 2018 Jan Küster
