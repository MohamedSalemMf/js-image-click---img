// window.alert("Hello")    //Test

$(document).ready(function(e){
    $('.thumb a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr('src', $(this).attr("href"))
    })
})

// الكبيره imgده علشان لم اضغط علي اي صوره يطلع ل فوق في ال 

let aboutOffsetTopLeft = $(".imgs-click").offset().top;

$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > aboutOffsetTopLeft){
			$('.thumb a').fadeIn(500);
		}
		else{
			$('.thumb a').fadeIn(500);
		}
})

$('.thumb a').click(function () {
	$("html,body").animate({scrollTop:100} , 500);
})




