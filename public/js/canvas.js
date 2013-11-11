$( document ).ready(function() {

	var canvasElement=document.getElementById("myCanvas");
	var ctx=canvasElement.getContext("2d");

	canvasElement.width=window.innerWidth;
	canvasElement.height=window.innerHeight;

	ctx.lineWidth="1";
	ctx.strokeStyle="black";

	var isDrawing = false;

	var drawing = function() {

		canvasElement.addEventListener("mousedown",function(event){
			isDrawing = true;
			ctx.beginPath();
		})

		canvasElement.addEventListener("mousemove",function(event){
			if(!isDrawing){ return }
			ctx.lineTo(event.clientX,event.clientY);
			ctx.stroke();
		})

		canvasElement.addEventListener("mouseup",function(){
			isDrawing = false;	
		})

		$('#myForm').on('change', '.drawing-style', function(e){
			e.preventDefault();
			var form = $('#myForm')

			$.ajax({
				url: form.prop('action'),
				type: form.prop('method'),
				data: form.serialize()
			}).done(function(d){
				ctx.strokeStyle=d.color;
				ctx.lineWidth=d.line_width;
			})
		})

	}
	drawing();	
	
	var logInButton = $('#log_in')
	var logInFunction = function() {
		logInButton.on('click', function(e){
			// this is where you pop up the login shit
			var email = window.prompt('Enter your email')
			var password = window.prompt('Enter your password')

			$.ajax({
				url: '/login',
				type: 'post',
				data: {email: email, password: password}
			}).done(function(d){
				if(d == 'true'){
					console.log('true')
					$('#overwrite').css("display","none")
					$('#with_this').css("display","block")
				}else{
					alert('You entered your information incorrectly')
				}	
			})

		})
	}
	logInFunction();

	var createAccountButton = $('#create_account')
	var createAccountFunction = function() {
		createAccountButton.on('click', function(e){
			// this is where you pop up the log in shit
			var email = window.prompt('Enter an email')
			var password = window.prompt('Enter a password')
			
			$.ajax({
				url: '/createaccount',
				type: 'post',
				data: {email: email, password: password}
			}).done(function(d){
				if(d){
					alert('INVALID EMAIL MOFUCKA')
				}
			})

		})
	}
	createAccountFunction();

	var logOutButton = $('#log_out')
	var logOutFunction = function() {
		logOutButton.on('click', function(e){
			$.ajax({
				url: '/logout',
				type: 'get'
			}).done(function(){
				window.location.assign('/')
			})
		})
	}
	logOutFunction();

});


// $( "#saving" ).submit(function(e) {
//   data = canvasElement.toDataURL("image/png")

//   // $("#image-data").val( data )
  
//   $.post( "/save-image", 
//   	{ drawing: { title: $('#saving input[type=text]').val(), 
//    		image_data: data } }, function( data ) {
//     		alert(data)
// 		});
//   e.preventDefault()
// });





// var dataURL = canvasElement.toDataURL();
// console.log(dataURL);
// document.getElementById('canvasImg').src = dataURL;
