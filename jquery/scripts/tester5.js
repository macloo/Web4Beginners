$(document).ready(function(){
// ----------------------------------------------------------------------------

// 1. "First, click this paragraph ..." basic screen overlay

$("p#shader1").click(function(event) { // chained actions, next 6 lines  

	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    .click(function() { $('div#overlay').remove(); }) // NOTE: this builds in removal
	.appendTo('body');

});

// ----------------------------------------------------------------------------

// 2. "Okay, let's try it again ..." screen overlay and no scrolling 

$("p#shader2").click(function(event) { 

	$('body').css('overflow', 'hidden'); // hide the scrollbars!

	// same chained actions, next 6 lines  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    .click(function() { 
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto'); 
		}) // NOTE: this .click function builds in removal AND restores scrollbars 
	.appendTo('body');

});

// ----------------------------------------------------------------------------

// 3. "Next, we'll see how ..." add a box DIV on top of the overlay DIV 

$("p#shader3").click(function(event) { 

	$('body').css('overflow', 'hidden'); 
	  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    .click(function() { 
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto'); 
		})  
	.appendTo('body');
	
	// add the box 
	$('<div id="lightbox"></div>')
	.css( { "width":"400px","height":"300px","top":"20px","left":"20px" } ) // CSS for the box 
    .click(function() { 
		$('div#lightbox').remove();  // remove the box when clicked 
		})  
	.appendTo('body');

});

// ----------------------------------------------------------------------------

// 4. "We want to add a photo ..."

$("p#shader4").click(function(event) { 

	$('body').css('overflow', 'hidden'); 
  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    .click(function() { 
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto'); 
		})  
	.appendTo('body');

	$('<div id="lightbox"></div>')
	.css( { "width":"400px","height":"300px","top":"20px","left":"20px" } )  
    .click(function() { 
		$('div#lightbox').remove();  
		})  
	.appendTo('body');
	
	// below is the only new stuff added to this step 
	$('<img>')
	.attr("src", "images/vancouver3.jpg") // usually we'd get the image URL from the HTML 
	.appendTo('#lightbox'); // NOTE: img goes into DIV with ID "lightbox" 

});

// ----------------------------------------------------------------------------

// 5. "Ah, more new steps! ..."

$("p#shader5").click(function(event) { 

	$('body').css('overflow', 'hidden'); 
  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    // deleted removal code 
	.appendTo('body');

	$('<div id="lightbox"></div>')
	.css( { "top":"20px","left":"20px" } )  
	// deleted removal code 
	.appendTo('body');
	 
	$('<img>')
	.attr("src", "images/vancouver3.jpg")  
	.css('padding', '20px') // this padding puts a white border around the photo 
	.click(function() { // added removal code 
		$('div#lightbox').remove();
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto');
		})  
	.appendTo('#lightbox');  

});

// ----------------------------------------------------------------------------

// 6. "Now, to center the photo ..."

// here is our new function to position the lightbox DIV 
function positionLightbox() {
	var top = ($(window).height() - $('#lightbox').height()) / 2;
	var left = ($(window).width() - $('#lightbox').width()) / 2;
	
	$('#lightbox')
	.css({
		'top': top + $(document).scrollTop(),
		'left': left
		})
	.fadeIn(); // love this
}

$("p#shader6").click(function(event) { 

	$('body').css('overflow', 'hidden'); 
  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow') 
	.appendTo('body');

	$('<div id="lightbox"></div>')
	.css( { "top":"20px","left":"20px" } )  
	.hide() // added in step 6 so we don't see photo before it's ready 
	.appendTo('body');
	 
	$('<img>')
	.attr("src", "images/vancouver3.jpg")  
	.css('padding', '20px')
	.load(function() {  positionLightbox();  }) // call the new function! 
	.click(function() {  
		$('div#lightbox').remove();
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto');
		})  
	.appendTo('#lightbox');  

});

// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
