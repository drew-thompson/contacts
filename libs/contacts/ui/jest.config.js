module.exports = {
  name: 'contacts-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/contacts/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
