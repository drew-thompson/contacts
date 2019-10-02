module.exports = {
  name: 'contacts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/contacts',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
