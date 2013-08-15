tinymce-emmet-plugin
====================

<blockquote><p>A TinyMCE plugin that provides an HTML editor including all <a href="https://github.com/emmetio/emmet" target="_blank">Emmet</a> features (formerly Zen Coding).</p></blockquote>

First and foremost, I really must give credit to Sergey Chikuyonok (of Emmet fame) and the good folk of <a href="http://codemirror.net/" target="_blank">CodeMirror</a>.
All I did was wrap both libraries up in a TinyMCE plugin ;-)

A demo is located at: <a href="http://github.e-sites.nl/tinymce-emmet-plugin/">http://github.e-sites.nl/tinymce-emmet-plugin/</a>

##Getting started
Create an 'emmet' directory in the plugin file structure and copy/paste at least the following directories and files:

```
/tinymce/plugins/emmet/css
/tinymce/plugins/emmet/js
/tinymce/plugins/emmet/editor.html
/tinymce/plugins/emmet/plugin.js
/tinymce/plugins/emmet/plugin.min.js
```

Pass along the name of the plugin to the <code>plugins</code> property of the <code>init</code> method and you're good to go.
```js
tinymce.init({
	selector: '#editor',
	plugins: 'emmet',
	width: 800,
	height: 400
});
```

##Roadmap
* Refactoring of editor.html
* Make it more customizable
* Better documentation
* More testing
* Any other suggestions are welcome!

##Support
Written for TinyMCE 4.x.
Please note: I have written this plugin in a couple hours, so please report issues if you find any.
Make sure to check out the browser support of <a href="http://codemirror.net/#browsersupport">CodeMirror</a> as well if you run into any problems.

##License
Copyright (c) 2013 e-sites Licensed under the MIT license.
