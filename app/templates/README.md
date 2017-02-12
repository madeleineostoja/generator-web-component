# <%= props.name %>
[![Build status][travis-badge]][travis-url] [![Bower dependencies][bowerdeps-badge]][bowerdeps-url] ![Version][bower-badge] [![Published][webcomponents-badge]][webcomponents-url]

<%= props.description %>

### Installation & usage

Install <%= props.name %> with Bower

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

#### Polyfills for cross-browser support
<%= props.name %>> relies on emerging standards, for full cross-browser support include the [Web Components Lite][webcomponents] polyfill.

```sh
bower i webcomponentsjs --save
```

```html
<script src="/bower_components/webcomponentsjs/web-components-lite.js"></script>
```

--

MIT © <%= props.author %>

[webcomponents]: https://github.com/webcomponents/webcomponentsjs

[bower-badge]: https://img.shields.io/bower/v/<%= props.name %>.svg
[bowerlicense-badge]: https://img.shields.io/bower/l/<%= props.name %>.svg
[travis-badge]: https://img.shields.io/travis/<%= props.github %>/<%= props.name %>.svg
[travis-url]: https://travis-ci.org/<%= props.github %>/<%= props.name %>
[bowerdeps-badge]: https://img.shields.io/gemnasium/<%= props.github %>/<%= props.name %>.svg
[bowerdeps-url]: https://gemnasium.com/bower/<%= props.name %>
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/<%= props.github %>/<%= props.name %>.svg
