module.exports = function (app) {
  const config = app.get('artifactTracer');

  if (config.isClient) {
    console.log('configuring artifactTracer client plugin...');

    const plugin = require('./native');
    app.get('artifactTracer').);
  }
}
