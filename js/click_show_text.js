// build time:Sat May 09 2020 00:19:10 GMT+0800 (GMT+08:00)
var a_idx=0;jQuery(document).ready(function(e){e("body").click(function(t){var o=new Array("��ǿ","����","����","��г","����","ƽ��","����","����","����","��ҵ","����","����");var a=e("<span/>").text(o[a_idx]);a_idx=(a_idx+1)%o.length;var i=t.pageX,n=t.pageY;a.css({"z-index":5,top:n-20,left:i,position:"absolute","font-weight":"bold",color:"#FF0000"});e("body").append(a);a.animate({top:n-180,opacity:0},3e3,function(){a.remove()})});setTimeout("delay()",2e3)});function delay(){$(".buryit").removeAttr("onclick")}
//rebuild by neat 