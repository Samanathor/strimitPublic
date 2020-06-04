const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    alias({
        "Components": 'src/common/components',
        "Auth": 'src/Auth',
        "Config": 'src/Config',
    })(config)
    return config;
}
