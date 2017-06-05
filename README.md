# monad-theme-default
Default theme for the Monad CMS

## Installation
```sh
$ npm install --save monad-theme-default
```

## Usage
Either `@import "./sass/style"` in your own SASS file, or add a `<link>` to
`/path/to/theme/dist/monad.css` in your template's `<head>`.

Note the `dist` folder is meant to be publicly available; you should symlink it
or use something like `grunt-contrib-copy` to expose these files.

## Bootstrap
The default theme depends on Bootstrap. For best results, install it and
`@import` or `<link>` it in your SASS/template:

```sh
$ npm install --save bootstrap-sass
```

```css
@import '/path/to/node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
@import '/path/to/node_modules/monad-theme-default/sass/style';
```

...or...

```html
<head>
    <link rel="stylesheet" href="/path/to/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="/path/to/monad/dist/monad.css">
</head>

```

