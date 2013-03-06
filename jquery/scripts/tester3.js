$(document).ready(function(){
// ----------------------------------------------------------------------------


// both methods below make paragraphs change on hover 
// compare the two to see how they differ 


$("p.odd").hover(
	function(){$(this).toggleClass("highlight");}
);


// NOTE: The class "highlight" is defined in the CSS stylesheet for this page.

// ----------------------------------------------------------------------------

$("p.even").hover(
	function(){$(this).css( { "font-size":"90%","color":"#f00" } );}, // NOTE the comma! 
	function(){$(this).css( { "font-size":"1.2em","color":"#000" } );}
);


// NOTE: The punctuation in JavaScript drives me crazy! 


// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
