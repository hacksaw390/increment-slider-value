$(document).ready(function(){
	
	$("#slider").slider({

		value: 100,
		max: 500,
		min: 0,
		step: 50,
		slide: function(event, ui){
			$("#amount").val("Tk. "+ui.value)
		}
	});
		$("#amount").val("Tk. "+ $("#slider").slider("value"));

});