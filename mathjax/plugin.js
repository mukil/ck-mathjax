CKEDITOR.plugins.add('mathjax', {
    init: function( editor ) {

        editor.addCommand('mathjaxDialog', new CKEDITOR.dialogCommand('mathjaxDialog'))

        editor.ui.addButton('MathJax Dialog', {
            label: 'Open LaTeX/MathML Input Dialog',
            command: 'mathjaxDialog', toolbar: 'others',
            icon: CKEDITOR.plugins.getPath('mathjax') + 'icons/fvonx.png'
        })

    }
});

CKEDITOR.dialog.add('mathjaxDialog', CKEDITOR.plugins.getPath('mathjax') + 'dialogs/mathjax.js')

