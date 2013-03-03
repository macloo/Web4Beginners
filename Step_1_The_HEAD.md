# The 411 on HTML5, Part 1

I’ve noted a lot of confusion among students about HTML5. Here’s a rundown of how we write HTML today. If you disagree or have a source that disputes my assertions, tweet me at @macloo and refer to the item by its number. 
First, the whole top part of a typical document in HTML5:

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Sample HTML5 Page: Write a Good Title for SEO Here</title>
		<link rel="stylesheet" href="style.css">
		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"> </script>
		<![endif]-->
	</head>

Now, line by line:

## [Line 1]

	<!DOCTYPE html>

The top line of the document must be this, and only this, in HTML5. The word DOCTYPE may be all lowercase or all uppercase. See: 
<http://stackoverflow.com/questions/7020961/uppercase-or-lowercase-doctype>

## [Line 2]

	<html lang="en">

What appears between the quotation marks (in the language attribute) depends on the language used in the document (English, in this case). Some Americans will write "en-us"—but that seems unnecessary. 
http://stackoverflow.com/questions/11318961/what-is-the-difference-between-html-lang-en-and-html-lang-en-us
http://nimbupani.com/declaring-languages-in-html-5.html
Note that the HTML tag requires the closer </html> —which comes at the very end of the document.

The basic structure of any HTML document is:

	<html>
	<head> ... </head>
	<body> ... </body>
	</html>

## [Line 3]

	<head>

The HEAD tag must follow those two lines. HEAD and /HEAD enclose a standard set of tags, including TITLE and /TITLE. 

## [Line 4]

	<meta charset="utf-8">

This should always be the very first line to follow the HEAD tag.
https://developer.mozilla.org/en-US/docs/HTML/HTML5/Introduction_to_HTML5 
Before HTML5, this was different. Now it is like this.
http://stackoverflow.com/questions/4696499/meta-charset-utf-8-vs-meta-http-equiv-content-type 
The letters UTF may be all uppercase or all lowercase. No difference. 
http://stackoverflow.com/questions/1095834/css-character-encoding-charset

## [Line 5]

	<title>This Is Important</title>

Search engines put some weight on the text enclosed by the TITLE tags. In most Web browsers, you can see the TITLE in the browsers’ tab. In search engine results, the TITLE appears as a link.
The TITLE tags always appear enclosed by the HEAD tags.

## [Line 6]

	<link rel="stylesheet" href="style.css">

The LINK tag is one of a handful of HTML tags that does not have a separate closer tag. (These are called self-closing tags.) In a previous specification (XHTML), there was a forward slash before the final angle bracket in this tag. It looked like this:

	<link rel="stylesheet" href="style.css" />

HTML5 can accept that syntax, but it is not required. So the current trend is to go short, not long, and eliminate the slash in the self-closing tags.
http://stackoverflow.com/questions/4693939/self-closing-tags-void-elements-in-html5

This example of the LINK tag attaches an external CSS style sheet to the HTML document. In previous versions of HTML, we used an additional attribute in this tag: type="text/css" 
This is no longer needed, so leave it out.

## [Line 7]

	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"> </script>
	<![endif]-->

This is called the HTML5 shiv. It is a chunk of JavaScript code hosted at Google: 
<http://html5shiv.googlecode.com/svn/trunk/html5.js>
The three lines work together to look at the browser in which your Web page appears. If the browser is IE (Internet Explorer) and less than version 9, the JavaScript will run, and those old browsers will be able to display your HTML5 code. In other words, the shiv is a fixer for bad old IE browsers.
The three lines must be enclosed in the HEAD tags. 
It is best to place this code after any LINK tags to CSS files.
http://code.google.com/p/html5shiv/

## [Line 8]

	</head>

This is the closer for the HEAD tag. It is required. Note that everything listed above, between No. 3 and this item, No. 10, was enclosed in a pair of HEAD tags. 


*Part 2* will cover the structure of HTML documents in the BODY. 
