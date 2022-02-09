jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();

jQuery(document).ready(function($){
	if (jQuery('.multistep-slider-container').length) {
	  jQuery('.multistep-slider-container').slick({
	    dots: true,
	    infinite: false,
	    adaptiveHeight: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    fade: true,
	    speed: 500,
	    swipe: false,
		swipeToSlide: false,
		touchMove: 'false',
		draggable: 'false',
	    cssEase: 'ease-in-out',
	    accessibility: false,
	    nextArrow: jQuery('.slick-next'),
	    touchThreshold: 100
	  });
	    jQuery('.multistepmultistep-slider-container').slick('setPosition');
	}


	/* Support policy page jump to link js start */
     /*	jQuery(document).on('click', '#support-overview', function(e) {
		e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: jQuery(".support-overview").offset().top-50},
        'slow');
	});

	jQuery(document).on('click', '#service-rmp', function(e) {
		e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: jQuery(".service-rmp").offset().top},
        'slow');
	});

	jQuery(document).on('click', '#product-slp', function(e) {	
		e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: jQuery(".product-slp").offset().top-50},
        'slow');
	});

jQuery(document).on('click', '#related-contents', function(e) {
		e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: jQuery(".related-contents").offset().top-50},
        'slow');
	});  */
        
        jQuery(document).on('click', '.jump-to-links a', function(e) {
		e.preventDefault();
		var jumpid = jQuery(this).attr('id');
		//alert(jumpid);
    jQuery('html,body').animate({
        scrollTop: jQuery("."+jumpid).offset().top-50},
        'slow');
	});  

	/* Support policy page jump to link js end */

	jQuery(".multistep-slider ul.slick-dots").css("opacity","0");

	jQuery(document).on("click",".quick-startbtn",function(){
		jQuery(".multistep-slider").css({"height":"100%","overflow":"visible"});
		jQuery(".landing-page").hide();
		jQuery(".multistep-slider ul.slick-dots").css("opacity","1");
	});

	jQuery(document).on("click","#show-resultpage",function(){
		jQuery(".results-page").addClass("results-show").css("display","block");
		jQuery(".multistep-slider").hide();
	});

	jQuery(document).on("click","#form-one .radio-label-one",function(){
		jQuery("#question-first-btn").removeClass("cta_button_disable");
		jQuery(".radio-label-one").removeClass("checked");
		jQuery(this).addClass("checked");
	});

	jQuery(document).on("click","#form-two .radio-label-two",function(){
		jQuery("#question-second-btn").removeClass("cta_button_disable");
		jQuery(".radio-label-two").removeClass("checked");
		jQuery(this).addClass("checked");
	});

	jQuery(document).on("click","#form-three .radio-label-three",function(){
		jQuery("#question-third-btn").removeClass("cta_button_disable");
		jQuery(".radio-label-three").removeClass("checked");
		jQuery(this).addClass("checked");
	});

	jQuery(document).on("click","#form-four .radio-label-four",function(){
		jQuery("#see-quiz-results").removeClass("cta_button_disable");
		jQuery(".radio-label-four").removeClass("checked");
		jQuery(this).addClass("checked");
	});
	
	jQuery('.quick-startbtn,.slick-next.slick-arrow').click(function(){
		jQuery('html, body').animate({scrollTop : 0},500);
	});

	jQuery('.result-box').mouseenter(function(){ 
		jQuery('.result-box').addClass("transparent-bg");
		jQuery(this).removeClass("transparent-bg");
		jQuery('.result-box').removeClass("white-bg");
		jQuery(this).addClass("white-bg"); 
	});

	jQuery(document).mousemove(function(){
        if(jQuery(".result-box:hover").length != 0){
			// do nothing
        }else{
        	jQuery('.result-box').removeClass("white-bg");
        	jQuery('.result-box').addClass("transparent-bg");
        }
    });

	jQuery(".slick-dots li").addClass("btn-disabled-chk");
	jQuery('.slick-dots li button').css('opacity', '0');
	jQuery(".slick-dots li button").on('click', function(e){
		e.stopPropagation();
	});

	jQuery(".slick-dots").on('mouseenter','.btn-disabled-chk', function(){ 
		jQuery(".slick-dots li:not(.btn-disabled-chk)").addClass('highlight_element'); 
		jQuery(".slick-next button").addClass('highlight_element'); 
	});
	jQuery(".slick-dots").on('mouseout','.btn-disabled-chk', function(){ 
		jQuery(".slick-dots li:not(.btn-disabled-chk)").removeClass('highlight_element');
		jQuery(".slick-next button").removeClass('highlight_element'); 
	});

	jQuery(".form-2-1,.form-2-2,.form-2-3,.form-2-4,.form-2-1-1,.form-2-1-2,.form-2-1-3,.form-2-2-1,.form-2-2-2,.form-2-2-3,.form-2-2-4,.form-2-3-1,.form-2-3-2,.form-2-3-3,.form-2-4-1,.form-2-4-2").hide();

	jQuery('#question-first-btn, #question-second-btn, #question-third-btn, #see-quiz-results').addClass('cta_button_disable');

	jQuery('#question-first-btn').click(function(){
	   	if(jQuery('#form-one').find('.radio-label-one').hasClass('checked')){
	   		jQuery(".slick-dots li:nth-child(1)").removeClass("btn-disabled-chk");
	   		jQuery(".slick-dots li:nth-child(1) button").unbind("click");
		    return true; 
	   	}else{ 
		    return false; 
	   	} 
	});

	jQuery('#question-second-btn').click(function(){
	   if(jQuery('#form-two').find('.radio-label-two').hasClass('checked')){
	   		jQuery(".form-2-1,.form-2-2,.form-2-3,.form-2-4").hide();
	   		var chkedRadio = jQuery('#form-two').find('.checked input[type=radio][name=question-second-radio]').attr('id');
	   		jQuery('.'+chkedRadio).show();
		    jQuery(".slick-dots li:nth-child(2)").removeClass("btn-disabled-chk");
		    jQuery(".slick-dots li:nth-child(2) button").unbind("click");
		    return true;
	   }else{ 
		   return false; 
	   } 
	});

	jQuery('#question-third-btn').click(function(){
	   if(jQuery('#form-three').find('.radio-label-three').hasClass('checked')){
	   		jQuery(".form-2-1-1,.form-2-1-2,.form-2-1-3,.form-2-2-1,.form-2-2-2,.form-2-2-3,.form-2-2-4,.form-2-3-1,.form-2-3-2,.form-2-3-3,.form-2-4-1,.form-2-4-2").hide();
	   		var chkedRadios = jQuery('#form-three').find('.checked input[type=radio][name=question-third-radio]').attr('id');
	   		jQuery('.'+chkedRadios).show();
		    jQuery(".slick-dots li:nth-child(3)").removeClass("btn-disabled-chk");
		    jQuery(".slick-dots li:nth-child(3) button").unbind("click");
		    return true;
	   }else{  
		   return false; 
	   } 
	});

	jQuery('#see-quiz-results').click(function(){

	   if(jQuery('#form-four').find('.radio-label-four').hasClass('checked')){
		    jQuery(".slick-dots li").removeClass("btn-disabled-chk");
		    jQuery(".slick-dots li button").unbind("click");

			var ansone = jQuery("#form-one").find('.checked').find("input[name='question-first-radio']").val();
			var anstwo = jQuery("#form-two").find('.checked').find("input[name='question-second-radio']").val();
			var ansthree = jQuery("#form-three").find('.checked').find("input[name='question-third-radio']").val();
			var ansfour = jQuery("#form-four").find('.checked').find("input[name='question-fourth-radio']").val();
	
			jQuery(".ans-bottom-first").find("p").html(ansone);
			jQuery(".ans-bottom-second").find("p").html(anstwo);
			jQuery(".ans-bottom-third").find("p").html(ansthree);
			jQuery(".ans-bottom-fourth").find("p").html(ansfour);

			var dataAnsone = jQuery("#form-one").find('.checked').find("input[name='question-first-radio']").data('answer');
			var dataAnstwo = jQuery("#form-two").find('.checked').find("input[name='question-second-radio']").data('answer');
			var dataAnsthree = jQuery("#form-three").find('.checked').find("input[name='question-third-radio']").data('answer');
			var dataAnsfour = jQuery("#form-four").find('.checked').find("input[name='question-fourth-radio']").data('answer');
	
			jQuery("#first-ans-desc").html(dataAnsone);
			jQuery("#second-ans-desc").html(dataAnstwo);
			jQuery("#third-ans-desc").html(dataAnsthree);
			jQuery("#fourth-ans-desc").html(dataAnsfour);

			function getIP() {
			  return $.getJSON("https://json.geoiplookup.io/api?callback=?").then(function(
			    result
			  ) {
			    return result ? result.ip : null;
			  });
			}

			function getContextData(ip) {
			  var hutk = document.cookie.replace(
			    /(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/,
			    "$1"
			  );

			  return {
			    hutk,
			    ipAddress: ip,
			    pageName: document.title,
			    pageUri: document.location.href,
			  };
			}

			function getPostData(ip) {
			  return {
			    submittedAt: Date.now(),
			    fields: [
			      {
			        name: "role_at_company",
			        value: ansone,
			      },
			      {
			        name: "general_desired_outcome",
			        value: anstwo,
			      },
			      {
			        name: "specific_desired_outcome",
			        value: ansthree,
			      },
			      {
			        name: "most_important_to_you",
			        value: ansfour,
			      },
			    ],
			    context: getContextData(ip),
			  };
			}

			function getSubmissionUrl() {
			  var portalID = 5464721;
			  var formID = "d7c83eb0-83d6-4c36-9361-63b9c7dea5c6";
			  return `https://api.hsforms.com/submissions/v3/integration/submit/${portalID}/${formID}`;
			}

			function sendFormDataToHubspot() {
			  var ip = getIP().then((ip) => {
			    var data = JSON.stringify(getPostData(ip));
			    var xhr = new XMLHttpRequest();
			    xhr.open("POST", getSubmissionUrl());
			    xhr.setRequestHeader("Content-Type", "application/json");

			    xhr.onreadystatechange = function() {
			      if (xhr.readyState == 4 && xhr.status == 200) {
			        console.log(
			          "Success! Hubspot form data successfully sent",
			          xhr.responseText
			        );
			      } else if (
			        xhr.readyState == 4 &&
			        (xhr.status == 400 || xhr.status == 403 || xhr.status == 404)
			      ) {
			        console.warn(
			          `Hubspot form response received code ${xhr.status}`,
			          xhr.responseText
			        );
			      }
			    };

			    xhr.send(data);
			  });
			}

			sendFormDataToHubspot();
		    return true;
	   }else{ 
		   return false; 
	   } 
	});
     /* JQuery Back Link */
jQuery('#back-link').click(function() {
         history.go(-1) 
       }); 
 /* JQuery Gated content page Remove empty p tag */  
jQuery( '.gta-content-layout p:empty' ).remove();         
});      