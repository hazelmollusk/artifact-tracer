function client(app) {
    const clientConfig = app.get('artifactTracer').client;

    if (clientConfig) {
        if (clientConfig.load == 'react') {
            const { clientPlugin } = require('react');
            app.set('artifactTracerClient', clientPlugin);
        }
    }
}
