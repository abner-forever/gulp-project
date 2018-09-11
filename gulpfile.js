let gulp = require("gulp");
let minifyJS = require("gulp-babel-minify");
let minifyCSS = require("gulp-clean-css");
let connect = require("gulp-connect");
//定义一个build的任务
gulp.task("build", () => {
    //压缩JS文件
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))
    //压缩CSS文件
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))
    //复制HTML
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"));

});

//刷新html界面
gulp.task("refreshHTML", () => {
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload());
})

gulp.task("refreshCSS", () => {
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))
})

gulp.task("refreshJS", () => {
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))
})

gulp.task("server", () => {
    //创建服务器
    connect.server({
        root: "dist", //指定服务器根目录
        port: 8080,
        livereload: true
    })
    //添加监视器,监视所有文件的变化 ,执行相应任务
    gulp.watch("./src/**/*.html", ["refreshHTML"]);
    gulp.watch("./src/**/*.css", ['refreshCSS', 'refreshHTML']);
    gulp.watch("./src/**/*.js", ['refreshJS','refreshHTML']);

})
