# <%= props.name %>
![][bower-badge] [![][travis-badge]][travis-url] [![][bowerdeps-badge]][bowerdeps-url]

<%= props.description %>

### Installation & usage

Install <%= props.name %> with Bower

```sh
$ bower install <%= props.name %> --save
```

Import it into the `<head>` of your page

```html
<link rel="import" href="/bower_components/<%= props.name %>/<%= props.name %>.html">
```

Then use <%= props.name %> in your project

```html
<<%= props.name %>></<%= props.name %>>
```

Note for cross-browser support you should also include the [Web Components Polyfill][webcomponents].

--

### License

MIT © <%= props.author %>

[webcomponents]: https://github.com/webcomponents/webcomponentsjs

[bower-badge]: https://img.shields.io/bower/v/<%= props.name %>.svg
[bowerlicense-badge]: https://img.shields.io/bower/l/<%= props.name %>.svg
[travis-badge]: https://img.shields.io/travis/<%= props.github %>/<%= props.name %>.svg
[travis-url]: https://travis-ci.org/<%= props.github %>/<%= props.name %>
[bowerdeps-badge]: https://img.shields.io/gemnasium/<%= props.github %>/<%= props.name %>.svg
[bowerdeps-url]: https://gemnasium.com/bower/<%= props.name %>
