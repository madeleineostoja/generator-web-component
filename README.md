# Web Component Generator [![NPM version][npm-badge]][npm-url]

Quickly scaffold lightweight web components with [Yeoman][yeoman], with just what's needed and none of the cruft. Built against the v1 Web Components spec.

### Contents

<!-- MarkdownTOC -->

- [Features](#features)
- [Installation & usage](#installation--usage)
- [Components for apps](#components-for-apps)
- [Standalone components](#standalone-components)
- [Todo](#todo)

## Features

- Generate standalone projects for distribution, or single file elements inside your own apps
- Choose whether to bundle a framework like [Polymer][polymer] or build barebones
- Optionally include Shadow DOM template boilerplate
- Standalone projects come with a basic testing setup via [Web Component Tester][wct] and a beautiful demo page served with [browsersync][browsersync]

Check out the files in `app/templates` in this repo for a better idea of what you'll get.

## Installation & usage

Install Yeoman and the component generator with NPM or Yarn

```sh
$ npm i -g yo generator-web-component
```

Then run it

```sh
$ yo web-component
```

## Components for apps

To create a new web component for use inside a web app, select `'Part of an app'` when prompted. This will generate a single HTML file under the name of your element with the bare minimum of boilerplate.

## Standalone components

To create a standalone element project in its own repo, select `'Standalone'` when prompted. This will scaffold out a modern Web Component project, including a lightweight testing setup, a beautiful demo page, and standard config files.

It's recommended to build your element as an ES6 class directly in the `[element-name].html` file provided (or change it to a JavaScript file if you like), and allow the consumers of your element to do their own transpilation to ES5 if they want to support legacy browsers.

The following NPM scripts will be configured for you:

Script     | Description                                                                                                           
---------- | -----------                                                                                                           
`test`     | Runs your WCT test suite in local browsers                                                                            
`posttest` | Runs Eslint after tests (eg: for Travis)                                                                              
`demo`     | Runs a demo server (with Browsersync) which reloads whenever you make changes in your component

Run the scripts with NPM

```sh
$ npm run demo
```

> The demo server is available on `localhost:3000`

***

### Todo

There are a few more options that should be added to this generator, if you'd like to contribute a PR adding any of these features I'll gladly merge it!

- Add optional (and configurable) buildstep ([issue](https://github.com/seaneking/generator-web-component/issues/5))
    - Rollup module bundling
    - PostCSS + Autoprefixer 
    - ES5 transpilation + minification 
- Add SkateJS framework option ([issue](https://github.com/seaneking/generator-web-component/issues/4))
- Add JS Module distribution (rather than HTML file) as an option ([issue](https://github.com/seaneking/generator-web-component/issues/6))
- Add basic unit tests for generator ([issue](https://github.com/seaneking/generator-web-component/issues/7))
- Bundle Yeoman and Browsersync into `web-component-cli`? In similar vein to `polymer-cli` but not tied to a framework


***

MIT © [Sean King](https://twitter.com/seaneking)

[npm-badge]: https://img.shields.io/npm/v/generator-web-component.svg
[npm-url]: https://npmjs.org/package/generator-web-component

[yeoman]: http://yeoman.io
[polymer]: https://polymer-project.org
[wct]: https://github.com/Polymer/web-component-tester
[browsersync]: http://browsersync.io/
