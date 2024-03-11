## Nuget安装
Nuget搜索ShamrockCore即可下载使用，同时，你可能还需要安装Manganese和System.Reactive.Linq。
### 可能需要的命名空间如下
<details>

```c#
using Manganese.Text;
using ShamrockCore.Reciver;
using ShamrockCore.Reciver.Events;
using ShamrockCore.Reciver.MsgChain;
using ShamrockCore.Reciver.Receivers;
using ShamrockCore.Utils;
using System.Reactive.Linq;
```

</details>

## 初始化
分为两种，主动websocket和被动websocket。

**什么是主动websocket**：openshamrock做为websocket服务端，ShamrockCore.NET作为websocket客户端

**什么时候选择主动**：如果你的程序里，有且仅有一个webscoket功能，也就是只需要获取qq消息，选这个。

**什么是被动websocket**：openshamrock做为websocket客户端，ShamrockCore.NET作为websocket服务端

**什么时候选择被动**：如果你的程序里其他功能还需要websocket，那么这个时候用这个合适。
举个例子：比如你用了主动websocket，你的前端还需要和你的后端建立websocket连接发送消息，这个时候意味着你程序里有两个websocket一个作为客户端和QQ通信，一个作为服务端和前端通信，
这种情况选择被动websocket，这样openshamrock和你的前端都是客户端，一同访问ShamrockCore.NET的服务端，这样一来，就只需要一个websocket服务端就可以实现同时和QQ，前端通信的功能。
```c#
//主动websocket连接
var config = new ConnectConfig(Host:"192.168.2.10", WsPort:5800, HttpPort:5700, Token:"token");
using Bot bot = new(config);
await bot.Start();

//被动websocket连接
var config = new ConnectConfig(Host:"192.168.2.10", WsPort:5800, HttpPort:5700, Token:"token", Reverse:true);
//此处token无用，下个版本看情况加上还是删除
using Bot bot = new(config);
await bot.Start();
//注意被动websocket的服务地址是0.0.0.0，所以当你填入openshamnrock时候，如果是内网使用填ws://127.0.0.1:WsPort（ws://127.0.0.1:5800）或者ws://localhost:WsPort（ws://localhost:5800）,如果是公网的话，请自行查询公网ip地址填入例如 ：ws://{IP}:WsPort
```
<h3>说明：</h3>
<br>Host：必填，纯IP地址，请勿带协议前缀如：http
<br>WsPort：必填，正向/反向ws端口
<br>http_port：必填，http接口端口
<br>token：选填，建议公网使用token

## 接收消息
### 群消息
[更多](/ShamrockCore/doc/api/event.html#事件监听说明)
```C#
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(async msg =>{
    await Console.Out.WriteLineAsync("群消息：" + msg.ToJsonString());
})
```

### 好友消息
```C#
bot.MessageReceived.OfType<FriendReceiver>().Subscribe(async msg =>{
    await Console.Out.WriteLineAsync("好友消息：" + msg.ToJsonString());
})
```

### 频道消息
```C#
bot.MessageReceived.OfType<GuildReceiver>().Subscribe(async msg =>{
    await Console.Out.WriteLineAsync("频道消息：" + msg.ToJsonString());
})
```

### 事件消息

[更多](/ShamrockCore/doc/api/message.html#接收消息)

```C#
bot.EventReceived.OfType<FriendAddEvent>().Subscribe(async msg =>{
    await Console.Out.WriteLineAsync("好友请求事件：" + msg.ToJsonString());
})
```

### 未知消息
```C#
bot.UnknownMessageReceived.Subscribe(msg =>
{
    Console.WriteLine("未知消息：" + msg);
});
```

### 阻塞线程
正常来说，ws属于长连接，所以要保证ws所在的线程不被释放。

```C#
while (true)
{
    //Thread.Sleep(1);
}
```