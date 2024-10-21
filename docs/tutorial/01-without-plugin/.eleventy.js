export default async function (eleventyConfig) {
	import markdownIt from 'markdown-it';
	import markdownItAttributes from 'markdown-it-attrs';
	eleventyConfig.setLibrary('md', markdownIt().use(markdownItAttributes));

	eleventyConfig.addPassthroughCopy('src/assets');

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
