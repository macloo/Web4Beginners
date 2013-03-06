$(document).ready(function(){
// ----------------------------------------------------------------------------

// make the cursor change to the pointing hand, like a link 
$("img#mask").hover(function() {
	$(this).css("cursor", "pointer");
});

// ----------------------------------------------------------------------------

var i = 1; // set the counter to 1 

// list all your image URLs in an array named pics  
var pics = ["images/vancouver1.jpg", 
"images/vancouver2.jpg",
"images/vancouver3.jpg",
"images/vancouver4.jpg"];

// what to do when the image is clicked:  
$("img#mask").click(function(event) {
	$("img#mask").attr("src", pics[i]); 
	if (i < pics.length - 1) {    // works for any number of images in pics 
		i++;   // add 1 to the counter 
	} else {
		i = 0; // reset the counter
	}
});


// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
