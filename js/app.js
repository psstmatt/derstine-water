/* global $,document,console,Parse
Mailgun + Parse Tutorial via Raymond Camden:
http://www.raymondcamden.com/2013/11/12/Building-a-Contact-Form-with-Parse-and-Mailgun

Sweet Alerts:
http://tristanedwards.me/sweetalert
*/

$(document).ready(function() {
	
	var parseAPPID = "OfFV6t6an9uhh7hjr4UP96x9uzltevBY3pdTYyNJ";
	var parseJSID = "SPP068B92zA7jnOVdluZwEWCMtnac3ggtrs01BLl";
	
	Parse.initialize(parseAPPID, parseJSID);
	var CommentObject = Parse.Object.extend("CommentObject");
	
	$("#messageForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.phone = $("#phone").val();
		data.tier = $("#tier option:selected").val();
		data.message = $("#message").val();

		var comment = new CommentObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				// alert("Thanks for contacting us. We will be in touch soon!");
				sweetAlert("Good job!", "We'll be contacting you shortly!", "success")
			},
			error:function(e) {
				console.dir(e);
				sweetAlert("Oops...", "Something went wrong! Try again in a bit.", "error");
			}
		});
		
	});
	
});