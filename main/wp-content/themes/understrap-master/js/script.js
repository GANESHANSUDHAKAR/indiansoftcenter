
window.onload = function () {
    document.querySelector(".preload").style.display = "block";
    window.setTimeout(function () {
        document.querySelector(".preload").style.display = "none";
    }, 500);
}

$(document).ready(function() {

    new WOW().init();
    
    $(".show_menu").click(function(e) {
       $('.modal_menu').show(); 
    });
    $(".hide_menu").click(function(e) {
        $('.modal_menu').hide();
    });

    //expertise show/hide----------------------
//     if ($(window).width() < 960) {
//         $(".exp_tabs a").click(function(e) {
//             e.preventDefault();
//             $("#exp_hidden_block").css('display', 'none');
//             $("#v-pills-tab").hide();

//             $("#v-exp-tabContent").show();
//             $("#v-exp-tabContent").css('left', '0');

//             $('#exp_show').hide();
//             $('#exp_back').show();
//             $('#exp_back').css('margin-left', '15px');

//             $('html, body').animate({
//                 scrollTop: $("#expertise").offset().top - 67
//             }, 300);
//         });
//         $("#exp_back").click(function(e) {
//             e.preventDefault();
//             $('#v-exp-tabContent').hide();
//             $('#exp_hidden_block').show();
//             $('#v-pills-tab').show();
//             $('#exp_show').show();
//             $('#exp_back').hide();

//             $('html, body').animate({
//                 scrollTop: $("#expertise").offset().top - 67
//             }, 300);
//         });
//         $("#exp_show").click(function(e) {
//             e.preventDefault();
//             $("#exp_hidden_block").css('display', 'none');
//             $("#v-pills-tab").hide();

//             $("#v-exp-tabContent").show();
//             $("#v-exp-tabContent").css('left', '0');

//             $('#exp_show').hide();
//             $('#exp_back').show();
//             $('#exp_back').css('margin-left', '15px');

//             $('html, body').animate({
//                 scrollTop: $("#expertise").offset().top - 67
//             }, 300);
//         });
//     }
//     else {
//         $("#exp_show").click(function(e) {
//             e.preventDefault();
//             exp_show();
//             $('#fp-nav').hide();
//             $('.barand').css('opacity', '0');
//             $('#expertise').addClass('active_bg');
//         });
//         $("#exp_back").click(function(e) {
//             e.preventDefault();
//             exp_hide();
//             $('#fp-nav').show();
//             $('.barand').css('opacity', '1');
//             $('#expertise').removeClass('active_bg');
//         });
//         $(".exp_tabs a").click(function(e) {
//             e.preventDefault();
//             exp_show();
//             $('#fp-nav').hide();
//             $('.barand').css('opacity', '0');
//             $('#expertise').addClass('active_bg');
//         });
//     }

    //-----------------------------------------


    //home why tabs----------------------------
    $("#why_tab_first").click(function() {
        $(".why_first").show('slow');
        $(".why_second").hide('slow');
        $("#why_tab_first").removeClass();
        $("#why_tab_second").removeClass();
        $("#why_tab_first").addClass('active');
    });
    $("#why_tab_second, #show_awords").click(function() {
        $(".why_first").hide('slow');
        $(".why_second").show('slow');
        $("#why_tab_first").removeClass();
        $("#why_tab_second").removeClass();
        $("#why_tab_second").addClass('active');
    });
    //-------------------------------------------

    

    //contact form------------------------------
    $('.cc_tip input').keyup(function() {
        let this_inp = $(this);
        let label = this_inp.parent().parent();
        let lazy_title = label.find('.form_input_title'); 
        if(this_inp.val() != ''){
            lazy_title.addClass('label_lazy');
        }else{
            lazy_title.removeClass('label_lazy');
        }
    });
    //------------------------------------------

    $("#close_search").click(function(e) {
        $('.modal_search').hide();
    });
    $(".show_find").click(function(e) {
        $('.modal_search').show();
    });

});

function filterTagsAll(){
    $('.portfolio_itm').show();
    $('.but_f_all').removeClass('active');
    $('.but_f_all_cat').addClass('active');
    $('.portfolio_itm').css('visibility', 'visible');
}
function filterTags(tagName){

    $('.portfolio_itm').hide();
    $('.'+tagName).show();

    $('.but_f_all').removeClass('active');
    $('.but_f_'+tagName).addClass('active');
    $('.portfolio_itm').css('visibility', 'visible');
}

function exp_show(){
    if ($(window).width() > 960) {
        $("#exp_main_container").removeClass();
        $("#exp_main_container").addClass('col-12');
        $("#v-exp-tabContent").css('left', '75%');
        $("#v-exp-tabContent").css('width', '125%');
        $("#exp_shown_block").addClass('animated fadeInRight');
        $("#exp_hidden_block").addClass('animated fadeInRight');
        $("#exp_hidden_block").hide();
        $("#exp_show").hide();
        $("#exp_back").show();
    }
}
function exp_hide(){
    if ($(window).width() > 960) {
        $("#exp_main_container").removeClass();
        $("#exp_main_container").addClass('offset-lg-2 col9-5');
        $("#v-exp-tabContent").css('left', '100%');
        $("#v-exp-tabContent").css('width', '100%');
        $("#exp_hidden_block").addClass('animated fadeInLeft');
        $("#exp_shown_block").addClass('animated fadeInLeft');
        $("#exp_hidden_block").show();
        $("#exp_shown_block").removeClass('wow fadeInRight');

        $("#exp_show").show();
        $("#exp_back").hide();
    }

}





$(".story_slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }
    ]
});

$(".story_slide_successr").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false, 
            }
        }
    ]

});

$(".testim_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false, 
            }
        }
    ]

});
$(".portfolio_slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }
    ]

});

$(".leader_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }
    ]

});


$('.portfolio_slider').slickLightbox({
    layouts: {
        closeButton: '<button type="button" class="slick-lightbox-close"></button>'
    }
});

//функция для ajax подгрузки новых постов в блоге
jQuery(function($){
	$('#true_loadmore').click(function(){
		$(this).text('Loading...'); // изменяем текст кнопки, вы также можете добавить прелоадер
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) { 
					$('#true_loadmore').text('Load more'); // вставляем новые посты
					$('.return_more').append(data); // вставляем новые посты
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#true_loadmore").remove(); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmore').remove(); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});
});