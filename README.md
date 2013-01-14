## The ck-mathjax plugin

A simple integration of the MathJax Renderer <www.mathjax.org> for users of the CKEditor 4.x. <www.ckeditor.com>

## 2 Sidenotes

You must integrate the MathJax library into the HTML page serving the CKEditor to your userss on your own, this plugin does not ship with a MathJax installation. Therefore the installation instructions on <www.mathjax.org> will be useful for getting this extension running.

The integration depends on MathJax being configured to just use the 'HTML-CSS' output option, since SVG stealthe focus of the mousepointer in that way, that one cannot edit existing formulas by the expected means of the CKEditor anymore.

## Changelog

1.0-SNAPSHOT,  Jan 14, 2013

All basic mathjax functionality is provided by means of a modal dialog which pops up after the user has pressed the 'f(x)' icon in the ck-editor toolbar.

Copyright 2013
Malte Reißig
