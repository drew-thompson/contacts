module.exports = {
  name: 'router-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/router/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
