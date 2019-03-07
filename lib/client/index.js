
module.exports = function (app) {
    // const clientConfig = app.get('artifactTracer').client;

    // if (clientConfig) {
    //     if (clientConfig.load == 'react') {

            console.log('configuring artifactTracer client plugin...');

            const reactPlugin = require('react');
            app.set('artifactTracerReact', reactPlugin);
      //  }
    //}
};
