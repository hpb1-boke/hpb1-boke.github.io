// build time:Thu Apr 30 2020 19:14:11 GMT+0800 (GMT+08:00)
var searchFunc=function(e,t,r){"use strict";$.ajax({url:e,dataType:"xml",success:function(e){var a=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var i=document.getElementById(t);var n=document.getElementById(r);i.addEventListener("input",function(){var e='<ul class="search-result-list">';var t=this.value.trim().toLowerCase().split(/[\s\-]+/);n.innerHTML="";if(this.value.trim().length<=0){return}a.forEach(function(r){var a=true;var i=[];var n=r.title.trim().toLowerCase();var s=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var l=r.url;var c=-1;var u=-1;var f=-1;if(n!=""&&s!=""){t.forEach(function(e,t){c=n.indexOf(e);u=s.indexOf(e);if(c<0&&u<0){a=false}else{if(u<0){u=0}if(t==0){f=u}}})}if(a){e+="<li><a href='"+l+"' class='search-result-title'>"+n+"</a>";var o=r.content.trim().replace(/<[^>]+>/g,"");if(f>=0){var v=f-20;var h=f+80;if(v<0){v=0}if(v==0){h=100}if(h>o.length){h=o.length}var m=o.substr(v,h);t.forEach(function(e){var t=new RegExp(e,"gi");m=m.replace(t,'<em class="search-keyword">'+e+"</em>")});e+='<p class="search-result">'+m+"...</p>"}e+="</li>"}});e+="</ul>";n.innerHTML=e})}})};
//rebuild by neat 