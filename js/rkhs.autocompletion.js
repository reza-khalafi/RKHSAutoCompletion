
/*!
 * jQuery Plugin: RKHSAutoCompletion Autocomplete Text Entry 
 * Version 1.0
 * Copyright (c) 2017 Reza Khalafi (r.khalafi65@gmail.com)
 * Email address: r.khalafi65@gmail.com
 * jQuery JavaScript Library v2.1.4
 * MIT licenses
 */




function rkhsAutoCompletion (searchInputId,hiddenInputId) {
	
       $('#'+searchInputId).after('<div class="rkhs-result" ></div>');
       $('.rkhs-result').after('<div class="rkhs-names-show" ></div>');

	      $(document.body).on('keyup', '#'+searchInputId, function(){   

      var input_value = $(this).val();  
      var input_value_data = 'q='+ input_value;  
      if(input_value_data!=''){
      	$.ajax({
            type: "get",
            url: 'backend/backend.php',
            data: input_value_data,
            contentType: "application/x-www-form-urlencoded",
            success: function(responseData, textStatus, jqXHR) {

                var res_arr =  JSON.parse(responseData);
                if (res_arr.length != 0) {
                	var str = '<ul id="rkhs-responses" >';
                	for (var i = 0; i < res_arr.length; i++) {
                		str += '<li class="rkhs-select-responses" id="'+res_arr[i][0]+'" >'+res_arr[i][1]+'</li>';
                	}
                	str += '</ul>';
                }else{
                	var str = '';
                }

    			     $(".rkhs-result").html(str).show();

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //console.log(errorThrown);
            }
        });
      } 

  });//keyup


      
	jQuery(document).on('click', '.rkhs-select-responses', function(e) { 
		var select_res_id = $(this).attr('id');
		var select_res_name = $(this).text();
		var sp = '<span class="rkhs-select-sp-id" id="'+select_res_id+'" >'+select_res_name+'<i class="rkhs-select-res-i" id="'+select_res_id+'"><img class="rkhs-cancel-image" src="image/cancel.png" select_res /></i></span>';
		$(sp).appendTo(".rkhs-names-show");

    var set_list_id = $('#'+hiddenInputId).val();
    if (set_list_id=='') {
      $('#'+hiddenInputId).val(select_res_id);
    }else{
      $('#'+hiddenInputId).val(set_list_id+','+select_res_id);
    }

    console.log(select_res_name);

      });



  jQuery(document).on('click', '.rkhs-select-res-i', function(e) { 
    var select_i_id = $(this).attr('id');
    var set_list_id = $('#'+hiddenInputId).val();

    $(this).parent().remove();

    if (set_list_id.includes(','+select_i_id)) {
      set_list_id = set_list_id.replace(','+select_i_id,'');
    }else{
      set_list_id = set_list_id.replace(select_i_id,'');
    }
    

    $('#'+hiddenInputId).val(set_list_id);

      });










}






