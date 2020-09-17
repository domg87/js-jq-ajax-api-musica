$(document).ready(function() {


	$.ajax({
		url:"https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET",
		success: function(data, stato) {
			//console.log(data.response);
			var cds = data.response;
			for (var i = 0; i < cds.length; i++) {
				var cd = cds[i];
				console.log(cd);

				var source = $("#entry-template").html();
				var template = Handlebars.compile(source);
				var html = template(cd);
				
				$(".cds-container").append(html); 
			}
		},
		error: function(richiesta, stato, errore) {
			alert("Errore " + errore);
		}

	});
});