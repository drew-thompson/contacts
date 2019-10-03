module.exports = {
  name: 'contacts-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/contacts/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
