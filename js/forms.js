$(document).delegate('form.ajaxForm','submit',function (e) {
    methodType = $(this).attr('method');
    if(methodType === 'post')
    {
        //Alert Msg Position
        $this = $(this);
        if(typeof $this.attr('data-alert') !== 'undefined')
        {
            alertDiv = $this.attr('data-alert');
        }else{
            alertDiv = 'Msg'+this.id;
            if($("#"+alertDiv).length == 0)
            {
                $(this).prepend('<div id="'+alertDiv+'"></div>');
            }
        }
        dataForm = new FormData(document.getElementById(this.id));
        form_id = this.id;

        $(this).ajaxSubmit({
            url: $(this).attr('action'),
            method: 'POST',
            dataType: 'json',
            dataForm: dataForm,
            beforeSubmit: function () {
                $("#"+alertDiv).alertMsgClose();
            },
            afterSubmit: function (data) {
                if(data.status === 'error') {
                    $("#" + alertDiv).alertMsg({
                        msg: data.msg
                    });
                    $('html,body').animate({
                            scrollTop: $("#"+alertDiv).offset().top-60},
                        'slow');

                    if(typeof captchareload === "function"){
                        captchareload();
                    }
                    if(data.reset == 1)
                    {
                        $("#" + form_id)[0].reset();
                    }
                    if(data.script){
                        eval(data.script);
                    }
                }else if(data.status === 'success') {
                    $("#" + alertDiv).alertMsg({
                        msg: data.msg,
                        type: 'success'
                    });
                    if(data.reset == 1)
                    {
                        $("#" + form_id)[0].reset();
                    }
                    if(data.delete == 1){
                        $("#" + form_id).remove();
                    }

                    if(data.script){
                        eval(data.script);
                    }
                    $('html,body').animate({
                            scrollTop: $("#"+alertDiv).offset().top-60},
                        'slow');
                }else if(data.status === 'refresh'){
                    window.location = location.href;
                }else if(data.status === 'script'){
                    eval(data.msg);
                    if(data.reset == 1)
                    {
                        $("#" + form_id)[0].reset();
                    }
                    if(data.delete == 1){
                        $("#" + form_id).remove();
                    }
                }else if(data.status === 'content'){
                    $("#" + alertDiv).html(data.msg);
                    if(data.reset == 1)
                    {
                        $("#" + form_id)[0].reset();
                    }
                    if(data.delete == 1){
                        $("#" + form_id).remove();
                    }
                    if(data.script){
                        eval(data.script);
                    }
                    $('html,body').animate({
                            scrollTop: $("#"+alertDiv).offset().top-60},
                        'slow');
                }else if(data.status === 'redirect'){
                    window.location.href = data.msg;
                }
            },
            errorSubmit: function () {
                $("#"+alertDiv).alertMsg({msg:'Oops, we found an error! Please try again or refresh this page.'});
                $('html,body').animate({
                        scrollTop: $("#"+alertDiv).offset().top-60},
                    'slow');
            }
        });
    }else{
        loadPage($(this).attr('action'), $(this).serialize());
    }
    return false;
});

function blockContent(div) {
    $(div).block({
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
}