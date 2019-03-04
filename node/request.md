---
layout: default
title: npm request
parent: node
nav_order: 1
categories: node
---

## request use

1.  self-signed ssl certificate error
The best way to fix this:
Renew the certificate. This can be done for free using Greenlock which issues certificates via Let's Encrypt™ v2

A less insecure way to fix this:
```
'use strict';

var request = require('request');
var agentOptions;
var agent;

agentOptions = {
  host: 'www.example.com'
, port: '443'
, path: '/'
, rejectUnauthorized: false
};

agent = new https.Agent(agentOptions);

request({
  url: "https://www.example.com/api/endpoint"
, method: 'GET'
, agent: agent
}, function (err, resp, body) {
  // ...
});
```

By using an agent with rejectUnauthorized you at least limit the security vulnerability to the requests that deal with that one site instead of making your entire node process completely, utterly insecure.

Other Options
If you were using a self-signed cert you would add this option:

agentOptions.ca = [ selfSignedRootCaPemCrtBuffer ];
For trusted-peer connections you would also add these 2 options:

agentOptions.key = clientPemKeyBuffer;
agentOptions.cert = clientPemCrtSignedBySelfSignedRootCaBuffer;
Bad Idea
It's unfortunate that process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; is even documented. It should only be used for debugging and should never make it into in sort of code that runs in the wild. Almost every library that runs atop https has a way of passing agent options through. Those that don't should be fixed.

[related url:](https://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100)