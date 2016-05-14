$(document).ready(function () {
	console.log("Hello Cities Market");

	var maxCarsOnPage = 10;

	// tabs actions
	$('.tab').on('click', function () {
		var selectedItem = $(this);
		var tabsPosition = selectedItem.index();
		tabsMethod = selectedItem.data('class');
		selectedItem.addClass('active');
		selectedItem.siblings().removeClass('active');
		console.log(selectedItem.siblings());
		console.log("Filter: Selected " + tabsPosition + " tab; Search Method = " + tabsMethod);
    });

    // Footer actions
    $(".paginator .prev").on('click', function(){
            shiftPagContainer(200);
        });
    $(".paginator .next").on('click', function(){
            shiftPagContainer(-200);
        });
    $(".pagecontainer").on('click', function(e){
            if(e.target.className == "pagecontainer")
                return;
            $(".pagecontainer div").removeClass("active");
            var newActiveNumber = parseInt(e.target.className);
            var targetPosition = $(".pagecontainer_wrap").offset().left + $(".pagecontainer_wrap").width()/2;
            var activeItem = $($(".pagecontainer div")[newActiveNumber]);
            var shift = targetPosition - activeItem.offset().left;
            activeItem.addClass("active");
            shiftPagContainer(shift - 20);
            firstCarIndex = newActiveNumber * maxCarsOnPage;
    });
 	// End of Footer actions

    // showPaginator - showing and listening of page buttons of paginator
    var shiftPagContainer = function(shift){
            var lastItem = $(".pagecontainer div").last();
            var contWrap = $(".pagecontainer_wrap");
            var cont = $(".pagecontainer");
            cont.css('left', '+=' + shift + "px");
            if(cont.offset().left + shift > contWrap.offset().left)
                cont.css('left', 0 + "px");
            if(lastItem.offset().left + lastItem.width() + shift < contWrap.offset().left + contWrap.width())
                cont.css('left',(cont.offset().left - lastItem.offset().left - lastItem.width() - 10 + contWrap.width()) + "px");
    };
	var showPaginator = function(){
		var dataLength = 500;
		$(".paginator .pagecontainer").empty();
        for(var i = 0; i < (dataLength/maxCarsOnPage); i++){
            var container = $(".paginator .pagecontainer").append("<div>" + (i + 1) + "</div>");
            var item = $(".paginator .pagecontainer :last-child");
            item.addClass(i.toString());
            if(i == 0) item.addClass("active");
			$(".pagecontainer_wrap").width( $(".pagecontainer_wrap").width() + 30 );
        };
	} // end of showPaginator

	showPaginator();
});
