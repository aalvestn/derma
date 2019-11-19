$(document).ready(function () {
    var promocao = null;
    var o = $("#BoxPromocao"),
        a = $("#BoxPromocaoTexto"),
        n = $("#BoxPromocaoMinutos"),
        e = $("#BoxPromocaoSegundos"),
        t = Number(),
        i = function (o) {
            dataLayer.push({
                ecommerce: {
                    promoView: {
                        promotions: [{
                            id: o.id,
                            name: o.nome
                        }]
                    }
                }
            })
        },
        c = (function () {
            var n = JSON.parse(promocao);
            if (void 0 === n.id) return !1;
            t = n.duracao, a.html(n.texto), o.fadeIn(), location.pathname.indexOf("triptomax") >= -1 && "[]" != promocao && $(".contador_desconto").length >= 1 && (location.search.indexOf("c=tab") > -1 || "/produtos-taboola" == window.location.pathname ? $(".navbar").css("padding-top", "95px") : $(".navbar").css("padding-top", "165px")), $(".contador_desconto").length >= 1 && ($(".menu").removeClass("menu-fixed"), $(".menu").addClass("scroll"), $(".contador_desconto").addClass("active_count"), $(".produtos_header").css("padding-top", "0"), window.location.href.indexOf("slimcaps") > -1 && ($(".carrinho_line").css("padding-top", "10px"), $(".produtos_header-v2").length >= 1 && $(".produtos_header-v2").css("margin-top", "33px"), (location.search.indexOf("c=tab") > -1 || "/produtos-taboola" == window.location.pathname) && $(".scroll").css("margin-top", "75px")), "/carrinho" == window.location.pathname && $(".contador_desconto").css("position", "absolute")), $("#hidden_mobile").hide();
            var e = setInterval(function () {
                c() || (o.fadeOut(), $(".navbar").css("padding-top", "0px"), $("#hidden_mobile").show(), clearInterval(e))
            }, 1e3);
            i(n)
        }(), function () {
            if (t - 1 >= 0) {
                var o = parseInt(t / 60),
                    a = t % 60;
                o < 10 && (o = (o = "0" + o).substr(0, 2)), a <= 9 && (a = "0" + a), n.html(o), e.html(a), t--;
                var i = {};
                return i.min = o, i.seg = a, i
            }
            return !1
        });
    if ($(".header_products-booster").length >= 1 && $(".header_products-booster-no-scroll").length < 1 && setTimeout(function () {
            $.scrollTo($("#addMargin"), 800)
        }, 3e3), location.pathname.indexOf("produtos") >= 0 || location.pathname.indexOf("carrinho") >= 0) {
        var r = "";
        (-1 == location.search.indexOf("cupom") || location.search.indexOf("cupom") >= 0) && "[]" == promocao && (location.hostname.indexOf("slimcaps") > -1 && (r = "slimpop10m"), location.hostname.indexOf("haircaps") > -1 && (r = "hairpop10m"), location.hostname.indexOf("mybeautycaps") > -1 && (r = "bcapspop10m"), location.hostname.indexOf("platinum4ever") > -1 && (r = "p4epop10m"), location.hostname.indexOf("beyoung") > -1 && (r = "beyopop10m", show_email = !1), location.hostname.indexOf("triptomax") > -1 && (r = "tmaxpop10m"), $("#BtnQueroDesconto").on("click", function () {
            $(this).html("AGUARDE...");
            var o = o = window.location.href + "?cupom=" + r;
            return -1 != location.search.indexOf("?") && -1 != location.search.indexOf("&cupom=") && (o = window.location.href + r), -1 != location.search.indexOf("?") && -1 == location.search.indexOf("&cupom=") && (o = window.location.href + "&cupom=" + r), -1 != location.search.indexOf("?cupom=") && (o = window.location.href + r), -1 == location.search.indexOf("?") && -1 == location.search.indexOf("&") && (o = window.location.href + "?cupom=" + r), window.location = o, !1
        }), $("#BtnNaoQueroDesconto").on("click", function () {
            $("#popup-saida-mobile").modal("hide"), $("body").removeClass("body_active")
        }), $(".close_modal").on("click", function () {
            $("#popup-saida-mobile").modal("hide"), $("body").removeClass("body_active")
        }))
    }
});