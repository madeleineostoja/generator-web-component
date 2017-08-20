# Polymer Element Generator [![NPM version][npm-badge]][npm-url]

Quickly scaffold modern, lightweight Polymer 2 elements with [Yeoman][yeoman], either as standalone projects or a single file for use inside apps.

Standalone elements come bundled with [Gulp][gulp], [Babel][babel], [Rollup][rollup], [PostCSS][postcss], inline processing, and [BrowserSync][browsersync]. All elements have optional ES6-only support and an optional template boilerplate.

Check out the files in `app/templates` in this repo for a better idea of what you'll get.

### Contents

- [Installation & usage](#installation--usage)
- [Elements for apps](#elements-for-apps)
- [Standalone elements](#standalone-elements)
    - [Inline processing](#inline-processing)
    - [Module bundling](#module-bundling)
    - [Serving locally](#serving-locally)


## Installation & usage

Install Yeoman and the element generator with NPM or Yarn

```sh
$ npm i -g yo generator-polymer-element
```

Then run it

```sh
$ yo polymer-element
```

## Elements for apps

To create a new element for use inside a Polymer app, just select `'Part of an app'` when prompted. This will generate a single HTML file under the name of your element with a minimal Polymer 2 boilerplate setup.


## Standalone elements

To create a standalone element for distribution in its own repo, select `'Standalone'` when prompted. This will scaffold out a lightweight, modern Polymer element project, including a buildstep, conditional transpilation, module bundling, PostCSS processing, and more.

Your element lives in the `src` folder and is compiled to the project root by Gulp. To build it run `gulp build`, or the default `gulp` task on your command line.

### Inline processing 

You can write Javascript and styles directly inline, or split them into files and get Gulp to inline them by adding an `inline` property to link and script tags.

```html
<!-- Inline assets with Gulp -->
<link rel="stylesheet" src="./my-element.css" inline>
<script src="./my-element.js" inline></script>
```

Inline scripts and styles are processed via Gulp, thanks to [`gulp-process-inline`][process-inline].

```html
<script>
    // Transpiled with Babel, even though it's in HTML
    let myVar = 'my-var';
    () => console.log(myVar);
</script>
```

### Module bundling 

Module bundling is handled with [Rollup][rollup], which allows you to import and export both ES6 and CommonJS modules.

```js
// Require modules using ES6 syntax, Rollup will bundle them for you
import foo from 'bar';
foo(); 
```

If you opt out of compiling your element class to ES5, Babel will still run but only transpile for evergreen browsers (all of which support native ES6 classes) using `babel-preset-env`. Otherwise IE11 will be added as a Babel target.

### Serving locally

You can serve standalone elements locally with Browsersync. Run `gulp serve`, or the default `gulp` command, then go to `localhost:3000` to see your component page. You have a component demo in the `demo` folder, go to `localhost:3000/demo` to see it in action.

***

MIT © [Sean King](https://twitter.com/seaneking)

[npm-badge]: https://img.shields.io/npm/v/generator-polymer-element.svg
[npm-url]: https://npmjs.org/package/generator-polymer-element

[yeoman]: http://yeoman.io
[gulp]: https://gulpjs.com
[postcss]: https://github.com/postcss/postcss
[babel]: http://babeljs.io
[rollup]: http://rollupjs.org
[browsersync]: http://browsersync.io/
[process-inline]: https://github.com/simplaio/gulp-process-inline
