'use strict';

import pkg from 'package.json' with { type: 'json' };

const imagesResponsiver = require('images-responsiver');

export default (eleventyConfig, options = {}) => {
	// First check if the plugin is used with a compatible version of Eleventy
	try {
		eleventyConfig.versionCheck(pkg['11ty'].compatibility);
	} catch (e) {
		console.error(
			`[eleventy-plugin-image-responsiver] Plugin compatibility error ${e.message}`
		);
		return;
	}

	eleventyConfig.addTransform('imagesResponsiver', function (content) {
		if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
			return imagesResponsiver(content, options, this.page.url);
		}
		return content;
	});
};
