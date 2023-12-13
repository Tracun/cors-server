const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy.createServer({
    originWhitelist: ['http://localhost:*', 'http://localhost:55555', 'https://gianini-manutencao.web.app', 'https://gianini-manutencao-dev.web.app', 'manutencao-hosp-app.web.app', 'manutencao-hosp-app.firebaseapp.com'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
