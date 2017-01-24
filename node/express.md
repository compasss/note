# express 使用

## 相关框架介绍

### http-proxy

1. 配合express一起i使用的注意事项 
    + express 框架默认加载了“body-parser”框架，会把所有HTTP请求中的body部分转换为Object。
    + 将api转发的中间件放在“body-parser”中间件的前面。
    + eg: ```app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        app.use(logger('dev'));
        //http-proxy 中间件放置在这里
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));```
    