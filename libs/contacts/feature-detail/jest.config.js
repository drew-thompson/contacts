module.exports = {
  name: 'contacts-feature-detail',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/contacts/feature-detail',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
