(function () {

    const express = require('express'),
        bodyParser = require('body-parser'),
        config = require('./config'),
        CONFIG = config.get(),
        logger = require('./logger'),
        server = express();

    function updateConfig(version) {
        if (version !== 'dev') {
            config.set('VER', version);
            config.set('APP_PATH', 'app/' + version + '/client/');
        }
    }

    function initializeServer(version) {
        updateConfig(version);
        server.use(logger);
        server.use(bodyParser.urlencoded({
            extended: false
        }));
        server.use(express.static(CONFIG.APP_PATH));
    }

    function start(version) {

        initializeServer(version);

        server.listen(CONFIG.PORT, function () {
            console.log('\n[' + CONFIG.APP + '] Running server on port', CONFIG.PORT, 'in', CONFIG.VER, 'version...');
        });

    }

    module.exports = {
        start: start
    };

}());
