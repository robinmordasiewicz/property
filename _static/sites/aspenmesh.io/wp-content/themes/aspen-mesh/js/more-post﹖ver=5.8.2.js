var ppp; // Post per page
var pageNumber; // Page no.
var categoryList = [];
var filter_count = 0;

jQuery(document).ready(function(){

    jQuery('.feature-card-title').matchHeight();
	
	jQuery("#more_posts").on("click",function(){ // When btn is pressed.
		ppp = jQuery("#posts_ppp").val(); // Post per page
		pageNumber = jQuery("#posts_pageno").val();
        filter_count = categoryList.length;
        jQuery('.filter-counter').text(filter_count);
	    jQuery("#more_posts").attr("disabled",true); // Disable the button, temp.
        //Load post list with filter data
	    load_posts(pageNumber, ppp, categoryList);
	});

    jQuery('input[type="checkbox"].post_cat_item').click(function(){
        var c_option = jQuery(this).val();
        var category_id = jQuery(this).attr('data-id');
        ppp = jQuery("#posts_ppp").val(); //Post per page
        pageNumber = 0;

        if(jQuery(this).prop("checked") == true){
            //Checkbox is checked
            categoryList.push(category_id);
        }
        else if(jQuery(this).prop("checked") == false){
            //Checkbox is unchecked
            var catIndex = categoryList.indexOf(category_id);
            categoryList.splice(catIndex, 1);
        }

        filter_count = categoryList.length;
        jQuery('.filter-counter').text(filter_count);
        jQuery('#posts_category').val(categoryList);
        jQuery("#ajax-posts").html('');
        //Load post list with filter data
        load_posts(pageNumber, ppp, categoryList);
    });

    jQuery('.clear-filter').click(function(){
        ppp = jQuery("#posts_ppp").val(); // Post per page
        categoryList = [];
        filter_count = 0;
        pageNumber = 0;
        jQuery('.filter-counter').text(filter_count);
        jQuery('input[type="checkbox"].post_cat_item').prop("checked", false);
        jQuery('#posts_category').val('');
        jQuery("#ajax-posts").html('');
        //Load post list with filter data
        load_posts(pageNumber, ppp, categoryList);
    });

    jQuery(window).on('scroll', function (e) {
        e.preventDefault();
        //console.log("TEST333");
        ppp = jQuery("#posts_ppp").val(); // Post per page
        pageNumber = jQuery("#posts_pageno").val();
        filter_count = categoryList.length;
        jQuery('.filter-counter').text(filter_count);
        
        //var post_per_page_count = jQuery(".feature-item-row .feature-item:last-child").attr("data-count");

        //var post_per_page_count = 1;
        // jQuery( ".feature-item-row .feature-item" ).each(function() {
        //     post_per_page_count_check = jQuery( this ).attr("data-count");
        //     if(post_per_page_count_check < 10 ){
        //         post_per_page_count = post_per_page_count_check;
        //     }
        // });

        // var count_chk = 0;
        // jQuery('.feature-item-row .feature-item').each(function(){
        //     console.log("DATA");
        //     console.log(jQuery('.feature-item-row .feature-item').attr('data-count'));
        //     if(jQuery('.feature-item-row .feature-item').attr('data-count') < 10){
        //       count_chk = 1;
        //       return false;
        //     }
        // });
        // console.log(count_chk);

        var count_chk = 0;
        jQuery('.feature-item-row .feature-item').each(function(index){
            if(jQuery( this ).data('count') < 10){
              count_chk = 1;
              return false;
            }
        });

        if(count_chk!=1){
            if ($(window).width() < 600){ 
                if (jQuery(window).scrollTop() + jQuery(window).height()  >= jQuery(document).height() - 1700) {
                    load_posts(pageNumber, ppp, categoryList);        
                }
            }else
            if ($(window).width() < 991){ 
                if (jQuery(window).scrollTop() + jQuery(window).height()  >= jQuery(document).height() - 1050) {
                    load_posts(pageNumber, ppp, categoryList);        
                }
            }else
            { 
                if (jQuery(window).scrollTop() + jQuery(window).height()  >= jQuery(document).height() - 600) {
                    load_posts(pageNumber, ppp, categoryList);        
                }
            }
        }    
        
    });
    
});

// Load post list function
function load_posts(pageNumber, ppp, categoryList){
    jQuery(".posts_loader").show();
    jQuery("#more_posts").hide();
    pageNumber++;
    jQuery("#more_posts").attr('page', pageNumber);
    jQuery("#posts_pageno").val(pageNumber);
    var resource_page_id = jQuery("#resource_page_id").val();
    var str = 'pageNumber=' + pageNumber + '&ppp=' + ppp + '&post_categories=' + categoryList + '&resource_page_id=' + resource_page_id + '&action=more_post_ajax';
    jQuery.ajax({
        type: "POST",
        dataType: "html",
        url: ajax_posts.ajaxurl,
        data: str,
        success: function(data){
            jQuery(".posts_loader").hide();
            var $data = jQuery(data);
            if($data.length){
                jQuery("#ajax-posts").append($data);
                jQuery("#more_posts").attr("disabled",false);
                jQuery("#more_posts").show();
            } else{
                jQuery("#more_posts").attr("disabled",true);
                jQuery("#more_posts").hide();
            }
            var post_per_page_count = jQuery(".feature-item-row .feature-item:last-child").attr("data-count");
            if(post_per_page_count <= 9){            
                jQuery("#more_posts").attr("disabled",true);
                jQuery("#more_posts").hide();
            }
            jQuery('.feature-card-title').matchHeight();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            jQuery(".posts_loader").hide();
            $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
        }

    });    
    return false;
}

  