
var form_panel=$("[data-form-validation]");form_panel.validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1});var phone=$(".form__control[type='tel']");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});var file=$(".form__file-input");file.on("change",function(l){$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,"")+"<small>Заменить файл</small>")});
$("img").addClass("img-responsive");
var modal_btn_show=$('[data-toggle="modal"]');modal_btn_show.on("click",function(t){var a=$(this).attr("data-target"),d=($(a).find("[data-type]"),$(this).attr("data-type"));$(a).find("[data-form-type]").attr({value:d})});
var humb=$("[data-hamburger]"),collapse=$(".navbar__collapse"),html=$("html");humb.on("click",function(){$(this).toggleClass("is--active"),$(collapse).toggleClass("is--open"),$(html).toggleClass("is--open-navbar")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__container.is--collapse").length&&0==$(a.target).closest("[data-hamburger]").length&&(humb.removeClass("is--active"),$(html).removeClass("is--open-navbar"),$(collapse).removeClass("is--open"))});

$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block > img").wrap('<picture class="is--pict"></picture>');

$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var t=$(this),a=$(t.attr("href")).eq(0),o=parseInt(t.attr("data-scrollto-diff"))||0,r=parseInt(t.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+o},r),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),t.parent().addClass("is--active")}),$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(e){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(e.preventDefault(),$(".navbar__hamburger-btn").trigger("click"))});
"use strict";$(function(){var s=$("[data-slick-reviews]"),t=$("[data-slick-dots]").data("slick-dots"),o=$(".slick-count");s.on("init reInit afterChange",function(s,t,n,i){var a=(n||0)+1;$(this).find(o).html("<span>"+a+"</span><span>/</span><span>"+t.slideCount+"</span>")}),s.slick({slide:".card__item",slidesToShow:3,slidesToScroll:1,arrows:!0,dots:t,infinite:!0,centerMode:!0,variableWidth:!0,prevArrow:'<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span><</button>',nextArrow:'<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span>></button>',responsive:[{breakpoint:767,settings:{slidesToShow:1}}]})});