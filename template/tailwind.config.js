const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {

        extend: {},
    },
    variants: {},
    plugins: [],
});