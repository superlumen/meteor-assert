Package.describe({
  name: 'superlumen:assert',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Export native Node assert, server only',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/superlumen/meteor-assert',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  // documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.export('assert', ['server']);

  api.addFiles('assert.js', ['server']);
});
