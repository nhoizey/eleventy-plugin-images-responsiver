export default async function (eleventyConfig) {
	import markdownIt from 'markdown-it';
	import markdownItAttributes from 'markdown-it-attrs';
	eleventyConfig.setLibrary('md', markdownIt().use(markdownItAttributes));

	import imagesResponsiver from 'eleventy-plugin-images-responsiver';
	const presets = {
		default: {
			sizes: '(max-width: 45em) 90vw, 40em',
			attributes: {
				loading: 'lazy',
			},
		},
		logo: {
			sizes: '(max-width: 45em) 18vw, 8em',
			classes: ['logo'],
			attributes: {
				width: '400',
				height: '400',
			},
		},
	};
	eleventyConfig.addPlugin(imagesResponsiver, presets);

	eleventyConfig.addPassthroughCopy('src/assets');

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
