$(document).ready(function() {

  var textField = $("#todo");

  $('#submit').bind('click', function(){
	var value = textField.val();
	var deleteButton = '<span class="delete">X</span></li>';
	var listItem = "<li>" + value + deleteButton + "</li>";
	
	var li = $(listItem);
	
	$("#todos").append(li);
	textField.val("");
	
	var count = $("#todos").children('li').length;
	$("#count").html(count);
});
	$("#todos").on("click", ".delete", function(){
		$(this).parent().remove();
	var count = $("#todos").children('li').length;
		$("#count").html(count);
	});
});
