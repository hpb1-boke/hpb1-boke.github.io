// build time:Fri May 01 2020 12:11:09 GMT+0800 (GMT+08:00)
var a_idx=0;jQuery(document).ready(function(a){a("body").click(function(o){var n=new Array("å¯Œå¼º","æ°‘ä¸»","æ–‡æ˜Ž","å’Œè°","è‡ªç”±","å¹³ç­‰","å…¬æ­£","æ³•æ²»","çˆ±å›½","æ•¬ä¸š","è¯šä¿¡","å‹å–„");var t=a("<span></span>").text(n[a_idx]);a_idx=(a_idx+1)%n.length;var e=o.pageX,d=o.pageY;t.css({"z-index":1e69,top:d-20,left:e,position:"absolute","font-weight":"bold",color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"});a("body").append(t);t.animate({top:d-180,opacity:0},1500,function(){t.remove()})})});
//rebuild by neat 