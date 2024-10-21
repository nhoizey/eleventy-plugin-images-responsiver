'use strict';

import pkg from './package.json' with { type: 'json' };

import imagesResponsiver from 'images-responsiver';

export default async (eleventyConfig, userOptions = {}) => {
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
			return imagesResponsiver(content, userOptions, this.page.url);
		}
		return content;
	});
};
