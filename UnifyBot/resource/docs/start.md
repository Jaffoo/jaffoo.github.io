## Github
克隆或下载此库，编译找到UnifyBot使用；或者直接将【UnifyBot】项目添加到你项目中使用。

## Nuget安装
Nuget搜索UnifyBot即可下载使用即可。（推荐此方法）

### 可能需要的命名空间如下
<details>

```c#
using System.Reactive.Linq;
using UnifyBot;
using UnifyBot.Model;
using UnifyBot.Receiver;
using UnifyBot.Receiver.EventReceiver;
using UnifyBot.Receiver.EventReceiver.Notice;
using UnifyBot.Receiver.MessageReceiver;
```

</details>

## 初始化
分为两种，主动websocket和被动websocket。

**什么是主动websocket**：QQ机器人框架做为websocket服务端，UnifyBot作为websocket客户端

**什么时候选择主动**：如果你的程序里，有且仅有一个webscoket功能，也就是websocket之用于接收QQ消息，没有其他用途，选这个。

**什么是被动websocket**：QQ机器人框架做为websocket客户端，UnifyBot作为websocket服务端

**什么时候选择被动**：如果你的程序里除了用websocket接受QQ消息意外，还有其他功能需要使用websocket，那么这个时候用这个合适。
举个例子：比如你用了主动websocket，你的前端还需要和你的后端建立websocket连接发送消息，这个时候意味着你程序里有两个websocket一个作为客户端和QQ通信，一个作为服务端和前端通信，
这种情况选择被动websocket，这样QQ机器人框架和你的项目都是客户端，一同访问使用UnifyBot服务端发送消息，这样一来，就只需要一个websocket服务端就可以实现同时和QQ，前端通信的功能。
```c#
//主动websocket连接
Connect connect = new("127.0.0.1", 3001, 3000,'token');//token可选参数
Bot bot = new(connect);
await bot.StartAsync();

//被动websocket连接
var config = new ConnectConfig("192.168.2.10", 3001, 3000, true, 'token');//token可选参数);
using Bot bot = new(config);
await bot.Start();
//注意被动websocket的服务地址是0.0.0.0。所以使用被动ws填入QQ机器人框架时候分为以下2中情况：

//在内网环境使用：ws://127.0.0.1:WsPort（ws://127.0.0.1:3001）或者ws://localhost:WsPort（ws://localhost:3001）；

//在公网环境使用：请自行填入公网ip地址填入例如 ：ws://{IP}:WsPort
```
<h3>说明：</h3>
<br>Host：必填，纯IP地址，请勿带协议前缀如：http
<br>WsPort：必填，正向/反向ws端口
<br>http_port：必填，http接口端口
<br>token：选填，建议公网使用token

## 接收消息
[更多](/UnifyBot/doc/api/event.html#事件监听说明)

### 接收所有消息
```C#
bot.MessageReceived.OfType<MessageReceiverBase>().Subscribe(x =>
{
    //能接收到所有消息和事件
    Console.WriteLine(x.ToJsonStr());
});
bot.MessageReceived.OfType<MessageReceiver>().Subscribe(x =>
{
    //只能接收到消息（所有类型）
    Console.WriteLine(x.ToJsonStr());
});
```

### 群消息
```C#
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(x =>
{
    //只能接收到群消息
    Console.WriteLine(x.ToJsonStr());
});
```

### 好友消息
```C#
 bot.MessageReceived.OfType<PrivateReceiver>().Subscribe(x =>
 {
     //只能接收到好友消息
     Console.WriteLine(x.ToJsonStr());

 });
```

### 事件消息

[更多](/ShamrockCore/doc/api/message.html#接收消息)

```C#
 bot.EventReceived.OfType<MessageReceiverBase>().Subscribe(x =>
 {
     //能接收到所有消息和事件
     Console.WriteLine(x.ToJsonStr());
 });
 bot.EventReceived.OfType<EventReceiver>().Subscribe(x =>
 {
     //只能接收到事件（所有类型）
     Console.WriteLine(x.ToJsonStr());
 });
 bot.EventReceived.OfType<FriendAdd>().Subscribe(x =>
 {
     //只能接收到特定事件（传入什么类型就是什么事件）此处为好友申请事件FriendAdd
     Console.WriteLine(x.ToJsonStr());
 });
```

### 未知消息
```C#
bot.UnknownMessageReceived.OfType<string>().Subscribe(x =>
{
    //未知事件
    Console.WriteLine(x);
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