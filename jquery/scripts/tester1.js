$(document).ready(function(){
// ----------------------------------------------------------------------------

$("h2").next("p").hide(); // hides the next paragraph after any H2 

$("h2").click(function() {
	$(this).next("p").toggle(); // toggles show/hide for the next paragraph
});

// ----------------------------------------------------------------------------

// the variable (var) "name" stores what you type
var name = prompt("What is your name?");  

// writes new text at end of the paragraph with ID "greet" 
$("p#greet").append("Welcome, " + name + "!");  

// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
