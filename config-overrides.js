const rewireMobx = require('react-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireMobx(config, env);
    return config;
};
