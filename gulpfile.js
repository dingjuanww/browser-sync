/*
* create by 2016-9-18
* */
var browserSync = require('browser-sync').create();  //自动同步
var gulp = require('gulp');

gulp.task('browser-sync',function () {
    var files = [
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
//代理模式（本地服务器）
    browserSync.init(files,{
        proxy: 'file:///E:/xampp/htdocs/browser-sync/index.html',  //此处根据项目实际目录填写
    });
//本地静态文件
//     browserSync.init(files, {
//         server: {
//             baseDir: './src'   //该路径到html的文件夹目录
//         }
//     });
});