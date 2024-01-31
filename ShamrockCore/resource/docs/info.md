## 简介
- 基于.NET 6开发，支持跨平台。
- 此项目是基于[OpenShamrock](https://github.com/whitechi73/OpenShamrock)接口实现的C#库，由于OpenShamrock本身是遵循Onebot协议的，所以理论上，此项目也支持onebot协议开发的框架。（注：OpenShamrock独有接口除外，比如获取设备电池信息等。）
- 目录结构
<br>--【ShamrockCore.Test】-控制台程序，用于调试测试
<br>--【ShamrockCore】-主程序
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Data】
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【HttpAPI】-接口
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【Model】-实体对象
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Reciver】
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【Events】-事件对象
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【MsgChain】-消息链
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【Receivers】-消息接收器
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【EventBase.cs】-事件基类
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【MessageManager.cs】-消息发送管理器
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
--【MessageReceiverBase.cs】-消息接收器基类
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Utils】-拓展/工具类
<br>&nbsp;&nbsp;&nbsp;&nbsp;
--【Main.cs】-主方法，消息接收，处理，传递
## 环境搭建
<br>(以Openshamrock举例)
1. 搭建Openshamrock
<br>搭建教程[Openshamrock文档](https://whitechi73.github.io/OpenShamrock/)已有详细教程，不再赘述。
2. Openshamrock配置
<br>搭建好Openshamrock环境后，需要配置的项有：主动websocket，http，token，其中token可有可无，如果是在公网环境下使用，为了你的数据安全强烈建议使用token。
## 常见问题
1. 无法连接ws
- 确保ip和端口配置正确；
- 程序和ws服务的网络环境能互通；
- 如果使用的模拟器，别忘记模拟器和PC端口映射；
2. 某些功能无法正常使用
- 确保使用的Openshamrock是**最新开发**版本。
- 确保使用的ShamrockCore是**最新**版本。
- 如果均是最新版本仍然不可使用，请通过issue或者下面的群进行反馈。
## 反馈与交流
<br>Github提交[Issues](https://github.com/Jaffoo/ShamrockCore.NET/issues);
<br>🐧群：[327443854](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=xeymCEAlzjVcq4zO9vQQwsXoHulWWw5b&authKey=tj6nblI3QUewB9NAZsQ18LrAWQTXwlzp1ObiNK3m6tn3Kle%2BE6gKlOZxcYbbNkm%2B&noverify=0&group_code=327443854)。