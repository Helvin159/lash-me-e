const { withFaust, getWpHostname } = require('@faustjs/next');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
	images: {
		domains: [getWpHostname()],
	},
});
