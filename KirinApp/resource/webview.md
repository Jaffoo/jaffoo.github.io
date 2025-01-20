# 浏览器控件API

## OpenDevTool
说明：调用此方法打开开发者工具（如果系统支持）

## Reload
说明：调用此方法重新加载页面

## SendWebMessage
说明：发送消息到webview中

参数：message(string)-必填-消息内容

## InjectJsObject
说明：注入js对象

参数：
- name(string)-必填-js对象的名称
- obj(object)-必填-js对象

## ExecuteJavaScript
说明：执行js代码

参数：
- js(string)-必填-js代码
- handlResult(Action&lt;string&gt;)-选题-执行结果回调

## ExecuteJavaScript&lt;T&gt;
说明：异步执行js代码，等待返回结果

参数：js(string)-必填-js代码

返回：Task&lt;T&gt;