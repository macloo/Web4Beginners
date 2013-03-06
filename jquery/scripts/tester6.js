$(document).ready(function(){
// ----------------------------------------------------------------------------


$('#button1').click(function() {
	$('#circle1').animate({ 
		width: 200,
		height: 200
	}, 2000);   // 2000 milliseconds = 2 seconds 
});

$('#button2').click(function() {
	$('#circle1').animate({ 
		width: 100,
		height: 100
	}, 2000);
});


// ----------------------------------------------------------------------------


$('#circle2').click(function() {
	var w = $(this).width();
	var h = $(this).height();
	if ( w <= 100 && h <= 100 ) { 
		$(this).animate({ 
			width: 200,
			height: 200
		}, 2000);
	} else {
		$(this).animate({ 
			width: 100,
			height: 100
		}, 2000);
	}
});


// ----------------------------------------------------------------------------


// 1000 milliseconds = 1 second
// this div has position:relative in the CSS 

var squarePos = 0;
$('#square1').click(function() {
	if (squarePos == 0) {
		$(this).animate( { left:'300' }, 1000);
		squarePos++;
	} else if (squarePos == 1) {
		$(this).animate( { left:'600' }, 1000);
		squarePos++;
	} else if (squarePos == 2) {
		$(this).animate( { left:'200' }, 1500);
		squarePos++;
	} else {
		$(this).animate( { left:'0'   }, 500);
		squarePos = 0;		
	}
});



// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
