# Polymer Element Generator 
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

Quickly scaffold and develop modern [Polymer][polymer] elements with [Yeoman][yeoman], based on Polymer's [seed-element][seed-element] and built as an ES6 class.

The generator comes bundled with a [Gulp][gulp] buildstep which includes [Babel][babel], [Rollup][rollup], [PostCSS][postcss], inline asset processing, and [BrowserSync][browsersync].

--

### Installation & usage

Install Yeoman and the element generator

```sh
$ npm install -g yo generator-polymer-element
```

Then use it

```sh
$ yo polymer-element
```

### Developing your element 
Your element lives in the `src` folder and is compiled to the project root by Gulp. To build it run `gulp build`, or the default `gulp` task on your command line.

It's built with upcoming standards as an ES6 class. See Polymer's primer on using ES6 to build components: [Building web components using ES6 classes][using-es6].

You can write Javascript and styles directly inline, or split them into files and get Gulp to inline them by adding an `inline` property to link and script tags.
```html
<!-- Inline assets with Gulp -->
<link rel="stylesheet" src="./my-element.css" inline>
<script src="./my-element.js" inline></script>
```

Inline scripts and styles can still be processed via Gulp, thanks to [`gulp-process-inline`][process-inline].

```html
<script>
    // Transpiled with Babel, even though it's in HTML
    let myVar = 'my-var';
    () => console.log(myVar);
</script>
```

Module bundling is handled with [Rollup][rollup], which allows you to import and export both ES6 and CommonJS modules.

```js
// Require modules using ES6 syntax, Rollup will bundle them for you
import foo from 'bar';
foo(); 
```

### Serving locally
You can serve your element locally with BrowserSync. Just run `gulp serve`, or the default `gulp` command, then go to `localhost:3000` to see your component page. You have a component demo in the `demo` folder, go to `localhost:3000/demo` to see it in action.

### TODO

- Add basic tests
- Make buildstep (+ES6) optional

--

### License

MIT © [Sean King](https://github.com/seaneking)

[npm-image]: https://badge.fury.io/js/generator-polymer-element.svg
[npm-url]: https://npmjs.org/package/generator-polymer-element
[daviddm-image]: https://david-dm.org/seaneking/generator-polymer-element.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/seaneking/generator-polymer-element

[yeoman]: http://yeoman.io
[polymer]: http://polymer-project.org
[seed-element]: https://github.com/PolymerElements/seed-element
[gulp]: https://gulpjs.com
[postcss]: https://github.com/postcss/postcss
[babel]: http://babeljs.io
[rollup]: http://rollupjs.org
[browsersync]: http://browsersync.io/

[using-es6]: https://www.polymer-project.org/1.0/blog/es6
[process-inline]: https://github.com/simplaio/gulp-process-inline
