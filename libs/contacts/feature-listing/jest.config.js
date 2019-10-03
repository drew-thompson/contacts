module.exports = {
  name: 'contacts-feature-listing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/contacts/feature-listing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
