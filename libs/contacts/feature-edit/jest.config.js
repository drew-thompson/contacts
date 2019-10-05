module.exports = {
  name: 'contacts-feature-edit',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/contacts/feature-edit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
