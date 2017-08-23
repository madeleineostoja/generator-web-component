# <%= props.name %>
[![Version][release-badge]][releases-url] [![Build status][travis-badge]][travis-url] ![Size][size-badge] [![Published][webcomponents-badge]][webcomponents-url]

<%= props.description %>

## Installation & usage

Install <%= props.name %> with Bower

```sh
$ bower i <%= props.github %>/<%= props.name %> --save
```

Import it into the `<head>` of your page

```html
<link rel="import" href="/bower_components/<%= props.name %>/<%= props.name %>.html">
```

Then use <%= props.name %> in your project

```html
<<%= props.name %>></<%= props.name %>>
```

### Polyfills for cross-browser support

<%= props.name %> relies on emerging standards, for full cross-browser support include the [WebComponentsJS](https://github.com/webcomponents/webcomponentsjs) polyfill on your page.

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/webcomponents-loader.js"></script>
```

### Transpiling for IE11 support

Web Components like <%= props.name %> are distributed as ES6 classes, which are supported in all evergreen browsers. To support Internet Explorer 11 you should transpile <%= props.name %> to ES5 and use the `webcomponentsjs` `custom-elements-es5-adapter.js` shim. 

The easiest way to do this is by including [polymer-build][polymer-build] in your buildstep of choice. Then just include the ES5 adapter on your page

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/custom-elements-es5-adapter.js"></script>
```

***

MIT © <%= props.author %>

[release-badge]: https://img.shields.io/github/release/<%= props.github %>/<%= props.name %>.svg
[releases-url]: https://github.com/<%= props.github %>/<%= props.name %>/releases
[travis-badge]: https://img.shields.io/travis/<%= props.github %>/<%= props.name %>.svg
[travis-url]: https://travis-ci.org/<%= props.github %>/<%= props.name %>
[size-badge]: https://badges.herokuapp.com/size/github/<%= props.github %>/<%= props.name %>/master/<%= props.name %>.html?gzip=true
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/<%= props.github %>/<%= props.name %>
[polymer-build]: https://github.com/Polymer/polymer-build
