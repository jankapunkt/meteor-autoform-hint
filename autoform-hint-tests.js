// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by autoform-hint.js.
import { name as packageName } from "meteor/jkuester:autoform-hint";

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-hint - example', function (test) {
  test.equal(packageName, "autoform-hint");
});
