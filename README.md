# eleventy-plugin-images-responsiver

[![GitHub stars](https://img.shields.io/github/stars/nhoizey/eleventy-plugin-images-responsiver.svg?style=for-the-badge&logo=github)](https://github.com/nhoizey/eleventy-plugin-images-responsiver/stargazers)
[![Follow @nhoizey@mamot.fr](https://img.shields.io/mastodon/follow/000262395?domain=https%3A%2F%2Fmamot.fr&style=for-the-badge&logo=mastodon&logoColor=white&color=6364FF)](https://mamot.fr/@nhoizey)

`eleventy-plugin-images-responsiver` is **a simple solution for most responsive images needs with [Eleventy](https://www.11ty.dev/)**.

This Eleventy plugin allows authors to **use the standard Markdown syntax for images** (`![alt text](image.jpg "title text")`) and yet **get responsive images in the generated HTML**, with `srcset` and `sizes` attributes.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Why does this project exist?](#why-does-this-project-exist)
- [How does it work?](#how-does-it-work)
- [Installation](#installation)
- [Usage](#usage)
- [Alternatives](#alternatives)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Why does this project exist?

As Steve Jobs [once said](https://www.youtube.com/watch?v=oeqPrUmVz-o):

> You've got to start with the customer experience and run backwards to the technology.

**Responsive images are one of the most difficult topics nowadays** for front end developers and content authors, they involve multiple features and syntaxes, but they are **required to provide a good performance to Web users**.

Most content authors should not have to learn the complex responsive images HTML syntax, and how it is used by browsers to load the right image for current viewing context.

Knowing that [`<picture>` is only required for rare advanced usages](https://cloudfour.com/thinks/dont-use-picture-most-of-the-time/), **`eleventy-plugin-images-responsiver` should be enough for most use cases**, known as Resolution Switching. Read [this article on Cloudfour's blog to know more of the theory](https://cloudfour.com/thinks/responsive-images-the-simple-way/).

# How does it work?

`eleventy-plugin-images-responsiver` is **the glue** between Eleventy plugin and transformations system and [`images-responsiver`](../images-responsiver/), the generic HTML transformation npm package for simple responsive images.

Eleventy uses Markdown-it to transform Markdown content into HTML, and then runs the transform added by `eleventy-plugin-images-responsiver`, which calls `images-responsiver` to actually transform the HTML.

> **Warning**
> This plugin doesn't generate any image, it has to be used either with already existing images, a local image resizing solution (should work with the official [eleventy-img](https://www.11ty.dev/docs/plugins/image/) plugin), or a third party service ("image CDN") like Cloudinary.

Learn more in [the detailed documentation](https://nhoizey.github.io/eleventy-plugin-images-responsiver/).

# Installation

To install and use the plugin, install it as a dev dependency in your Eleventy project:

```
npm install eleventy-plugin-images-responsiver --save-dev
```

# Usage

Instead of jumping directly into the list of features and configuration options, let us take your hand and **guide you through a step by step tutorial** with actual examples.

Let's **[start here](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/00-preparation/)**!

If you already know how to use the plugin and want to **go directly to a section of the tutorial**, here are direct links:

- [Step 0: Get the resources to follow this tutorial](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/00-preparation/)
- [Step 1: Default behaviour without the plugin](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/01-without-plugin/)
- [Step 2: Default behaviour with the plugin](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/02-with-plugin-default/)
- [Step 3: Resized images](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/03-resized-images/)
- [Step 4: Images dimensions](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/04-images-dimensions/)
- [Step 5: Presets](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/05-presets/)
- [Step 6: Presets properties](https://nhoizey.github.io/eleventy-plugin-images-responsiver/tutorial/06-presets-properties/)

# Alternatives

To deal with responsive images in Eleventy, there are multiple other plugins:

- [eleventy-img](https://www.11ty.dev/docs/plugins/image/) by Zach Leatherman ([@zachleat](https://twitter.com/zachleat)) is a low level utility to perform build-time image transformations for both vector and raster images, but it doesn't generateany markup
- [eleventy-plugin-respimg](https://www.npmjs.com/package/eleventy-plugin-respimg) by Eric Portis ([@etportis](https://twitter.com/etportis/)) provides a shortcode for responsive images with Cloudinary
- [eleventy-plugin-local-respimg](https://github.com/chromeos/static-site-scaffold-modules/tree/master/modules/eleventy-plugin-local-respimg) by Sam Richard ([@Snugug](https://twitter.com/Snugug/)) provides an Eleventy transform for resizing and optimizing local images

# Contributing

First, thank you for considering contributing to `eleventy-plugin-images-responsiver`! It's people like you that make the open source community such a great community! 😊

There are many ways to contribute to this project. [Get started here](https://github.com/nhoizey/eleventy-plugin-images-responsiver/blob/main/CONTRIBUTING.md).

# License

This project is licensed under the [MIT License](LICENSE.md).

# Authors

- [Nicolas Hoizey](https://github.com/nhoizey): Idea and initial work, maintainer

See also the list of [contributors](https://github.com/nhoizey/eleventy-plugin-images-responsiver/contributors) who participated in this project.
