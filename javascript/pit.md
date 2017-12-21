##工作中遇到的各种坑
---
* 使用ajaxfileupload时，change事件只能绑定一次事件，因为在框架中，事件执行玩以后把change事件给解绑了，解决方法：$(document).on("change", "#id", function() {some code}
* 