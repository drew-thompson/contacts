module.exports = {
  name: 'contacts-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/contacts/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
