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

### Default Emmet keybindings
As stated on <a href="https://github.com/emmetio/codemirror">https://github.com/emmetio/codemirror</a>:

* `Cmd-E` or `Tab`: Expand abbreviation
* `Cmd-D`: Balance Tag (matches opening and closing tag pair)
* `Shift-Cmd-D`: Balance Tag Inward
* `Shift-Cmd-A`: Wrap With Abbreviation
* `Ctrl-Alt-Right`: Next Edit Point
* `Ctrl-Alt-Left`: Previous Edit Point
* `Cmd-L`: Select line
* `Cmd-Shift-M`: Merge Lines
* `Cmd-/`: Toggle Comment
* `Cmd-J`: Split/Join Tag
* `Cmd-K`: Remove Tag
* `Shift-Cmd-Y`: Evaluate Math Expression
* `Ctrl-Up`: Increment Number by 1
* `Ctrl-Down`: Decrement Number by 1
* `Alt-Up`: Increment Number by 0.1
* `Alt-Down`: Decrement Number by 0.1
* `Ctrl-Alt-Up`: Increment Number by 10
* `Ctrl-Alt-Down`: Decrement Number by 10
* `Cmd-.`: Select Next Item
* `Cmd-,`: Select Previous Item
* `Cmd-B`: Reflect CSS Value

##Roadmap
* Support for TinyMCE 3.5.8
* Make it more customizable
* Implement Git Flow branch model
* More documentation
* More testing
* Any other suggestions are welcome!

##Support
Written for TinyMCE 4.x.
Please note: I have written this plugin in a couple hours, so please report issues if you find any.
Make sure to check out the browser support of <a href="http://codemirror.net/#browsersupport">CodeMirror</a> as well if you run into any problems.

##License
Copyright (c) 2013 e-sites Licensed under the MIT license.
