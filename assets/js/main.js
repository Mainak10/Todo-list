//Toogle strike through effect on click of each items
//.click function does not accept arrow function!

$('ul').on('click','li',function () {
	$(this).toggleClass('strikethrough-item');
});

//remove items on click the delete icon

$('ul').on('click','span',function (event) {

	//Fadding out with 500ms delay hen removing the item/li element

	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	})

	//Will stop event bubbles from child to parent!
	event.stopPropagation();
});

//Insert items in the list on adding something from text field
//after pressing 'Enter' button

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		
		//Getting input text value
		let itemname = $(this).val();
		
		//creating new li element with span with the item name
		$('ul').append(`<li><span><i class="fa fa-trash" aria-hidden="true"></i></span></span> ${itemname} </li>`);
		$(this).val("");
	}
})

//on loading of the page showing only the minus icon with 
//Input text available

$(".fa").click(function(){

	//Fadding out and fadding in with 100ms delay of input text field

	$("input[type='text']").fadeToggle(100);

	//Tooggling class name with minus and plus

	let className = this.className === 'fa fa-minus'?'fa fa-plus':'fa fa-minus';

	//Finally adding the class name after setting
	$('h1 i').removeClass().addClass(className);
})