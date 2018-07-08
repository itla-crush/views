var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function(){
    consulta.search($(this).val()).draw();

    $("header").css({
        "height": "20%"
	})

    if ($("#inputBusqueda").val() == ""){

        $("header").css({
			"height": "auto",
			"background": "none"
		})

		$("#search").hide()

	} else {
		$("#search").fadeIn("fast");
	}
    
})