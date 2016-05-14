$(document).ready(function () {
	console.log("Hello Cities Market");

	$('.tab').on('click', function () {
		var selectedItem = $(this);
		var tabsPosition = selectedItem.index();
		tabsMethod = selectedItem.data('class');
		selectedItem.addClass('active');
		selectedItem.siblings().removeClass('active');
		console.log(selectedItem.siblings());
		console.log("Filter: Selected " + tabsPosition + " tab; Search Method = " + tabsMethod);
    });

});
