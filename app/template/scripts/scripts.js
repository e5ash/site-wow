$(document).ready(function($) {
	$('form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "/order.php",
		    data: $(this).serialize()
		}).done(function() {
		    popupForm.css('display','none');
		    popupMessage.css('display','block');
		});
		return false;
	});
});



