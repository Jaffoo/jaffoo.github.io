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

```c#
var config = new ConnectConfig("Host", websocket_port, http_port, "token");
using Bot bot = new(config);
await bot.Start();
```
<h3>说明：</h3>
<br>Host：必填，纯IP地址，请勿带协议前缀如：http
<br>websocket_port：必填，主动webscoket端口
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