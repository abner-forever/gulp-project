$(function () {
    $(window).on("click", function () {
        var content = $("input").val();
        var $msg = $("<span>");
        $msg.addClass("msg");
        $msg.text(content);
        $msg.css({
            color: "#" + randomColor(),
            fontSize: randomInt(30, 50),
            top: randomInt(0, $(window).height()),
            left: $(window).width()
        });
        $(document.body).append($msg);
        $msg.animate({
            left: -600
        }, randomInt(6000, 10000), function () {
            $msg.remove();
        })
    })
})