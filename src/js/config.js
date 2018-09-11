console.log("加载配置文件");

//主要配置路径 要求JS文件是一个模块
require.config({
    baseUrl: "localhost:8080",
    paths : {
        "jquery" : "https://cdn.bootcss.com/jquery/2.2.0/jquery.min",
        "common" : "js/common"
    }
})