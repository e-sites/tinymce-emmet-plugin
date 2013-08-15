/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */
tinymce.PluginManager.add('emmet', function (editor) {

	'use strict';

	function showSourceEditor() {
		editor.windowManager.open({
			title: "HTML Editor",
			width: editor.getParam("code_dialog_width", 600),
			height: editor.getParam("code_dialog_height", 500),
			url: 'editor.html',
			buttons: [
				{
					text: 'Ok',
					subtype: 'primary',
					onclick: function () {
						editor.windowManager.close(this);
					}
				},
				{
					text: 'Close',
					onclick: 'close'
				}
			]
		});
	}

	editor.addButton('code_emmet', {
		icon: 'code',
		tooltip: 'HTML Editor',
		onclick: showSourceEditor
	});

	editor.addMenuItem('code_emmet', {
		icon: 'code',
		text: 'HTML Editor',
		context: 'tools',
		onclick: showSourceEditor
	});
});