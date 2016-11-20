function randomGen(length) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for(var i = 0; i < length; ++i) {
        result += chars[ Math.floor(Math.random() * chars.length) ];
    }
    return result;
}

$(function(){
    $("#execute").click(function(){
        $("#app").html("");
        for(var i = 0; i < 1; ++i) {
            var e = $("<div>");
            e.addClass("qr");
            $("#app").append(e);
        }
        $(".qr").qrcode(randomGen(256));        
    });
})