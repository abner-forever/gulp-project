console.log("加载主页js文件")
require(["config"],function(){
    require(['jquery','common'], function($) {
        console.log($);
        var p = document.getElementById("test");
        draggedele({
            ele :p
        })
    });
})