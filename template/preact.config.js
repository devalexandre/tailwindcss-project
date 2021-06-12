const tailwind = require('preact-cli-tailwind');

export default function (config, env, helpers) {
    config = tailwind(config, env, helpers);
    return config;
}