/* ================================================
----------- Travelite ---------- */
(function ($) {
	"use strict";
	
	//slider start
	 /******************************************
    -	PREPARE PLACEHOLDER FOR SLIDER	-
    ******************************************/

    var tpj = jQuery;
    var revapi116;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_116_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_116_1");
        } else {
            revapi116 = tpj("#rev_slider_116_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "../../revolution/js/",
                sliderLayout: "auto",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: "gyges",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        }
                    }
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%"
                },
                gridwidth: 1240,
                gridheight: 645,
                lazyType: "none",
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });

	//slider End
	
	var Travelite = {
		initialised: false,
		version: 1.0,
		mobile: false,
		container : $('#portfolio-item-container'),
		blogContainer: $('#blog-item-container'),
		productContainer: $('#product-container'),
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// Call Travelite Functions
			this.RTL();
			this.pageLoading();
			this.MenuToggle();
			this.ParallaxPageTitle();
			this.VisibleSpaceTopmenu();
			this.VisibleSpaceMainmenu();
			this.AccordionSinglecollapse();
			this.LoaderPostLoad();
			this.CheckDropdownVisibility();
			this.SearchWidgetFooter();
			this.packagedetailstab();
			this.packagebookingtab();
			this.paymentverticaltabs();
			this.featuretabssider();
			this.DateTimePickerAll();
			this.CommentsLastChild();
			this.CustomerSays();
			this.EassyPieChart();
			this.counterjs();
			this.Eventslide();
			this.testimonialslider();
			this.packagedetails();
			this.partnerscrousel();
			this.loginform();
			this.countdownjs();
			this.videopopup();
			this.videoplayer();
			this.slickslider();
			this.seemorelessbutton();
			this.moretextwidget();
			this.pricefilterslider();
			this.spinnerselect();
			this.portfoliocolumnthree();
			
	
		
			// this.checkMobile();
			this.fullHeight();
			// this.filterColorBg();
			this.tooltip();
			
			
			
			/* Call function if Owl Carousel plugin is included */
			if ( $.fn.owlCarousel ) {
				this.owlCarousels();
			}

			/* Call function if Magnific Popup plugin is included */
			if ( $.fn.magnificPopup) {
				this.newsletterPopup();
				this.lightBox();
			}

			/* Call function if Media element plugin is included */
			if ($.fn.mediaelementplayer) {
				this.mediaElement();
			}

			/* Call function if Media noUiSlider plugin is included */
			if ($.fn.noUiSlider) {
				this.priceSlider();
			}

			var self = this;
			/* Imagesloaded plugin included in isotope.pkgd.min.js */
			/* Portfolio isotope + Blog masonry with images loaded plugin */
			if (typeof imagesLoaded === 'function') {
				/* */
				imagesLoaded(self.container, function() {
					self.isotopeActivate();
					// recall for plugin support
					self.isotopeFilter();
				});

				/* check images for blog masonry/grid */
				imagesLoaded(self.blogContainer, function() {
					self.blogMasonry();
				});

				/* check images for product masonry/grid index11 */
				imagesLoaded(self.productContainer, function() {
					self.productMasonry();
				});
			}

		},
		
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("right-to-left");	
			}		
		},
		pageLoading: function(){
		   var value = 1;
		   var interval = setInterval(function(){

			if(value <= 100){
			 $('.pointer_val').html(value+'%');
			 $('.travel_loading_bar_overlay').css('width', value+'%').animate();
			}else{
			 clearInterval(interval);
			}
			value++;
			
			if(value == 7){
			 $('.pointer').css('opacity','1');
			 $('.travel_loading_bar > span.from svg path').css('fill','#86B940');
			 $('.travel_loading_bar > span.to').addClass('jump');
			}
			if(value == 99){
			 $('.pointer').css('opacity','0');
			 $('.travel_loading_bar > span.to svg path').css('fill','#FCB715');
			 $('.travel_loading_bar > span.to').removeClass('jump');
			}
			if(value == 100){
			 $('.travel_page_loader').fadeOut();
			}
			
		   },80);
		   
		   
		   //page load animation
		   if ($('body').hasClass('travel_home')){
				setTimeout(function(){
				  $('#travel_wrapper').addClass('travel_body_loaded'); 
			    }, 8000);
		
			} else{
			    setTimeout(function(){
				  $('#travel_wrapper').addClass('travel_body_loaded'); 
			    }, 100);
			}
			
			
		},
		ManuDropdownToggle: function () {
			/*Add dropdown toggle html on tablat/mobile width for open dropdown*/
			var width = $(document).width();
			if (width < 767) {
				$("li.travel_dropdown").append("<span class='dropdown_toggle'></span>");	
				
				$('.main_menu > ul > li').children('.dropdown_toggle').on('click', function(){
					$(this).prev('ul.sub-menu').slideToggle();	

				});
				
				
				
				$('.main_menu > ul > li > ul.sub-menu > li > .dropdown_toggle').on('click', function(){
					$('.main_menu > ul > li > ul.sub-menu > li > ul.sub-menu').slideToggle();	
				});
				
			}
			
		},
		ServiceIsotope: function () {
			/*Service Isotoped section on service page(09_Services.html) */
			var $container = $('.service_wrapper');
			$container.isotope({
				itemSelector: '.item',
				masonry: {
				  gutter: 0,
				  isFitWidth: true
				}
			});
		},
		OfferIsotope: function () {
			/*Offer Isotoped section on offer page(15_Offers.html) */
			var $container = $('.offer_wrapper');
			$container.isotope({
				itemSelector: '.item',
				masonry: {
				  gutter: 0,
				  isFitWidth: true
				}
			});
		},
		MenuToggle:function () {
			/* Menu toggle on mobile/tablat/mobile width */
			var $menuToggle = $(".menu-toggle");
			$menuToggle.on('click',function() {
				$('.main_menu').toggleClass('open');
				$(this).toggleClass("menu-toggle--open");
			});
		},
		ParallaxPageTitle:function () {
			/* parallax for page title */
			$('.page_title').parallax("50%", 0);
		},
		VisibleSpaceTopmenu:function () {
			/* Submenu Check Visible Space on top menu */
			$(".top_menu ul li").hover(function() {
				if($(window).width() < 700){
					return;
					} 
				var subMenu = $(this).find("ul.sub-menu");
				
				if(!subMenu.get(0)){
					return;
					} 
				var screenWidth = $(window).width(),
					subMenuOffset = subMenu.offset(),
					subMenuWidth = subMenu.width(),
					subMenuParentWidth = subMenu.parents("ul.sub-menu").width(),
					subMenuPosRight = subMenu.offset().left + subMenu.width();
					

				if(subMenuPosRight > screenWidth) {
					subMenu.css("margin-left", "-" + (subMenuParentWidth + subMenuWidth + 10) + "px");
				}else {
					subMenu.css("margin-left", 0);
				}
			
			});
		},
		VisibleSpaceMainmenu:function () {
			/* Submenu Check Visible Space on main menu */
			$(".main_menu ul li").hover(function() {
				if($(window).width() < 700){
					return;
					} 
				var subMenu = $(this).find("ul.sub-menu");
				
				if(!subMenu.get(0)){
					return;
					} 
				var screenWidth = $(window).width(),
					subMenuOffset = subMenu.offset(),
					subMenuWidth = subMenu.width(),
					subMenuParentWidth = subMenu.parents("ul.sub-menu").width(),
					subMenuPosRight = subMenu.offset().left + subMenu.width();
					

				if(subMenuPosRight > screenWidth) {
					subMenu.css("margin-left", "-" + (subMenuParentWidth + subMenuWidth + 10) + "px");
				}else {
					subMenu.css("margin-left", 0);
				}
			});
		},
		AccordionSinglecollapse:function () {
			/* accordion single-collapse */
			var active1 = $('#accordion .panel-collapse.in').prev().addClass('active');
			active1.find('a').prepend('<i class="fa fa-angle-up"></i>');
			$('#accordion .panel-heading').not(active1).find('a').prepend('<i class="fa fa-angle-down"></i>');
			$('#accordion').on('show.bs.collapse', function (e) {
				$('#accordion .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
				$(e.target).prev().addClass('active').find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
			});
		},
		LoaderPostLoad:function () {
			/* load post loader effect */
			$(".widget_categories ul li input").click( function(){
			   //if( $(this).is(':checked') )
			   $(".post_wrapper").addClass('load_post');
				setTimeout(function(){ 
					$(".post_wrapper").removeClass('load_post');	
			   }, 3000);
			});
		},
		CheckDropdownVisibility:function () {
			/* check dropdown is visible or not */
			$('li').has('ul.sub-menu').addClass('travel_dropdown');
		},
		
		SearchWidgetFooter:function () {
			/*  widget search availability tab */
			$('.wsa_tab > ul').each(function(){
				var $active, $content, $links = $(this).find('a');
				$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
				$active.addClass('active');

				$content = $($active[0].hash);

				// Hide the remaining content
				$links.not($active).each(function () {
				  $(this.hash).hide();
				});

				// Bind the click event handler
				$(this).on('click', 'a', function(e){
					// Make the old tab inactive.
					$active.removeClass('active');
					$content.hide();

					// Update the variables with the new link and content
					$active = $(this);
					$content = $(this.hash);

					// Make the tab active.
					$active.addClass('active');
					$content.show();

					// Prevent the anchor's default click action
					e.preventDefault();
				});
			});
			
		},
		
		//packagedetailstab
		packagedetailstab:function(){
			$( "#Travelite_middle_tabs" ).tabs();
			
		},
		//packagedetailstab end
		
		
		
		//packagebookingtab
		packagebookingtab:function(){
			$( "#tour_booking_tabs" ).tabs();
			
		},
		//paymentverticaltabs
		paymentverticaltabs:function(){
			$( "#payment_vertical_tabs" ).tabs();
			
		},
		
		
	
		//feature tabs slider
		featuretabssider:function(){
		
        $(".slide_tabs a").on("click", function() {
            $(".slide_tabs").find(".active_tab").removeClass("active_tab");
            $(this).parent().addClass("active_tab");
        });
		
		//tabsjs
		$('.feature_tabs > ul').each(function(){
		var $active, $content, $links = $(this).find('a');
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');
		$content = $($active[0].hash);
		$links.not($active).each(function () {
		  $(this.hash).hide();
		});
		$(this).on('click', 'a', function(e){
		  $active.removeClass('active');
		  $content.hide();
		  $active = $(this);
		  $(window).trigger('resize');
		  $content = $(this.hash);
		  
		  $active.addClass('active');
		  
		  $content.show();
		  e.preventDefault();
		});
		});
		
		//featuretabcrousel
		// $('.feature_tab_crousel').bxSlider({
		// maxSlides: 3,
		// minSlides: 1,
		// slideWidth: 282,
		// slideMargin: 0,
		// pager:true,
		// controllers:false,
		// responsive:{
					// 480:{
						// minSlides:1,
						
					// },
					// 767: {
						// minSlides:2,
						
					// },
					
				// }
		// });
			
		},

		DateTimePickerAll:function () {
			//datetime picker event based on calendar 
			   $('#event_based_on_cal').datetimepicker({
				yearOffset:0,
				inline: true,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'2014/01/01', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			   });

			//datetime picker footer widget global search
			$('#Check_in_date_global_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});


			//datetime picker footer widget global search 
			$('#Check_out_date_global_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});	


			//datetime picker footer widget hotal search
			$('#Check_in_date_hotal_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});


			//datetime picker footer widget hotal search 
			$('#Check_out_date_hotal_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});		

			//datetime picker footer widget local search
			$('#Check_in_date_local_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});


			//datetime picker footer widget local search 
			$('#Check_out_date_local_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
		
			//event from date
			$('#select_date_event').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			
			
			//tab form date check in
			$('#Check_in_date_tab').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			$('#Check_in_date_tab_flight').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			
			$('#Check_in_date_tab_car').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			$('#Check_in_date_tab_hospital').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			
			$('#flights_Check_in_date_tab').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'m/d/Y',
				formatDate:'m/d/y',
				minDate:'-1970/01/02', // yesterday is minimum date
			});
			
			//tab form date check out
			$('#Check_out_date_tab').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			$('#flights_Check_out_date_tab').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'m/d/Y',
				formatDate:'m/d/y',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			$('#Check_out_date_tab_flight').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			$('#Check_out_date_tab_car').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			$('#Check_out_date_tab_hospital').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			
			
			//Home 3 slider check checkin
			$('#booking_checkin_date').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
			
			//Home 3 slider check checkout
			$('#booking_checkout_date').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
				//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
			});
              
			  //slider check in date
			$('#slider_Check_in_date').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
			});
			
			//slider check out date
			$('#slider_Check_out_date').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
			});
			
			 //slider check in date
			$('#slider_Check_in_date_hotal_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
			});
			
			//slider check out date
			$('#slider_Check_out_date_hotal_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
			});
			
			
			 //slider check in date
			$('#slider_Check_in_date_local_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
			});
			
			//slider check out date
			$('#slider_Check_out_date_local_search').datetimepicker({
				yearOffset:0,
				timepicker:false,
				format:'d/m/Y',
				formatDate:'Y/m/d',
				minDate:'-1970/01/02', // yesterday is minimum date
			});
			
		},
		CommentsLastChild:function () {
			/* comment - check child ul  */
			$('#comments ol li:last-child').has('ul.children').addClass('last-with-ul');	
		},
		CustomerSays:function () {
			/* Customer Says slider and click function */
			$('.customer_says_slider .owl-carousel').owlCarousel({
				items:5,
				margin:10,
				nav:true,
				navText: [ '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 197.402 197.402" style="enable-background:new 0 0 197.402 197.402;" xml:space="preserve"><g><g><g><polygon style="fill:#808b8d;" points="146.883,197.402 45.255,98.698 146.883,0 152.148,5.418 56.109,98.698 152.148,191.98 "/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>', '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 223.413 223.413" style="enable-background:new 0 0 223.413 223.413;" xml:space="preserve"><g><g><g><polygon style="fill:#808b8d;" points="57.179,223.413 51.224,217.276 159.925,111.71 51.224,6.127 57.179,0 172.189,111.71 "/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>' ],
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					600:{
						items:4
					},
					1000:{
						items:5
					}
				}
			});
			
			/* Customer Says test first element will be show */
			$('.customer_says_text #cst_1').show();
			/* Customer Says detail first element will be show */
			$('.customer_says_detail #csd_1').show();
			
			/* Customer Says image click function */
			$('.customer_says_slider .item > img').on('click', function(){
				var cst_id =$(this).attr("id");
				var cst_id2 = cst_id.split("_")[1];
				console.log(cst_id2);
				$('#cst_'+cst_id2).show();
				var cur_cst_id='cst_'+cst_id2;
				$('.customer_says_text > div').each(function(){
					if($(this).attr("id")!=cur_cst_id){
						$(this).hide();
					}
				});
				
				
				var csd_id =$(this).attr("id");
				var csd_id2 = csd_id.split("_")[1];
				console.log(csd_id2);
				$('#csd_'+csd_id2).show();
				var cur_csd_id='csd_'+csd_id2;
				$('.customer_says_detail > div').each(function(){
					if($(this).attr("id")!=cur_csd_id){
						$(this).hide();
					}
				});
				
			});
			
			$('.customer_says_slider .item').on('click', function(event){
				$('.customer_says_slider .item').removeClass('active');
				$(this).addClass('active');
			});
			
			
		},
		
		EassyPieChart: function(){
			$(".counter_section").mouseenter(function() {
			//pie-chart start
	       $('.percentage-light').easyPieChart({
			barColor: function(percent) {
				return "#ff5ba0";
			},
			trackColor: '#f8f8f8',
			scaleColor: false,
			lineCap: 'butt', 
			animate: 6000,
			lineWidth: 10,
			trackWidth: 10,
			onStep: function(value) {
				this.$el.find('span').text(~~value);
			}
		 });	
		 //pie-chart start
	       $('.percentage_blue').easyPieChart({
			barColor: function(percent) {
				return "#6054aa";
			},
			trackColor: '#f8f8f8',
			scaleColor: false,
			lineCap: 'butt', 
			animate: 6000,
			lineWidth: 10,
			trackWidth: 10,
			onStep: function(value) {
				this.$el.find('span').text(~~value);
			}
		 });
		 //pie-chart start
	       $('.percentage_red').easyPieChart({
			barColor: function(percent) {
				return "#e12e45";
			},
			trackColor: '#f8f8f8',
			scaleColor: false,
			lineCap: 'butt', 
			animate: 6000,
			lineWidth: 10,
			trackWidth: 10,
			onStep: function(value) {
				this.$el.find('span').text(~~value);
			}
		 });
		 //pie-chart start
	       $('.percentage_skyblue').easyPieChart({
			barColor: function(percent) {
				return "#07b7b5";
			},
			trackColor: '#f8f8f8',
			scaleColor: false,
			lineCap: 'butt', 
			animate: 6000,
			lineWidth: 10,
			trackWidth: 10,
			onStep: function(value) {
				this.$el.find('span').text(~~value);
			}
		 });
		 
		 
		});	
		
		},
		
		counterjs: function(){
			
			//counter js
			$(window).scroll(function() {
          $('.timer').each(count);

          function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
		});

		},
		//eventslider
		Eventslide:function(){
			
		$("#syncro_slide").owlCarousel({
		items:1,
      nav : true,
	  dots:false,
	  navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
	  autoPlay: 4000,
       paginationSpeed : 1500,
       slideSpeed : 3000,
	   smartSpeed:1000,
      singleItem:true,
	  transitionStyle : "fade",
	   animateIn: 'fadeIn'
 
  });
			
		},
		
		
		
		//testimonials-slider
		testimonialslider:function(){
			$("#home_testimonials").owlCarousel({
		items:1,
       nav : true,
	   dots:false,
	   navText:['<i class="fa fa-chevron-right"></i>','<i class="fa fa-chevron-left"></i>'],
	   autoPlay: true,
       singleItem:true,
	   animateIn: 'fadeIn',
	   mouseDrag:false,
	   activeClass:'active_navs',
	   transitionStyle : "fade",
 
  });
			
		},
		
		//packagedetails-slider
		packagedetails:function(){
			$("#package_details_slider").owlCarousel({
			items:1,
			nav : true,
			auto:true,
			dots:false,
			navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
			paginationSpeed : 1500,
			slideSpeed : 3000,
			smartSpeed:1000,
			singleItem:true,
			transitionStyle : "fade",
			

 
  });
			
		},
		//packagedetails-slider-End
	
		
		//partner_crousel_slide start
		partnerscrousel:function(){
			
			$("#partner_crousel_slide").owlCarousel({
 
			  autoPlay: 3000, 
			  items : 5,
			  dots:false,
			  nav:true,
				navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
				responsive:{
					0:{
						items:1
					},
					480:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:4
					},
					1100:{
						items:4
					},
					1200:{
						items:5
					}
				}
 
  });
		},
		
		//loginform start		
		loginform: function(){
		$(".Travelite_login_alert").on('click', function(){
			$(".Travelite_login_form").fadeIn();
			
		});
		$(".close_btn").on('click', function(){
			$(".Travelite_login_form").fadeOut();
			
		});
		$(".Travelite_login_alert").on('click', function(){
			$(".Travelite_signup_form").fadeOut();
			
		});
		
		//signup form
		$(".Travelite_signup_alert").on('click', function(){
			$(".Travelite_signup_form").fadeIn();
			
		});
		$(".close_btn").on('click', function(){
			$(".Travelite_signup_form").fadeOut();
			
		});
		
		$(".Travelite_signup_alert").on('click', function(){
			$(".Travelite_login_form").fadeOut();
			
		});

	},
		countdownjs: function(){
			$('[data-countdown]').each(function() {
			   var $this = $(this), finalDate = $(this).data('countdown');
			   $this.countdown(finalDate, function(event) {
				 $this.html(event.strftime(''
					+ '<div class="counter-container"><div class="counter-box first"><div class="number_time_c">%-D</div><span>Day%!d</span></div>'
					+ '<div class="counter-box"><div class="number_time_c">%H</div><span>Hours</span></div>'
					+ '<div class="counter-box"><div class="number_time_c">%M</div><span>Minutes</span></div>'
					+ '<div class="counter-box last"><div class="number_time_c">%S</div><span>Seconds</span></div></div>'
				   ));
			   });
			 });	
		},
		
		//videopopup start
		videopopup:function(){
		$('.popup_video_swm').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
			
		
		},
		//videopopup end
		
		//videoplayer start
		videoplayer:function(){
			
	   $('audio,video').mediaelementplayer({
	   features: ['playpause','progress','volume','postroll']
       });
		},
		//videoplayer end
		
		//slickslider start
		slickslider:function(){
			
			$('.slick_crousel').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.content_1').show();
		$('.slick_crousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.cls').hide();
 			$('.content_'+( parseInt(nextSlide) + 1 )).show();
  		});
		},
		
		
		//seemoreless
		seemorelessbutton:function(){
			 var showChar = 287; 
    var ellipsestext = "...";
    var moretext = "See More Details";
    var lesstext = "less Details";
    

    $('.more_text').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
		},
		
		//moretext widget start
		moretextwidget:function(){
			var showChar = 32; 
    var ellipsestext = "-";
    var moretext = "More";
    var lesstext = "less";
    

    $('.more_text_widget').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink_w">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink_w").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
			
		},
		
		// moretext widget end
		
		//pricefilterslider
		   pricefilterslider: function (){
			
	 $( "#slider" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 25, 900 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider" ).slider( "values", 1 ) );
			 
		},
		//pricefilterslider End
		
		//spinnerselect
		spinnerselect:function(){
			$( ".input_spinner" ).spinner();
		},
		
		//portfoliocolumnthree
		portfoliocolumnthree:function(){
			$('.portfolio_column_3_popup .portfolio-meta > a').magnificPopup({
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Travelite @ 2016. All Right Reserved</small>';
				}
				}
			});
		},
		//portfoliocolumnthree end
		
		toggleClass: function () {
			$('#mobile-menu, #mobile-menu-btn').toggleClass('opened');
			$('body').toggleClass('no-scroll');
		},
		fullHeight: function () {
			/* make a section full window height with predefined class */
			$('.fullheight').each(function () {
				var winHeight = $(window).height();

				$(this).css('height', winHeight);
			});
		},
		menuScrollbar: function () {
			if ($.fn.slimScroll) {
				/* For Side Menu*/
				if ( $('.side-menu').hasClass('dark') ) {
					/* check for dark side menu and change color of scrollbar */
					var bgColor = '#606060';
				}

				$('.side-menu-wrapper').slimScroll({
					height: 'auto',
					color: (bgColor) ? bgColor : '#2e2e2e',
					opacity: 0.6,
					size: '3px',
					alwaysVisible: false
				});

				/* Mobile menu*/
				$('#mobile-menu-wrapper').slimScroll({
					height: 'auto',
					color: '#fff',
					opacity: 0.2,
					size: '4px',
					alwaysVisible: false,
					distance: '2px'
				});
			}
		},
		owlCarousels: function () {
			var self = this;
			
			/* portfolio item slider */
			var owl2 = $(".portfolio_item_slider");
			owl2.owlCarousel({
				margin: 0,
				loop:true,
				responsiveClass: true,
				nav: false,
				dots: false,
				items: 1,
				autoplayTimeout: 8000,
				autoPlay : false,
				mouseDrag:false,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
			});
			// Go to the next item
			$('.portfolionext').on("click",function() {
				owl2.trigger('next.owl.carousel');
			});
			// Go to the previous item
			$('.portfolioprev').on("click",function() {
				owl2.trigger('prev.owl.carousel', [300]);
			});
			
			
			
			/* Product newarrivals carousel (shoes)  - (index.html - homepage) */
			$('.owl-carousel.home-newarrivals-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Latest Blog Posts Carousels - (index.html - homepage) */
			$('.owl-carousel.home-latestblog-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* index14.html - Lookbook carousel */
			$('.owl-carousel.lookbook-carousel').owlCarousel({
	            loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				autoplay: true,
				autoplayTimeout: 10000,
				center: true,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					},
					992: {
						items:4
					}
				}
	        });

	        /* Latest Blog Posts Carousels - (index20.html - homepage) */
			$('.owl-carousel.home-latestposts-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					},
					992: {
						items:4
					}
				}
			});

			/* Latest Blog Posts Carousels - (index8html - homepage) */
			$('.owl-carousel.home-latestposts-carousel-sm').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					}
				}
			});

			/* Product.html -  Product carousel to zoom product section */
			$('.owl-carousel.product-gallery').owlCarousel({
	            loop:false,
				margin:15,
				responsiveClass:true,
				nav:false,
				dots: false,
				autoplay: true,
				autoplayTimeout: 10000,
				responsive:{
					0:{
						items:3
					},
					480: {
						items:4
					}
				}
	        });

			/* Portfolio - Related Projects Carousel - (single-portfolio.html) */
			$('.owl-carousel.portfolio-related-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:true,
				navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
				dots: false,
				autoplay: true,
				autoplayTimeout: 10000,
				responsive:{
					0:{
						items:1
					},
					600: {
						items:2
					},
					992:{
						items:3
					}
				}
			});


			/* Product featured carousel  - (product.html - homepages) */
			$('.owl-carousel.product-featured-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product popular carousel  - (product.html - homepages) */
			$('.owl-carousel.product-popular-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product newarrivals carousel  - (product.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product featured carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-featured-carousel-sm').owlCarousel({
				loop:false,
				margin:24,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Product popular carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-popular-carousel-sm').owlCarousel({
				loop:false,
				margin:24,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Product newarrivals carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-sm').owlCarousel({
				loop:false,
				margin:24,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Sale products carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-sale-carousel').owlCarousel({
				loop:false,
				margin:24,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Testimonial Slider Sidebar - widget  - (index2.html) */
			$('.owl-carousel.testimonials-slider').owlCarousel({
				loop:true,
				margin: 0,
				responsiveClass: true,
				nav: false,
				dots: false,
				items: 1,
				autoplay: true,
				autoplayTimeout: 8000
			});

			/* Product featured carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-featured-carousel-lg').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product popular carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-popular-carousel-lg').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product newarrivals carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-lg').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product clearance carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-clearance-carousel').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product featured carousel  - (index5.html - homepages) */
			$('.owl-carousel.product-featured-carousel-xlg').owlCarousel({
				loop:false,
				margin:25,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					},
					1400: {
						items:6
					}
				}
			});

			/* Product popular carousel  - (index5.html - homepages) */
			$('.owl-carousel.product-popular-carousel-xlg').owlCarousel({
				loop:false,
				margin:25,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					},
					1400: {
						items:6
					}
				}
			});

			/* Product newarrivals carousel  - (index5.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-xlg').owlCarousel({
				loop:false,
				margin:25,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					},
					1400: {
						items:6
					}
				}
			});

			/* Product newarrivals carousel  - (index18.html - homepages) */
			$('.owl-carousel.presentation-newarrivals-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					}
				}
			});

			/* Product featured carousel  - (index18.html - homepages) */
			$('.owl-carousel.presentation-featured-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					}
				}
			});

			/* Banner row first carousel  - (index6.html - homepages) */
			$('.owl-carousel.banner-row-carousel-first').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1400: {
						items:4
					},
					1650: {
						items:5
					}
				}
			});

			/* Banner row second carousel  - (index6.html - homepages) */
			$('.owl-carousel.banner-row-carousel-second').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1400: {
						items:4
					},
					1650: {
						items:5
					}
				}
			});

			/* Banner row third carousel  - (index6.html - homepages) */
			$('.owl-carousel.banner-row-carousel-third').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1400: {
						items:4
					},
					1650: {
						items:5
					}
				}
			});

			/* Product featured carousel  - (index12.html - homepages) */
			$('.owl-carousel.product-featured-carousel-6col').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					480:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					},
					1200:{
						items:6
					}
				}
			});

			/* Product popular carousel  - (index12.html - homepages) */
			$('.owl-carousel.product-popular-carousel-6col').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					480:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					},
					1200:{
						items:6
					}
				}
			});

			/* Product newarrivals carousel  - (index12.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-6col').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					480:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					},
					1200:{
						items:6
					}
				}
			});

			/* Product featured carousel  - (index17.html - homepages) */
			$('.owl-carousel.product-featured-carousel-side').owlCarousel({
				loop:false,
				margin:23,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

			/* Product popular carousel  - (index17.html - homepages) */
			$('.owl-carousel.product-popular-carousel-side').owlCarousel({
				loop:false,
				margin:23,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

			/* Product newarrivals carousel  - (index17.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-side').owlCarousel({
				loop:false,
				margin:23,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

			/* Latest Blog Posts Carousels - (index17.html - homepage) */
			$('.owl-carousel.home-blog-post-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					}
				}
			});


			/*Caution This carousel function has to be called after the function above
			You must call this function after the carousel inside of tabs (for example product.html lava tab)*/
			/* Product - Products Carousel */
			var productCarousel = $('.owl-carousel.product-slider').owlCarousel({
				loop:false,
				margin:0,
				items:1,
				responsiveClass:true,
				animateOut: 'fadeOut', // Choose a calls form animated.css and change then tada
				nav:true,
				navText: ['Previous', 'Next'],
				dots: false
			});

			
			//about slider
			  $('.about_slider').bxSlider({
				  
				  pager:false,
				  auto:true,
				  
			  });
			  

			/* index.html - Clients -partners carousel  */
			$('.owl-carousel.our-partners').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:true,
				navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
				dots: false,
				responsive:{
					0:{
						items:2,
						nav:false
					},
					420: {
						items:3,
						nav:false
					},
					520: {
						items:4
					},
					992:{
						items:5,
					},
					1199:{
						items:6,
					}
				}
			});
			
		},
		scrollTopBtnAppear: function () {
			// This will be triggered at the bottom of code with window scroll event
			var windowTop = $(window).scrollTop(),
		            scrollTop = $('#scroll-top');

	        if (windowTop >= 300) {
	            scrollTop.addClass('fixed');
	        } else {
	            scrollTop.removeClass('fixed');
	        }
		    
		},
		scrollToAnimation: function (speed, offset, e) {
			/* General scroll to function */
			var targetEl = $(this).attr('href'),
				toTop = false;

			if (!$(targetEl).length) {
				if (targetEl === '#header' || targetEl === '#top' || targetEl === '#wrapper') {
					targetPos = 0;
					toTop = true;
				} else {
					return;
				}
			} else {
				var elem = $(targetEl),
					targetPos = offset ? ( elem.offset().top + offset ) : elem.offset().top;
			}
			
			if (targetEl || toTop) {
				$('html, body').animate({
		            'scrollTop': targetPos
		        }, speed || 1200);
		        e.preventDefault();
			}
		},
		priceSlider:function () {
			// Slider For category pages / filter price
			$('#price-range').noUiSlider({
				start: [0, 2990],
				handles: 2,
				connect: true,
				range: {
					'min': 0,
					'max': 4000
				}
			});

			$("#price-range").Link('lower').to( $('#slider-low-value') )
			$("#price-range").Link('upper').to( $('#slider-high-value') );
		},
		// filterColorBg: function () {
			// /* Category-item filter color box background */
			// $('.filter-color-box').each(function() {
				// var $this = $(this),
					// bgColor = $this.data('bgcolor');

					// $this.css('background-color', bgColor);
			// });
		// },
		tooltip: function () {
			// Bootstrap tooltip
			if($.fn.tooltip) {
				$('.add-tooltip').tooltip();
			}
		},
		newsletterPopup : function () {
			// Newsletter form popup - require magnific-popup plugin on page load

			if ( ! document.getElementById('newsletter-popup-form') ) {
				return;
			}

			jQuery.magnificPopup.open({
				items: {
					src: '#newsletter-popup-form'
				},
				type: 'inline'
			}, 0);
		},
		lightBox: function () {
			/* Popup for gallery items and videso and etc.. */
			/* magnific-popup.css and jquery.magnific.popup.mi.js files need to be included */

			/* This is for gallery images */
			$('.popup-gallery').magnificPopup({
				delegate: '.zoom-item',
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: true,
				mainClass: 'mfp-fade',
				removalDelay: 100,
				gallery: {
					enabled: true
				}
			});


			/* This is for iframe - youtube - vimeo videos - goole maps  with fade animation */
			$('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});

		},
		animateKnob: function() {
			// Animate knob
			if ($.fn.knob) {
				$('.knob').each(function() {
					var $this = $(this),
						container = $this.closest('.progress-animate'),
						animateTo = $this.data('animateto'),
						animateSpeed = $this.data('animatespeed')
					$this.animate(
			                { value: animateTo }, 
			                {   duration: animateSpeed,
			                    easing: 'swing',
		                    progress: function() {
		                      $this.val(Math.round(this.value)).trigger('change');
		                    },
		                    complete: function () {
		                    	container.removeClass('progress-animate');
		                    }
	               		});

				});
			}
		},
		mediaElement: function () {
			/* Media element plugin for video and audio support and styling */
			$('video, audio').mediaelementplayer();
		},
		scrollAnimations: function () {

			/* 	// Wowy Plugin
				Add Html elements wow and animation class 
				And you can add duration via data attributes
				data-wow-duration: Change the animation duration
				data-wow-delay: Delay before the animation starts
				data-wow-offset: Distance to start the animation (related to the browser bottom)
				data-wow-iteration: Number of times the animation is repeated
			*/

			// Check for class WOW // You need to call wow.min.js and animate.css for scroll animations to work
			if (typeof WOW === 'function') {
				new WOW({
					boxClass:     'wow',      // default
					animateClass: 'animated', // default
					offset:       0          // default
				}).init();
			}

		},
		isotopeActivate: function() {
			// Trigger for isotope plugin
			if($.fn.isotope) {
				var container = this.container,
					layoutMode = container.data('layoutmode');

				container.isotope({
                	itemSelector: '.portfolio-item',
                	layoutMode: (layoutMode) ? layoutMode : 'masonry',
                	transitionDuration: 0
            	});

            	
			}
		},
		isotopeReinit: function () {
			// Recall for isotope plugin
			if($.fn.isotope) {
				this.container.isotope('destroy');
				this.isotopeActivate();
			}
		},
		isotopeFilter: function () {
			// Isotope plugin filter handle
			var self = this,
				filterContainer = $('#portfolio-filter');

			filterContainer.find('a').on('click', function(e) {
				var $this = $(this),
					selector = $this.attr('data-filter');

				filterContainer.find('.active').removeClass('active');

				// And filter now
				self.container.isotope({
					filter: selector,
					transitionDuration: '0.8s'
				});
				
				$this.closest('li').addClass('active');
				e.preventDefault();
			});
		},
		blogMasonry: function () {
			/* Masonry - Grid for blog pages with isotope.pkgd.min.js file */

			// This is defined at the top of the this file
			var blogContainer = this.blogContainer;

			blogContainer.isotope({
				itemSelector: '.entry',
				masonry: {
					gutter: 30
				}
			});
		},
		productMasonry: function () {
			/* Masonry - Grid for product homepages with isotope.pkgd.min.js file */
			var productContainer = this.productContainer;

			productContainer.isotope({
				itemSelector: '.product',
				layoutmode: 'fitRows'
			});
		},
		

	};

	Travelite.init();

	// Load Event
	$(window).on('load', function() {
		/* Trigger side menu scrollbar */
		Travelite.menuScrollbar();

		/* Trigger Scroll Animations */
		Travelite.scrollAnimations();
		Travelite.ManuDropdownToggle();
		Travelite.ServiceIsotope();
		Travelite.OfferIsotope();
	});

	// Scroll Event
	$(window).on('scroll', function () {
		/* Display Scrol to Top Button */
		Travelite.scrollTopBtnAppear();

	});

	// Resize Event 
	// Smart resize if plugin not found window resize event
	if($.event.special.debouncedresize) {
		$(window).on('debouncedresize', function() {

			/* Full Height recall */
			Travelite.fullHeight();

	    });
	} else {
		$(window).on('resize', function () {
			
			/* Full Height recall */
			Travelite.fullHeight();

		});
	}

	/* Do not delete - this is trigger for owl carousels which used in bootstrap tab plugin */
	/* This is update for carousels  example (product.html) */
    $('.nav-lava').find('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
		/* Trigger resize event for to owl carousels fit */
		var evt = document.createEvent('UIEvents');
		evt.initUIEvent('resize', true, false,window,0);
		window.dispatchEvent(evt);
    });
	
	//hotelthumbnailslider
			//hotelthumbnail slider start
		$('.thumbnail_hotel_slider').bxSlider({
			pagerCustom: '#bx-pager',
			mode:'fade',
			auto:true,
			autoControls: true,
			pause: 3000,
			controls: false,
			touchEnabled: true,
			prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
			responsive: true
        });
	
   
		 $('.hotel_thumbnail_crousel').bxSlider({
		  minSlides:3,
		  maxSlides: 5,
		  auto:true,
		  autoControls: true,
		  pause: 4000,
		  moveSlides: 1,
		  controls: true,
		  pager:false,
		  responsive: true,
		  touchEnabled: true
        });
		//hotelthumbnail crousel end
				
		 //menu scroll fixed
      $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 70) {
            $('.header_bottom').addClass('fixed_top_menu').slideDown('slow');


        } else {
            $('.header_bottom').removeClass('fixed_top_menu');
        }

    });
	
})(jQuery);