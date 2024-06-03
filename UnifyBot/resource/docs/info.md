## 简介
- 基于.NET 6开发，支持跨平台。
- 基于Onebot V11实现的标准C#库
<br>--【UnifyBot.Test】-控制台程序，用于调试测试
<br>--【UnifyBot】-主程序
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Api】-接口
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【Api】-QQ接口
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【HttpEndpoints】-接口端点
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Message】-QQ消息类型对象
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【Chain】-消息链
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Model】-实体类
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Receiver】-QQ消息接收器对象
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【EventReceiver】-事件接受器对象
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【MessageReceiver】-消息接收器对象
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Utils】-工具类
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Main.cs】-主方法，消息接收，处理，传递

## QQ机器人搭建推荐
<br>1，[LLOneBot](https://github.com/LLOneBot/LLOneBot)，基于qq客户端，占用内存较高。
<br>1，[NapCatQQ](https://github.com/NapNeko/NapCatQQ)，无头qq，不需要客户即可运行。

## 常见问题
1. 无法连接ws
- 确保ip和端口配置正确；
- 程序和ws服务的网络环境能互通；

2. 连接上qq服务但是无法正常发送接收消息
- 检查是否使用了token，且token要一直。

2. 某些功能无法正常使用
- 确保使用的UnifyBot/LLOneBot是**最新**版本。。
- 确保使用的功能在onebot v11标准中。
- 如果是QQ框架自己加的扩展方法/接口，请看[框架扩展方法自定义实现](/UnifyBot/doc/api/common.html#框架扩展api).
- 如果以上均不是，请通过issue或者下面的群进行反馈。

## 反馈与交流
<br>Github提交[Issues](https://github.com/Jaffoo/ShamrockCore.NET/issues);
<br>🐧群：[327443854](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=xeymCEAlzjVcq4zO9vQQwsXoHulWWw5b&authKey=tj6nblI3QUewB9NAZsQ18LrAWQTXwlzp1ObiNK3m6tn3Kle%2BE6gKlOZxcYbbNkm%2B&noverify=0&group_code=327443854)。