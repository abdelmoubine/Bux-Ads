(function ($) {

    $.fn.ajaxSubmit = function(options){
        var settings = $.extend({}, $.fn.ajaxSubmit.defaults, options);
        this.each(function(){
            //BlockUI
            $(this).block({
                message: '<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.7,
                    cursor: 'normal'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'transparent'
                }
            });
            //End BlockUI

            if (settings.beforeSubmit && settings.beforeSubmit() === false) {
                $(this).unblock();
                return false;
            }
            //Load page
            form = this;
            $.ajax({
                url: settings.url,
                method: settings.method,
                data: settings.dataForm,
                dataType: settings.dataType,
                cache: false,
                processData: false,
                contentType: false
            }).done(function(data) {
                $(form).unblock();
                if (settings.afterSubmit && settings.afterSubmit(data) === false) {
                    return false;
                }
            }).fail(function(jqXHR, textStatus, errorThrown) {
                $(form).unblock();
                if (settings.errorSubmit && settings.errorSubmit(jqXHR, textStatus, errorThrown) === false) {
                    return false;
                }
            });
            return false;
            //End Load Page
        });
    };
    $.fn.ajaxSubmit.defaults = {
        dataType: 'html',
        url: '',
        beforeSubmit: '',
        afterSubmit: '',
        method: 'GET',
        errorSubmit: '',
        dataForm: ''
    };
})(jQuery);

