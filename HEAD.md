# Today's Conventional Use of HTML, Part 1

I’ve noted a lot of confusion among students about HTML and HTML5. Here’s a rundown of how we write HTML today. If you disagree or have a source that disputes my assertions, tweet me at [@macloo](https://twitter.com/macloo) and refer to the item by its line number. 

First, the whole top part of a typical document in HTML5:

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Write a Good Title for SEO Here</title>
		<link rel="stylesheet" href="styles/normalize.css">
		<link rel="stylesheet" href="styles/style.css">
	</head>

Now, line by line:

## Line 1

	<!DOCTYPE html>

The top line of the document must be this, and only this, in HTML5. The word DOCTYPE may be all lowercase or all uppercase. See: 
<http://stackoverflow.com/questions/7020961/uppercase-or-lowercase-doctype>

## Line 2

	<html lang="en">

What appears between the quotation marks (in the language attribute) depends on the language used in the document (English, in this case). Some Americans will write "en-us"—but that seems unnecessary. 

<http://stackoverflow.com/questions/11318961/what-is-the-difference-between-html-lang-en-and-html-lang-en-us>

<http://nimbupani.com/declaring-languages-in-html-5.html>

Note that the HTML tag requires the closer -- 

	</html>

-- which comes at the very end of the document.

The basic structure of any HTML document is:

	<html>
	<head> ... </head>
	<body> ... </body>
	</html>

## Line 3

	<head>

The HEAD tag must follow the previous two lines. `<head>` and `</head>` enclose a standard set of tags, including `<title>` and `<title>`.  Things inside the HEAD tags are **not visible** on the page in the browser.

## Line 4

	<meta charset="utf-8">

This should always be the very first line to follow the HEAD tag.

<https://developer.mozilla.org/en-US/docs/HTML/HTML5/Introduction_to_HTML5>
 
Before HTML5, this was different. Now it is like this.

<http://stackoverflow.com/questions/4696499/meta-charset-utf-8-vs-meta-http-equiv-content-type>

The letters UTF may be all uppercase or all lowercase. No difference. 

<http://stackoverflow.com/questions/1095834/css-character-encoding-charset>

## Line 5

	<title>This Is Important</title>

Search engines put some weight on the text enclosed by the TITLE tags. In most Web browsers, you can see the TITLE in the browsers’ tab. In search engine results, the TITLE appears as a link.

The TITLE tags always appear enclosed by the HEAD tags.

## Lines 6 and 7

	<link rel="stylesheet" href="styles/normalize.css">
	<link rel="stylesheet" href="styles/style.css">

The LINK tag is one of a handful of HTML tags that does not have a separate closer tag. (These are called self-closing tags.) In a previous specification (XHTML), there was a forward slash before the final angle bracket in this tag. It looked like this:

	<link rel="stylesheet" href="style.css" />

HTML5 can accept that syntax, but **it is not required.** So the current trend is to go short, not long, and eliminate the unnecessary slash in the self-closing tags.

<http://stackoverflow.com/questions/4693939/self-closing-tags-void-elements-in-html5>

In this example, the LINK tag attaches an external CSS style sheet to the HTML document. In previous versions of HTML, we used an additional attribute in this tag: `type="text/css"`

This is **no longer needed,** so leave it out.

The stylesheet named **normalize.css** is widely used to ensure that pages will look the same regardless of the Web browser that is used to view them. You can [learn about it here](http://nicolasgallagher.com/about-normalize-css/) and [download it here](http://necolas.github.io/normalize.css/).

When you use **normalize.css**, you MUST list it first, before any other stylesheets. Typically you do not edit **normalize.css** at all. Just put your own styles in a separate CSS file, and link it separately as seen here.

When you learn more about CSS, [you can read this](http://jaydenseric.com/blog/forget-normalize-or-resets-lay-your-own-css-foundation) and decide whether you want to keep using **normalize.css**. Until then, **normalize.css** is your good friend.

## Line 8

	</head>

This is the closer for the HEAD tag. It is required. Note that everything listed above, between Line 3 and this item, Line 8, was enclosed in a pair of HEAD tags. 


*Part 2* will cover the structure of HTML documents in the BODY. 
