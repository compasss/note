---
layout: default
title: express
parent: node
nav_order: 1
categories: node
---

# express 使用

## 索引

* [相关框架介绍](#相关框架介绍)
    - [http-proxy](#http-proxy)
    - [session](#session)
    - [connect-redis](#connect-redis)
    - [ioredis](#ioredis)

## 相关框架介绍

### http-proxy
作用: http 转发
github地址： [node-http-proxy](https://github.com/nodejitsu/node-http-proxy "官网API地址")

1. 配合express一起使用的注意事项 
    + 坑 1：
        - express 框架默认加载了“body-parser”框架，会把所有HTTP请求中的body部分转换为Object。
    + 解决方案：
        - 将api转发的中间件放在“body-parser”中间件的前面。
    + eg: 
        ```javascript
        app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        app.use(logger('dev'));
        //http-proxy 中间件放置在这里
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        ```
    + 坑2
        - 默认没有处理error
    + 解决方案
        - 监听error事件，做相应的逻辑处理
    + eg:
        ```javascript
        apiProxy.on('error', function (err, req, res) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end('api接口转发报错');
        });
        ```
2. http-proxy options
    + target: http转发的目标地址
    + changeOrigin: 是否用target中的url地址替换HTTP请求的host地址
    + headers: 改变proxy的HTTP请求头
    + proxyTimeout: proxy超时时间，单位ms。
3. http-proxy event
    + error: http 转发报错
    + proxyReq: http请求发送前触发，用于web proxy
    + proxyReqWs: 与proxyReq相同，用于websocket
    + proxyRes: http 返回数据以后触发
    + open websocket 连接建立以后触发
    + close websocket 连接关闭以后触发
4. 使用介绍
    + http-proxy 引用
        ```javascript
        var httpProxy = require('http-proxy'); //引用 http-proxy
        var proxy = httpProxy.createProxyServer({
            target: 10.0.13.127,
            changeOrigin: true,
            proxyTimeout: 5000
        }); // 实例化http-proxy options参考官网api
        ```
    + web api proxy
        ```javascript
            //router: express Router 实例
            router.get(/api/*, (req, res, next){
                proxy.web(req, res);
            })
        ```
    + web socket 的用法请参照官方api

### session
作用： 操作浏览器的session
github地址： [session](https://github.com/expressjs/session "官网API地址")

1. options
    + cookie
        - 设置session的domain、maxAge等属性
        - eg:
            ```javascript
            app.use(session({
                cookie: { path: '/', httpOnly: true, secure: false, maxAge: 3600 }
            }))
            ```
    + genid
        - 生成一个session ID，接受一个callback
        - eg:
            ```javascript
            app.use(session({
                genid: function(req) {
                    return genuuid() // use UUIDs for session IDs
                },
            }))
    + name
        - session ID 的名字
        - default: connect.sid
    + proxy
        - 信任反向代理的cookies
        - default: undefined
    + resave
        - 每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
    + rolling
        - 在每一次HTTP response 都会强行带上session ID
    + saveUninitialized
        - 无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
    + secret
        - 用于session ID 签名
    + store
        - session store 实例， 可以配合connect-redis、ioredis一起使用
    + unset
        - 控制session ID 
        - default: keep
2. functions
    + Session.regenerate(callback)
        - 重置session ID
        - eg:
            ```javascript
            req.session.regenerate(function(err) {
                // will have a new session here
            })
            ```
    + Session.destroy(callback)
        - 删除session ID，并且不会产生新的session ID
        - eg:
            ```javascript
            eq.session.destroy(function(err) {
                // cannot access session here
            })
            ```
    + Session.reload(callback)
    + Session.save(callback)
    + Session.touch()
### connect-redis
作用：连接redis，<span style="color:red">不支持redis sentinel</span>
github地址： [connect-redis](https://github.com/tj/connect-redis "官网API地址")

1. options
    + client An existing client
    + host Redis server hostname
    + port Redis server portno
    + socket Redis server unix_socket
    + url Redis server url
    + ttl Redis session TTL (expiration) in seconds. Defaults to session.maxAge (if set), or one day.
    + disableTTL Disables setting TTL, keys will stay in redis until evicted by other means (overides ttl)
    + db Database index to use. Defaults to Redis's default (0).
    + pass Password for Redis authentication
    + prefix Key prefix defaulting to "sess:"
    + unref Set true to unref the Redis client. Warning: this is an experimental feature.
    + serializer An object containing stringify and parse methods compatible with Javascript's JSON to override the serializer used
2. basic use
    + eg:
        ```javascript
        var session = require('express-session');
        var RedisStore = require('connect-redis')(session);
        app.use(session({
            store: new RedisStore({
                "host": 10.0.13.127,
                "port": 6379,
                "ttl"： 3600
            }),
            secret: 'keyboard cat'
        }));
        ```
### ioredis
作用：连接redis，<span style="color:green">支持redis sentinel</span>
github地址： [connect-redis](https://github.com/tj/connect-redis "官网API地址")

1. basic use with express session
    + without redis sentinel eg: 
        ```javascript
        var redis = require("ioredis");
        app.use(session({
            store: new Redis({
                port: 6379,          // Redis port
                host: '127.0.0.1',   // Redis host
                family: 4,           // 4 (IPv4) or 6 (IPv6)
                password: 'auth',
                db: 0
            })
        }))
        ```
    + with redis sentinel
        ```javascript
        var sessionRedis = require('connect-redis')(session);
        var ioRedis = require('ioredis');
        var redisSentinel = new ioRedis({
            sentinels: [{ host: 'localhost', port: 26379 }, { host: 'localhost', port: 26380 }],
            name: 'mymaster'
        });
        app.use(session({
            store: new sessionRedis({
                "client": redisSentinel,
                "db": 6,
                "prefix": "session:edu:",
                "secret": 'edu%^*$$*$#@!?:*-+666',
                "saveUninitialized": false,
            }),
        }))
        ```
### magickwand
作用：处理图片
github地址： [magickwand](https://www.npmjs.com/package/magickwand "官网API地址")