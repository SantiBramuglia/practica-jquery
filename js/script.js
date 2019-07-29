var usuario;
var repositorios;
var contador = 0; 
$(document).ready(function(){
	
	$("#boton_cargar").click(function(){
		
		
		$.ajax({
		method: "GET",
		url: "https://api.github.com/users/" + $("#inputusser").val()
		})
		.done(function( respuestGIT) {
		usuario = respuestGIT;
		
		$("#nombre_usuario").text(usuario.name);
		$("#id").text(usuario.id);
		$("#nombre_empresa").text(usuario.company);
		$("#numero_repositorios").text(usuario.public_repos);
		$("#numero_gits").text(usuario.public_gists);
		$("#numero_seguidores").text(usuario.following);
		$("#numero_seguidos").text(usuario.followers);
		$("#avatar").attr("src", "https://avatars2.githubusercontent.com/u/" + usuario.id );
	});
		$.ajax({
		method: "GET",
		url: 'https://api.github.com/users/'+ $("#inputusser").val()+ '/repos'
		})
		.done(function( respuestGITRepo) {
		repositorios = respuestGITRepo;
		
		
		var contenido ="";
		for (var i=0; i<repositorios.length;i++){
			contenido += '<tr><td class="dato" id="ID_repositorio">'+ repositorios[i].id +'</td><td class="dato" id="repositorio">'+ repositorios[i].name +'</td><td class="dato" id="descripcion">'+ repositorios[i].description +'</td></tr>';
			}
			$("#cuerpo_table").html(contenido);
	

		});
			
	
})

	
	$("#numero_seguidos").click(function(){
		$("#numero_seguidos").css("color", "red");
	
	})
	$("#numero_seguidores").click(function(){
		$("#numero_seguidores").css("color", "red");
	
	})
	$(".dato").click(function(){
		contador++;
		$("#clicks_en_dato").text(contador);
	
	})
	$("#avatar").hover(function(){
			$("#avatar").animate({opacity:1},100);
			}).mouseout(function(){
			$("#avatar").animate({opacity:0.4},100);
	});
	$("#boton_reiniciar").click(function(){
		
		$("#nombre_usuario").text("-");
		$("#id").text("-");
		$("#nombre_empresa").text("-");
		$("#numero_repositorios").text("-");
		$("#numero_gits").text("-");
		$("#numero_seguidores").text("-");
		$("#numero_seguidos").text("-");
		$("#avatar").attr("src", "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png");
		var contenido ="";
		for (var i=0; i<2;i++){
			contenido += '<tr><td class="dato" id="ID_repositorio">'+ "-" +'</td><td class="dato" id="repositorio">'+ "-" +'</td><td class="dato" id="descripcion">'+ "-" +'</td></tr>';
			}
			$("#cuerpo_table").html(contenido);
	})
	$("#cuerpo_table").click(function(){
		alert("EROR ERROR ERROR ERROR");
		$("#cuerpo_table").css("color", "red");
	
	})
	

	
})