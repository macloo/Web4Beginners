# Web4Beginners

This collection of HTML and CSS files is intended to help beginners learn how Web pages are made.

Download the ZIP of this repo and open the files in your Web browser and in a text editor. Change them. Reload them in the browser and see what happens. This is how we learn.

## Background

I started writing a series of blog posts in February 2013 to encourage journalism educators to teach students how to code. The first post is [Get started with Web coding. Part 1: HTML and CSS](http://mindymcadams.com/tojou/2013/get-started-with-web-coding-part-1-html-and-css/). It's only about learning HTML and CSS.

Files that were relevant to that first post have been changed or deleted. 

## The files

Here is a guide to the new files:

**no_styles.html** is an HTML file with no CSS. It's about as bare and basic as you can get.

**index.html** is a proper HTML file with CSS, but not too much, and nothing fancy.

**with_normalize_only.html** is the same file with only one CSS stylesheet attached. You can real about **normalize.css** [here](http://nicolasgallagher.com/about-normalize-css/).

**with_styles_not_normalize.html** is the same file without **normalize.css**, but it has a basic stylesheet attached to it.

You can compare the four files listed above and look at the two stylesheets attached (or not attached) to them.

## Adding images

There are two more versions of the basic HTML file, and both of them have two images on the page.

**images_basic.html** just adds the images with no styles at all. It shows you how images appear naturally if you code them in between paragraphs.

**images_with_styles.html** is just what it says -- styles have been added to change the layout of the two images. A third stylesheet is attached to make it easy for you to look only at the styles that affect the images in this case.

The images are stored in a separate directory (folder) from the HTML files. As is typical, the folder is named **images**.

## CSS stylesheets

A typical website has its CSS stylesheets stored in a separate directory (folder) from the HTML files. Here the stylesheet files are all inside the folder named **styles**. (Some people would name the folder **css** instead.)

## Proper setup of your HTML

Beginners often pay insufficient attention to the correct structure of the basic document, particularly the required elements in the HEAD section. [HEAD.md](HEAD.md) is a guide that briefly explains the role of each line and its proper place and proper style. It covers the first eight lines in [index.html](index.html) here so that you can really understand what you're doing and what is correct. 


