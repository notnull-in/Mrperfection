//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "8 July 2048 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	