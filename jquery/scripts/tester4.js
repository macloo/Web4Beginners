$(document).ready(function(){
// ----------------------------------------------------------------------------

// Here we insert a new paragraph on the page using JavaScript. This will not 
// appear if the user doesn't have JavaScript, which makes sense because there 
// won't be any clicking needed if the user doesn't have JavaScript! 

$("p:first").after("<p>Click anywhere below to advance through the tutorial slides.</p>");


// ----------------------------------------------------------------------------

// make the cursor change to the pointing hand, like a link 
$("div.item").hover(function() {
	$(this).css("cursor", "pointer");
});

// ----------------------------------------------------------------------------

var n = 0; // set the counter at 0

$("div.item").hide(); // hide all DIVs with class "item"

$("div.item:first").show(); // show only the first DIV with class "item"

// what to do when the DIV is clicked:  
$("div.item").click(function() {
	$(this).hide();
	$(this).next("div.item").show();
	n++;        // add 1 to the counter 
	
	// this tests to see if we are at the last DIV; if so, start over 
	if ( n >= $("div.item").length ) { // $("div.item").length tells us how many total in DOM
		$("div.item:first").show();
		n = 0;  // reset the counter
	}
});

// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
