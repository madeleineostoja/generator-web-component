# Polymer Element Generator 
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

A mildly opinionated [Yeoman][yeoman] generator for scaffolding [Polymer][polymer] elements, based on Polymer's [seed-element][seed-element].

Includes an optional buildstep for modern component development, which includes [Babel][babel], [Rollup][rollup], [PostCSS][postcss], inline asset processing, and [BrowserSync][browsersync].

--

### Installation & Usage

First install Yeoman 

```sh
$ npm install -g yo
```

Then install the generator 

```sh
$ npm install -g generator-polymer-element
```

Then use it

```sh
$ yo polymer-element
```


### TODO

- Fix failing templating on bower.json and README templates
- Make buildstep optional :-P
- Add basic tests

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
[postcss]: https://github.com/postcss/postcss
[babel]: http://babeljs.io
[rollup]: http://rollupjs.org
[browsersync]: http://browsersync.io/
