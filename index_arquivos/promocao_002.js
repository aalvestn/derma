$(document).ready(function(){var o=$("#BoxPromocao"),a=$("#BoxPromocaoTexto"),n=$("#BoxPromocaoMinutos"),i=$(".BoxPromocaoMinutos"),t=$("#BoxPromocaoSegundos"),e=$(".BoxPromocaoSegundos"),c=Number(),r=$(".hidden_item"),d=$(".show_item"),s=(function(){var n=JSON.parse(promocao);if(void 0===n.id)return!1;c=n.duracao,a.html(n.texto),o.fadeIn(),location.pathname.indexOf("triptomax")>=-1&&"[]"!=promocao&&$(".contador_fixo").length&&($(".navbar_produtos").css("padding-top","70px"),$(window).on("scroll",function(){$(window).scrollTop()>=82?($(".logo").addClass("active"),$(".contador_fixo").addClass("active2")):($(".logo").removeClass("active"),$(".contador_fixo").removeClass("active2"))})),o.addClass("active_count"),r.hide(),d.show();var i=setInterval(function(){s()||(o.fadeOut(),d.hide(),r.show(),clearInterval(i))},1e3)}(),function(){if(c-1>=0){var o=parseInt(c/60),a=c%60;o<10&&(o=(o="0"+o).substr(0,2)),a<=9&&(a="0"+a),n.html(o),i.html(o),t.html(a),e.html(a),c--;var r={};return r.min=o,r.seg=a,r}return!1});if(location.pathname.indexOf("produtos")>=0||location.pathname.indexOf("carrinho")>=0){var p="",l=$("#popup-saida-form");l.find("input:text");if((-1==location.search.indexOf("cupom")||location.search.indexOf("cupom")>=0)&&"[]"==promocao){location.hostname.indexOf("slimcaps")>-1&&(p="slimpop10d"),location.hostname.indexOf("haircaps")>-1&&(p="hairpop10d"),location.hostname.indexOf("mybeautycaps")>-1&&(p="bcapspop10d"),location.hostname.indexOf("platinum4ever")>-1&&(p="p4epop10d"),location.hostname.indexOf("beyoung")>-1&&(p="beyopop10d"),location.hostname.indexOf("triptomax")>-1&&(p="tmaxpop10d"),$("#BtnQueroDesconto").on("click",function(){var o=$(this);window.location.href;o.html("AGUARDE...");var a=a=window.location.href+"?cupom="+p;return-1!=location.search.indexOf("?")&&-1!=location.search.indexOf("&cupom=")&&(a=window.location.href+p),-1!=location.search.indexOf("?")&&-1==location.search.indexOf("&cupom=")&&(a=window.location.href+"&cupom="+p),-1!=location.search.indexOf("?cupom=")&&(a=window.location.href+p),-1==location.search.indexOf("?")&&-1==location.search.indexOf("&")&&(a=window.location.href+"?cupom="+p),window.location=a,!1}),l.on("submit",function(){return $("#BtnQueroDesconto").trigger("click"),!1}),$(document).on("keyup",function(o){13==o.keyCode&&$("#popup-saida").data("bs.modal")&&$("#popup-saida").data("bs.modal").isShown&&$("#BtnQueroDesconto").trigger("click")}),$("#BtnNaoQueroDesconto").on("click",function(){return $("#popup-saida").modal("hide"),!1});ouibounce(document.getElementById("popup-saida"),{aggressive:!0,timer:0,callback:function(){$("#popup-saida").modal()}})}}});
