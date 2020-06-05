const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    alias({
        "Components": 'src/common/components',
    })(config)
    return config;
}
