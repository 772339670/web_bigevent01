
// 注意: 每次调用 $.ajax $.get $.post 时
// 会先调用$.ajaxPrefilter 函数
// 在这个函数中  可以拿到给ajax 提供的配置对象
$.ajaxPrefilter(function (options) {
    console.log(options.url);
    // 在发起真正的ajax 之前  统一拼接请求的根路径
    options.url='http://api-breakingnews-web.itheima.net'+options.url
})