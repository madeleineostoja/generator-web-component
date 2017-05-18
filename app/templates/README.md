# <%= props.name %>
[![Version][npm-badge]][npm-url] [![Build status][travis-badge]][travis-url] ![Size][size-badge] [![Published][webcomponents-badge]][webcomponents-url]

<%= props.description %>

## Installation & usage

Install <%= props.name %> with [Yarn](https://yarnpkg.com) or [Bower](https://bower.io)

```sh
$ yarn add <%= props.name %> --flat
```

```sh
$ bower install <%= props.github %>/<%= props.name %> --save
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

<%= props.name %>> relies on emerging standards, for full cross-browser support include the [WebComponentsJS](https://github.com/webcomponents/webcomponentsjs) polyfill on your page.

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/custom-elements-es5-adapter.js"></script>
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/webcomponents-loader.js"></script>
```

***

MIT © <%= props.author %>

[npm-badge]: https://img.shields.io/npm/v/<%= props.name %>.svg
[npm-url]: https://www.npmjs.com/package/<%= props.name %>
[travis-badge]: https://img.shields.io/travis/<%= props.github %>/<%= props.name %>.svg
[travis-url]: https://travis-ci.org/<%= props.github %>/<%= props.name %>
[size-badge]: https://badges.herokuapp.com/size/github/<%= props.github %>/<%= props.name %>/master/<%= props.name %>.html?gzip=true
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/<%= props.github %>/<%= props.name %>
