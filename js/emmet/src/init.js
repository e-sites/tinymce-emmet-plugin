(function (window, document) {
	
	'use strict';

	var tinymce = window.parent.tinymce,
		editor = tinymce.activeEditor,
		settings = editor.settings,
		tinymce = window.parent.tinymce,
		editor = tinymce.activeEditor,
		target = document.getElementById('code'),
		cm;

	target.value = editor.getContent({format : 'raw'});

	cm = CodeMirror.fromTextArea(target, {
		mode : 'text/html',
		lineNumbers : true,
		indentWithTabs: true,
		autofocus: true
	});

	function getSelectedRange() {
		return {from: cm.getCursor(true), to: cm.getCursor(false)};
	}

	function autoFormatSelection() {
		var range = getSelectedRange();
		cm.autoFormatRange(range.from, range.to);
	}

	// Auto formatter
	CodeMirror.commands['selectAll'](cm);
	autoFormatSelection();

	// Save content
	cm.on('change', function (cm) {
		editor.setContent( cm.getTextArea().value );
		editor.nodeChanged();
		cm.save();
	});

	// For some reason calling setContent onchange is not enough
	// with this listener we make sure that every rule of code will be send back to tinycme
	cm.on('blur', function (cm) {
		editor.setContent( cm.getTextArea().value );
		editor.nodeChanged();
		cm.save();
	});

}(window, document));