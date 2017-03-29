# hexo-helper-partial-page

[![node](https://img.shields.io/node/v/hexo-helper-partial-page.svg?style=flat-square)](https://www.npmjs.com/package/hexo-helper-partial-page)
[![npm version](https://img.shields.io/npm/v/hexo-helper-partial-page.svg?style=flat-square)](https://www.npmjs.com/package/hexo-helper-partial-page)
[![npm downloads](https://img.shields.io/npm/dt/hexo-helper-partial-page.svg?style=flat-square)](https://www.npmjs.com/package/hexo-helper-partial-page)
[![GitHub release](https://img.shields.io/github/release/kulikala/hexo-helper-partial-page.svg?style=flat-square)](https://github.com/kulikala/hexo-helper-partial-page/releases/latest)
[![MIT License](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](LICENSE)

[Hexo] helper plugin for including and rendering partial content.

This plugin adds 2 helpers: `partial_page` and `partial_content`.

`partial_page` is useful when you want to write contents on separate files and render them using respective theme templates.
`partial_page` synchronously reads a given file in `source` folder,
renders the file as a single page using `partial` helper,
and outputs rendered HTML directly at the helper tag position.

`partial_content` is essentially same with `partial_page` but this helper does not render a page with `partial` helper.
`partial_content` synchronously reads a given file in `source` folder,
renders the file with matching renderer plugin,
and outputs rendered HTML directly at the helper tag position.

See [Usage](#usage) section for more details.

## Installation

``` bash
$ npm install hexo-helper-partial-page --save
```

## Usage

For example, put a source file with front-matter in `source/_partials` folder like this:

file: `source/_partials/part.md`

```markdown:source/_partials/part.md
---
layout: partial
---
# H1

Some text

1. First ordered list item
1. Another item
```

Put a simple layout file in your theme's `layout` folder like this:

file: `layout/partial.ejs`

```ejs:layout/partial.ejs
<div class="part-wrapper">
  <div class="part-content">
    <%- page.content %>
  </div>
</div>
```

Then, add `partial_page` tag in your EJS template:

```ejs
<%- partial_page('_partials/part.md') %>
```

Yields:

```html
<div class="part-wrapper">
  <div class="part-content">
    <h1 id="H1"><a href="#H1" class="headerlink" title="H1"></a>H1</h1><p>Some text</p>
<ol>
<li>First ordered list item</li>
<li>Another item</li>
</ol>

  </div>
</div>
```

Meanwhile, if you add `partial_content` tag in your EJS template:

```ejs
<%- partial_content('_partials/part.md') %>
```

Yields:

```html
<h1 id="H1"><a href="#H1" class="headerlink" title="H1"></a>H1</h1><p>Some text</p>
<ol>
<li>First ordered list item</li>
<li>Another item</li>
</ol>
```

Make sure to use `<%- partial_page() %>` and not `<%= partial_page() %>` to prevent EJS from escaping the generated string.

## Local Variables & Fragment Caching

`partial_page` accepts 2nd and 3rd parameters same with `partial` helper.

You can define local variables by passing the 2nd parameter:

```ejs
<%- partial_page('_partials/part.md', {title: 'Hello World'}) %>
```

You can enable fragment caching with the 3rd parameter:

```ejs
<%- partial_page('_partials/part.md', {}, {cache: true}) %>
```

## Configurations

`partial_page` can parse and render any files saved in the `source` folder.
At the same time, you can put files in `source/_partials/` folder,
or `source/deep/depth/folder/_partials/` folder for example.

Source files saved in the `_partials` folder are almost same with other source files except they will be removed from the route list and not generate particular HTML files.

You can change the name of `_partials` folder which has this feature adding `partial_dir` to `_config.yml`.

```yaml
partial_dir: _partials
```

## License

MIT

[Hexo]: http://hexo.io/
