$(document).ready(function () {
	console.log("Hello Cities Market");

	var citiesData = {};
	var firstCityNum = 0;
	var maxItemsOnPage = 10;

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
	// end tabs action

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
            firstCityNum = newActiveNumber * maxItemsOnPage;
			showSome();
    });

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
		var dataLength = 500 ;
		$(".paginator .pagecontainer").empty();
        for(var i = 0; i < (dataLength/maxItemsOnPage); i++){
            var container = $(".paginator .pagecontainer").append("<div>" + (i + 1) + "</div>");
            var item = $(".paginator .pagecontainer :last-child");
            item.addClass(i.toString());
            if(i == 0) item.addClass("active");
			$(".pagecontainer_wrap").width( $(".pagecontainer_wrap").width() + 30 );
        };
	}; // end of showPaginator
	// End of Footer actions

	//Content actions
	var refreshData = function(){
		var data = {
			"populationMin": $("input[name='populationMin']").val(),
			"populationMax": $("input[name='populationMax']").val(),
			"yearMin": $("input[name='yearMin']").val(),
			"yearMax": $("input[name='yearMax']").val()
		};
		$.post('./backend/refreshData.php', data, function(response){
			citiesData = response;
			showPaginator();
			showSome();
		}, 'json');

	};

	var showSome = function(){
		$('.content').empty();
		$("input[name='populationMin']").val(citiesData.meta.populationMin);
		$("input[name='populationMax']").val(citiesData.meta.populationMax);
		$("input[name='yearMin']").val(citiesData.meta.yearMin);
		$("input[name='yearMax']").val(citiesData.meta.yearMax);
		var items = citiesData.items.slice(firstCityNum, firstCityNum + maxItemsOnPage);
		// console.log(items);
		items.forEach(function(item){
			var template = '<div class="element">\
								<div class="cityImage"><img src="' + /* item.image +*/ '" alt=""></div>\
								<div class="cityDescripts">\
								<div class="cityDesctipt cityNumber">Город номр: ' + item.num + '</div>\
								<div class="cityDesctipt cityName">Имя: ' + item.name + '</div>\
								<div class="cityDesctipt cityYear">Год: ' + item.year + '</div>\
								<div class="cityDesctipt cityPopulation">Население: ' + item.population + '</div>\
							</div>\
							</div>\
							<div style="clear: left"></div>\
							';
			$(".content").append(template);
		});
	};
	//end content actions

	$('#searchForm').submit(function(event){
		event.preventDefault();
		refreshData();
	});

	refreshData();
});
