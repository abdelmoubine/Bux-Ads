( function($) {
    $.fn.alertMsg = function(options){
        var settings = $.extend({
            msg: "",
            status: 'active',
            type: "error"
        }, options);

        this.each(function(){
            var $this = jQuery(this);
            var div_id = this.id;
            if(settings.status === 'hide')
            {
                $("#msg_"+div_id).hide();
            }else{
                $("#msg_"+div_id).hide();
                if(settings.type === 'success')
                {
                    div_class = "alert-success";
                }else if(settings.type === 'info'){
                    div_class = "alert-info";
                }else if(settings.type === 'warning'){
                    div_class = "alert-warning";
                }else{
                    div_class = "alert-danger";
                }

                $this.html('<div class="alert '+div_class+'">'+settings.msg+'</div>');
                $("#msg_"+div_id).fadeIn();
            }
        });
    };

    $.fn.alertMsgClose = function () {
        this.each(function () {
            $(this).html('');
        });
    };
})(jQuery);