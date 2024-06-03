## 接收消息

```C#
//所有消息
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
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(x =>
{
    //只能接收到群消息
    Console.WriteLine(x.ToJsonStr());
});
bot.MessageReceived.OfType<PrivateReceiver>().Subscribe(x =>
{
    //只能接收到好友消息
    Console.WriteLine(x.ToJsonStr());

});
```

## 消息构建

类 MessageChain 就是消息链，此类继承于`List<Message>`，你平时如何使用 List，此类依然适用。
<br>

构建消息链：

```C#
MessageChain msgChain = new MessageChain()
{
    new TextMessage("你好qq号是123的群友，我at了你！"),
    new AtMessage(123),
};
```

或者

```C#
MessageChain msgChain = new MessageChainBuilder()
.Text("你好qq号是123的群友，我at了你！")
.At(123)
.Build();
```

## 主动发送消息

```C#
Connect connect = new("localhost", 3001, 3000);
Bot bot = new(connect);
//以下方法均支持重载，展示只是发送简单纯文本消息，发送复杂消息，请用消息链。
bot.SendGroupMessage("123", "给群号为123的发送了一条消息");
bot.SendPrivateMessage("321","给好友号为321发送了一条消息");

var msgid1 = new MessageChain() { new TextMessage("给群号为123的发送了一条消息")}.SendGroup(bot,123);
var msgid2 = new MessageChain() { new TextMessage("给好友号为321发送了一条消息")}.SendPrivate(bot,321);
```

## 被动动发送消息

当接收到消息时，无论是好友还是群消息，都可以快速回复
<br>例如：

```C#
Connect connect = new("localhost", 3001, 3000);
Bot bot = new(connect);
bot.MessageReceived.OfType<MessageReceiverBase>().Subscribe(async x =>
{
    if (x is GroupReceiver groupReceiver)
    {
        await groupReceiver.SendMessage("给接收到消息的群快速发送了一条消息");
    }
});
bot.MessageReceived.OfType<MessageReceiver>().Subscribe(async x =>
{
    if (x is GroupReceiver groupReceiver)
    {
        await groupReceiver.SendMessage("给接收到消息的群快速发送了一条消息");
    }
});
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(async x =>
{
    await x.SendMessage("给接收到消息的群快速发送了一条消息");
});
bot.MessageReceived.OfType<PrivateReceiver>().Subscribe(async x =>
{
    await x.SendMessage("快速给好友回了一条信息");

});
```

同样的，以上的SendMessage方法支持重载

## 消息类型

```C#
//类 MessageChain 继承于`List<Message>`，所以可以用add添加消息
//消息链初始化时添加，或者后面用add添加到数组中
MessageChain msgChain = new MessageChain()
{
    new TextMessage(string msg),
};
msgChain.Add(new TextMessage(string msg));

//也可以通过构造器生产
msgChain.Add(new MessageChainBuilder().Text(string msg).Build());

//两个消息连支持+操作
var msg1 = new MessageChain() { };
var msg2 = new MessageChain() { };
var msg3 = msg1 + msg2;
```
### at 消息

```C#
MessageChain msgChain = new MessageChain()
{
    new AtMessage(long/string qq),//at 123
    new AtMessage(0),//at 全体成员，需要管理员权限
    new AtMessage(),//at 全体成员，需要管理员权限
};
//at
MessageChain msgChain = new MessageChainBuilder()
.At(long/string qq )
//at 全体成员，需要管理员权限
.AtAll()
.Build();
```

### 文本消息

```C#
MessageChain msgChain = new MessageChain()
{
    new TextMessage(string msg),
};
//at
MessageChain msgChain = new MessageChainBuilder()
.Text(string msg)
.Build();
```

### 图片消息

```C#
//参数三选一，优先级filePath>url>base64
MessageChain msgChain = new MessageChain()
{
    new ImageMessage(string file = "", string base64 = "", string url = "", ImageType type = 0, bool cache = true, bool proxy = true),
    new ImageByUrl(string url, ImageType type = 0, bool cache = true, bool proxy = true),
    new ImageByPath(string path, ImageType type = 0),
    new ImageByBase64(string base64, ImageType type = 0)
};

MessageChain msgChain = new MessageChainBuilder()
.ImageByPath(string path, ImageType type = 0)
.ImageByUrl(string url, ImageType type = 0, bool cache = true, bool proxy = true)
.ImageByBase64(string base64, ImageType type = 0)
.Build();
```

### 音频消息

```C#
MessageChain msgChain = new MessageChain()
{
    //参数三选一，优先级 file>base64>url
    new RecordMessage(string file = "", string base64 = "", string url = "", bool magic = false, bool cache = true, bool proxy = true),
    new RecordByUrl(string url, bool cache = true, bool proxy = true),
    new RecordByPath(string path),
    new RecordByBase64(string base64),
};

MessageChain msgChain = new MessageChainBuilder()
.RecordByUrl(string url, bool cache = true, bool proxy = true)
.RecordByPath(string path)
.RecordByBase64(string base64)
.Build();
```

### 视频消息

```C#
MessageChain msgChain = new MessageChain()
{
    VideoMessage(string file = "", string base64 = "", string url = "", bool cache = true, bool proxy = true),
    new VideoByUrl(string url, bool cache = true, bool proxy = true),
    new VideoByPath(string path),
    new VideoByBase64(string base64),
};

MessageChain msgChain = new MessageChainBuilder()
.VideoByUrl(string url, bool cache = true, bool proxy = true)
.VideoByPath(string path)
.VideoByBase64(string base64)
.Build();
```

### 表情消息

表情 ID 可以到[这里](https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8)查看

```C#
MessageChain msgChain = new MessageChain()
{
    new FaceMessage(int id)
};

MessageChain msgChain = new MessageChainBuilder()
.Face(int i)
.Build();
```

### 回复消息

```C#
MessageChain msgChain = new MessageChain()
{
    new ReplyMessage(long msgId),//消息id
};

MessageChain msgChain = new MessageChainBuilder()
.Reply(long msgId)//消息id
.Build();
```

### 猜拳表情

```C#
MessageChain msgChain = new MessageChain()
{
    new RpsMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Rps()
.Build();
```

### 骰子表情

```C#
MessageChain msgChain = new MessageChain()
{
    new DiceMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Dice()
.Build();
```

### 戳一戳表情

```C#
MessageChain msgChain = new MessageChain()
{
    new PokeMessage(int type, int id, string name = ""),
    new Poke(),//戳一戳
    new ShowLove(),//比心
    new Like(),//点赞
    new Heartbroken(),//心碎
    new SixSixSix(),//666
    new FangDaZhao(),//放大招
    new BaoBeiQiu(),//宝贝球 (SVIP)
    new Rose(),//玫瑰花 (SVIP) 
    new ZhaoHuanShu(),//召唤术 (SVIP)
    new RangNiPi(),//让你皮 (SVIP) 
    new JieYin(),//结印 (SVIP) 
    new ShouLei(),//手雷 (SVIP) 
    new GouYin(),//勾引 (SVIP) 
    new ZhuaYiXia(),//抓一下 (SVIP) 
    new SuiPing(),//碎屏 (SVIP) 
    new QiaoMen(),//敲门 (SVIP) 
};

MessageChain msgChain = new MessageChainBuilder()
.Poke()
.ShowLove()
.Like()
.Heartbroken()
.SixSixSix()
.FangDaZhao()
.BaoBeiQiu()
.Rose()
.ZhaoHuanShu()
.RangNiPi()
.JieYin()
.ShouLei()
.GouYin()
.ZhuaYiXia()
.SuiPing()
.QiaoMen()
.Build();
```

### 音乐

```C#
MessageChain msgChain = new MessageChain()
{
    new MusicMessage(string musicId, string type = "qq"),//音乐id，来源qq/163
};

MessageChain msgChain = new MessageChainBuilder()
.Music(string musicId, string type = "qq")
.Build();
```

或者自定义：

```C#
MessageChain msgChain = new MessageChain()
{
    new MusicMessage(string url,string audio,string title,string content="",string image="")//自定义音乐分享
};

MessageChain msgChain = new MessageChainBuilder()
.MusicCustom(string url, string audio, string title, string content = "", string image = "")
.Build();
```

### 位置

```C#
MessageChain msgChain = new MessageChain()
{
    new LocationMessage(double lat, double lon, string title = "", string content = "")
};

MessageChain msgChain = new MessageChainBuilder()
.Location(double lat, double lon, string title = "", string content = "")
.Build();
```

### 链接分享

```C#
MessageChain msgChain = new MessageChain()
{
    new ShareMessage(string url, string title, string content = "", string image="")
};

MessageChain msgChain = new MessageChainBuilder()
.Share(string url, string title, string content = "", string image = "")
.Build();
```

### 合并转发

```C#
MessageChain msgChain = new MessageChain()
{
    new NodeMessage(long msgId),
    new NodeMessage(long qq, string nickname, string msg)//合并转发自定义节点
};

MessageChain msgChain = new MessageChainBuilder()
.Node(long msgId)
.Node(long qq, string nickname, string msg)
.Node(long qq, string nickname, MessageChain msg)
.Build();
```

### Json 消息

```C#
MessageChain msgChain = new MessageChain()
{
    new JsonMessage(string json)
};

MessageChain msgChain = new MessageChainBuilder()
.Json(string json)
.Build();
```

### XML 消息

```C#
MessageChain msgChain = new MessageChain()
{
    new XmlMessage(string xml)
};

MessageChain msgChain = new MessageChainBuilder()
.Xml(string xml)
.Build();
```

### 推荐好友/群

```C#
MessageChain msgChain = new MessageChain()
{
    new ContactMessage(string type, string qq),
    new QQContact(string qq),
    new GroupContact(string qq),
};

MessageChain msgChain = new MessageChainBuilder()
.ContactFriend(long qq)
.ContactGroup(long qq)
.Build();
```

### 窗口抖动（戳一戳）

```C#
MessageChain msgChain = new MessageChain()
{
    new ShakeMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Shake()
.Build();
```

### 匿名发消息（开启匿名的前提下）

```C#
MessageChain msgChain = new MessageChain()
{
    new AnonymousMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Anonymous()
.Build();
```