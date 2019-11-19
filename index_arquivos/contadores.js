function startCountdown(){
    
    if(tempo-1>=0){
        var t=parseInt(tempo/60),
        o=tempo%60;
        t<10&&(t=(t="0"+t).substr(0,2)),
        o<10&&(o=(o="0"+o).substr(0,2)),
        horaImprimivelMin=t,
        horaImprimivelSeg=o,
        $("#BoxPromocaoMinutos").html(horaImprimivelMin),
        $("#BoxPromocaoSegundos").html(horaImprimivelSeg),
        setTimeout("startCountdown()",1e3),
        tempo--
    }else 
    $("#BoxPromocaoMinutos").html("00"),
    $("#BoxPromocaoSegundos").html("00")
}

function startCountdown(){
    
    if(tempo-1>=0){
        var t=parseInt(tempo/60),
        o=parseInt(t/60);
        t=parseInt(t%60);
        var r=tempo%60;o<10&&(o=(o="0"+o).substr(0,2)),
        t<10&&(t=(t="0"+t).substr(0,2)),
        r<10&&(r=(r="0"+r).substr(0,2)),
        horaImprimivelMin=t,
        horaImprimivelHora=o,
        horaImprimivelSeg=r,
        $("#hora_contador").html(horaImprimivelHora),
        $("#BoxPromocaoMinutos").html(horaImprimivelMin),
        $("#BoxPromocaoSegundos").html(horaImprimivelSeg),
        
        setTimeout("startCountdown()",1e3),
        tempo--
    }else 
    $("#hora_contador").html("00"),
    $("#BoxPromocaoMinutos").html("00"),
    $("#BoxPromocaoSegundos").html("00")
}

if($(".timer_contador").length>=1){
    o=$("#BoxPromocao");
    o.fadeIn();
    o.css("top","0px");

    menufixed=$('.menu-fixed');
    menufixed.css("position","relative");
    menufixed.css("margin-top","160px");
    var TotalSegundos="300",
    tempo=new Number;
    tempo=parseInt(TotalSegundos),
    startCountdown()
}

if($(".timer_contador_sucesso").length>=1){
    var TotalSegundos="259200",
    tempo=new Number;
    tempo=parseInt(TotalSegundos),
    startCountdown()
}
