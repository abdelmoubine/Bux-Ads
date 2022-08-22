;if(CloudflareApps.matchPage(CloudflareApps.installs['lJB6m62OJEEi'].URLPatterns)){(function(){'use strict'
if(!window.addEventListener)return;console.log(CloudflareApps.installs['lJB6m62OJEEi'].options);var options=CloudflareApps.installs['lJB6m62OJEEi'].options;var element,overlay=null;var overflow_=null;var onceShow=(!options.close||!options.once||sessionStorage.getItem('cloudflare-app-abm')===null);function getMaxZIndex(){var max=0,i,zIndex;var elements=document.getElementsByTagName('*');for(i=0;i<elements.length;i++){zIndex=parseInt(document.defaultView.getComputedStyle(elements[i]).zIndex,10);if(zIndex>max)max=zIndex;}
return max;}
function updateElement(){if(!onceShow)return;var zIndex=getMaxZIndex()+1;if(options.style==='block'){overlay=CloudflareApps.createElement({selector:'body',method:'append'},overlay);overlay.style.zIndex=zIndex;overlay.setAttribute('app','abm-overlay');overflow_=document.body.style.overflow;document.body.style.overflow='hidden';}else{CloudflareApps.createElement(null,overlay);if(overflow_!==null)document.body.style.overflow=overflow_;}
element=CloudflareApps.createElement({selector:'body',method:'append'},element);element.setAttribute('app','abm');var elementTitle=document.createElement('abm-title');elementTitle.innerHTML=options.proTranslation?options.translation.translationTitle:'It looks like you\'re using an ad blocker.';element.appendChild(elementTitle);var elementText=document.createElement('abm-text');elementText.innerHTML=options.proTranslation?options.translation.translationText:'But without advertising-income, we can\'t keep making this site awesome.';element.appendChild(elementText);var elementRefresh=document.createElement('abm-refresh');elementRefresh.innerHTML=options.proTranslation?options.translation.translationRefresh:'I understand, I have disabled my ad blocker.';elementRefresh.addEventListener('click',function(){location.reload();});element.appendChild(elementRefresh);if(options.close){var elementClose=document.createElement('abm-close');elementClose.innerHTML='&times;';elementClose.addEventListener('click',function(){CloudflareApps.createElement(null,element);CloudflareApps.createElement(null,overlay);if(overflow_!==null)document.body.style.overflow=overflow_;});element.appendChild(elementClose);}
elementTitle.style.fontSize=(3+options.fontSize/50)+'vmin';elementText.style.fontSize=(2+options.fontSize/50)+'vmin';elementRefresh.style.fontSize=(2+options.fontSize/50)+'vmin';var style=element.style;style.zIndex=zIndex;style.color=options.proColors?options.colors.colorText:'#fff';style.backgroundColor=options.proColors?options.colors.colorBackground:'#c00000';switch(options.style){case'top':style.top=0;style.left=0;style.width='100%';style.padding=options.warningSize/10+'%';break;case'bottom':style.bottom=0;style.left=0;style.width='100%';style.padding=options.warningSize/10+'%';break;case'corner':style.bottom='1%';style.right='1%';style.width=(100/3+options.warningSize/5)+'%';style.padding=options.warningSize/10+'%';break;case'block':style.left=(50-options.warningSize/5)+'%';style.top=(40-options.warningSize/5)+'%';style.width=(50+options.warningSize/2.5)+'%';style.margin='0 0 0 -25%';style.padding=options.warningSize/10+'%';break;}
if(options.close&&options.once)sessionStorage.setItem('cloudflare-app-abm','');}
window.CloudflareApps.installs['lJB6m62OJEEi'].scope={setOptions:function(nextOptions){options=nextOptions;updateElement();}}
function checkAdBlock(){var adblock=CloudflareApps.createElement({selector:'body',method:'append'});adblock.innerHTML='&nbsp;';adblock.classList.add('adsbox');window.setTimeout(function(){if(adblock.offsetHeight===0)updateElement();CloudflareApps.createElement(null,adblock);},100);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if("lJB6m62OJEEi"==='preview')updateElement();else checkAdBlock();});}else{if("lJB6m62OJEEi"==='preview')updateElement();else checkAdBlock();}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,LyogU2V0IHRoZSBhcHAgYXR0cmlidXRlIHRvIHlvdXIgYXBwJ3MgZGFzaC1kZWxpbWl0ZWQgYWxpYXMuICovCmNsb3VkZmxhcmUtYXBwW2FwcD0iYWJtIl0gewogIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOwogIGRpc3BsYXk6IGJsb2NrOwogIHBvc2l0aW9uOiBmaXhlZDsKICBvdmVyZmxvdzogaGlkZGVuOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAyJTsKICBoZWlnaHQ6IGF1dG87Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYWJtIl0gYWJtLXRpdGxlIHsKICBkaXNwbGF5OiBibG9jazsKICBmb250LXNpemU6IDR2bWluOwogIG1hcmdpbi1ib3R0b206IDElOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImFibSJdIGFibS10ZXh0IHsKICBkaXNwbGF5OiBibG9jazsKICBmb250LXNpemU6IDN2bWluOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImFibSJdIGFibS1yZWZyZXNoIHsKICBkaXNwbGF5OiBibG9jazsKICBmb250LXNpemU6IDN2bWluOwogIGN1cnNvcjogcG9pbnRlcjsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJhYm0iXSBhYm0tY2xvc2UgewogIGRpc3BsYXk6IGJsb2NrOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBmb250LXNpemU6IDR2bWluOwogIGN1cnNvcjogcG9pbnRlcjsKICByaWdodDogMSU7CiAgdG9wOiAxJTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJhYm0tb3ZlcmxheSJdIHsKICBkaXNwbGF5OiBibG9jazsKICBwb3NpdGlvbjogZml4ZWQ7CiAgbGVmdDogMDsKICB0b3A6IDA7CiAgd2lkdGg6IDEwMCU7CiAgaGVpZ2h0OiAxMDAlOwogIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTsKfQo=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();

$(function(){
    checkall();
});

function checkall(){
    $('#checkall').change(function(){
        var checkboxes = $(this).closest('form').find('.checkall');
        if($(this).prop('checked')) {
            checkboxes.prop('checked', true);
        } else {
            checkboxes.prop('checked', false);
        }
    });

    $('#checkall2').change(function(){
        var checkboxes = $(this).closest('form').find('.checkall2');
        if($(this).prop('checked')) {
            checkboxes.prop('checked', true);
        } else {
            checkboxes.prop('checked', false);
        }
    });
}

function sowdeletionbar(){
	var referrals=$("input:checked[name^='ref']");
	var refslist=referrals.length;
	var raction = $("#descr").val();
	$("#priceref").hide();
	$("#priceref2").hide();
	$("#paybutton").hide();
	$("#addfunds").hide();
	if(refslist>0){
		$("#rentedbar").show();	
		if(raction == "delete"){
			var price = deletion_price*refslist;
			price = price.toFixed(3);
			var step1 = 'done';
		}
		if(step1 == 'done'){
			if(rental_balance >= price){
				$("#priceref").html(totaltopay+": $"+price);
				$("#priceref").show();
				$("#paybutton").show();
			}else{
				$("#priceref2").html(noenoughfunds);
				$("#priceref2").show();
			}
		}
	}else{
		$("#rentedbar").hide();	
	}
}

/* Allocate */
function calculatecredits(value){
	var newvalue = $("#allocate").val()*value;
	$("#creditcost").val(newvalue);	
}
function recalculatecredits(value){
	var newvalue = $("#creditcost").val()/value;
	$("#allocate").val(newvalue);		
}

/* Advertise */
function updatepack(){
	specialid = $("#spackformlist").val();
	specialtext = $("#spackformlist option[value="+specialid+"]").text();
	var packlist = "<strong>"+specialtext+"</strong>";
	packlist += '<ul>';
	for (var k in specialitemsList.specialitems){
		if(specialitemsList.specialitems[k].specialpack == specialid){
			packlist += "<li>"+specialitemsList.specialitems[k].amount+" "+specialitemsList.specialitems[k].title+"</li>";
		}
	}
	packlist += '<ul>';
	$("#specialpackdescr").html(packlist);
}

function advertiseItem(formModule, itemContainer='select')
{
	$('#Msgcheckoutform').remove();
	var formID = $('#'+formModule);
	const moduleName = formID.find('input[name="product"]').val();
	if(itemContainer === 'select'){
		itemID = formID.find('select[name="item"]').val();
		itemTXT = formID.find('select[name="item"]').children('[value="'+itemID+'"]').text();
	}else{
		itemTXT = formID.find('input[name="itemTXT"]').val();
	}
	$("#itemname").html(itemTXT);
	$("#productname").html(moduleName);
	$("#ads_list").hide();

	var payment_details = '';
	$.each(formID.serializeArray(), function(i, field) {
		payment_details += '<input type="hidden" name="'+field.name+'" id="'+field.name+'" value="'+field.value+'" />';
	});
	$("#checkoutform").append(payment_details);
	$("#payment_form").show();
	return false;
}

function cancel_payad(){
	$("#payment_form").hide();
	$("#ads_list").show();
}


/* Timer */
function dateTimer(){
	var hours=mydate.getHours();
	var minutes=mydate.getMinutes();
	var seconds=mydate.getSeconds();
	if(hours<10){ hours='0'+hours;}
	if(minutes<10){minutes='0'+minutes; }
	if(seconds<10){ seconds='0'+seconds; }
	fech=hours+":"+minutes+":"+seconds;
	$("#timenow").html(fech);
	mydate.setSeconds(mydate.getSeconds()+1);
	setTimeout("dateTimer()",1000);
}

/* Rent Referrals Options */
function showextensionbar(){
	var rented=$("input:checked[name^='ref']");
	var rentedlist=rented.length;
	var raction = $("#descr").val();
	$("#priceref").hide();
	$("#priceref2").hide();
	$("#paybutton").hide();
	$("#addfunds").hide();
	
	if(rentedlist>0){
		$("#rentedbar").show();	

		if(raction == ''){	
		}else
		if(raction == 'recycle'){
			var price = recycle_price*rentedlist;
			price = price.toFixed(3)							
		}else{
			var days = ref_extension[raction]/30;
			days = days.toFixed(2);
			var price = (renew_price*rentedlist)*days;
			var price = price - ((price*ref_discount[raction])/100);
			price = price.toFixed(3);
		}
		if(rental_balance >= price){
			$("#priceref").html(totaltopay+": $"+price);
			$("#priceref").show();
			$("#paybutton").show();
		}else{
			if(price != null){
			$("#priceref2").html(noenoughfunds);
			}
			$("#priceref2").show();
			$("#addfunds").show();
		}
	}else{
		$("#rentedbar").hide();	
	}
}


/* Ads Page */
function hideAdminAdvertisement(){
	$("#admin_advertisement").remove();
	$(".blockthis").l2unblock();
}
function hideAdvertisement(id){
	$("#"+id).addClass('disabled');
}

/* Style Picker */
var listStyle = ['blue','red','green','orange'];
function stylePicker(colorPicker)
{
	var finder = listStyle.find(e => e === colorPicker);
	if(typeof finder !== "undefined"){
		$('#bootstrapStyle').attr('href','/assets/components/bootstrap5/css/'+colorPicker+'.css');
		document.cookie="site_style="+colorPicker;
	}
}
function getCookieStyle()
{
	let name = "site_style=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
function captchareload(){}