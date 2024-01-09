## 接收消息
```C#
//所有消息
bot.MessageReceived.OfType<MessageReceiverBase>().Subscribe(async msg =>
{
    if (msg.Type == PostMessageType.Group)
    {
        var msg1 = msg as GroupReceiver;
        await Console.Out.WriteLineAsync("群消息：" + msg1.ToJsonString());
    }
    if (msg.Type == PostMessageType.Friend)
    {
        var msg1 = msg as FriendReceiver;
        await Console.Out.WriteLineAsync("好友消息：" + msg1.ToJsonString());
    }
});
//或者分开
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(async msg =>{
    await Console.Out.WriteLineAsync("群消息：" + msg.ToJsonString());
})

bot.MessageReceived.OfType<FriendReceiver>().Subscribe(async msg =>{
    await Console.Out.WriteLineAsync("好友消息：" + msg.ToJsonString());
})
```

## 消息类型转换
```C#
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(async msg =>
{
    await Console.Out.WriteLineAsync("群消息：" + msg.ToJsonString());
    foreach (var item in msg.Message)
    {
        if (item.Type == MessageType.Text)
        {
            var textMsg = item.ConvertTo<TextMessage>();
        }
        if (item.Type == MessageType.Image)
        {
            var imageMsg = item.ConvertTo<ImageMessage>();
        }
    }
});
```

## 消息构建

类MessageChain就是消息链，此类继承于`List<Message>`，你平时如何使用List，此类依然适用。
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
发送消息分为主动和被动发送，主动调用静态类（MessageManager）可发送消息。（请勿在初始化前调用）
<br>示例：

```C#
//以下方法均支持重载，展示只是发送简单纯文本消息，发送复杂消息，请用消息链。
await MessageManager.SendGroupMsgAsync(123,"这是群号为123的群吗?");
await MessageManager.SendPrivateMsgAsync(123,"你的qq才有3位数诶。");
//还有更多发送消息的方法，比如合并转发等。如需使用，请自行查看
//由于本人精力有限，合并转发等特殊发消息未作测试，如使用有问题，请反馈给我，会尽快处理。
```

## 被动动发送消息
当接收到消息时，无论是好友还是群消息，都可以快速回复
<br>例如：

```C#
//群
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(async msg =>{
    await msg.SendGroupMsgAsync("你好，我收到消息了")
    await msg.Member.SendPrivateMsgAsync("群友，你好");
    //目前openshamrock不支持发送临时消息，所以此方法需要加好友。
})

//好友
bot.MessageReceived.OfType<FriendReceiver>().Subscribe(async msg =>{
    await msg.SendPrivateMsgAsync("你好，我收到消息了")
})
```

同样的，以上方法支持重载

## 消息类型

### at消息
```C#
MessageChain msgChain = new MessageChain()
{
    new AtMessage(123),//at 123
    new AtMessage(0),//at 全体成员，需要管理员权限
    new AtMessage(),//at 全体成员，需要管理员权限
};
//at
MessageChain msgChain = new MessageChainBuilder()
.At(123)
//at 全体成员，需要管理员权限
.AtAll()
.Build();
```

### 文本消息
```C#
MessageChain msgChain = new MessageChain()
{
    new TextMessage("123"),
};
//at
MessageChain msgChain = new MessageChainBuilder()
.Text("123")
.Build();
```

### 图片消息
```C#
//参数三选一，优先级filePath>url>base64
MessageChain msgChain = new MessageChain()
{
    new ImageMessage("filePath","url","base64"),
};

MessageChain msgChain = new MessageChainBuilder()
.ImageByPath("path")
.ImageByUrl("url")
.ImageByBase64("base64")
.Build();
```
### 音频消息
```C#
//参数二选一，优先级filePath>url>base64
MessageChain msgChain = new MessageChain()
{
    new RecordMessage("filePath","url"),
};

MessageChain msgChain = new MessageChainBuilder()
.RecordByPath("path")
.RecordByUrl("url")
.Build();
```

### 视频消息
```C#
MessageChain msgChain = new MessageChain()
{
    new VideoMessage("filePath"),
};

MessageChain msgChain = new MessageChainBuilder()
.Video("path")
.Build();
```

### 表情消息
表情ID可以到[这里](https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8)查看
```C#
MessageChain msgChain = new MessageChain()
{
    new FaceMessage(1),//表情id
};

MessageChain msgChain = new MessageChainBuilder()
.Face(1)
.Build();
```

### 回复消息
```C#
MessageChain msgChain = new MessageChain()
{
    new ReplyMessage(1),//消息id
};

MessageChain msgChain = new MessageChainBuilder()
.Reply(1)//消息id
.Build();
```

### 篮球表情
```C#
MessageChain msgChain = new MessageChain()
{
    new BallMessage(Data.Model.Ball.ZZ),
};

MessageChain msgChain = new MessageChainBuilder()
.Ball(Data.Model.Ball.ZZ)
.Build();
```

### 猜拳表情
```C#
MessageChain msgChain = new MessageChain()
{
    new RpsMessage(Data.Model.Rps.ST),
};

MessageChain msgChain = new MessageChainBuilder()
.Rps(Data.Model.Rps.ST)
.Build();
```

### 骰子表情
```C#
MessageChain msgChain = new MessageChain()
{
    new DiceMessage(6),//1-6点
};

MessageChain msgChain = new MessageChainBuilder()
.Dice(6)//1-6点
.Build();
```

### 戳一戳表情
```C#
MessageChain msgChain = new MessageChain()
{
    new PokeMessage(new PokeMessage.Body()),
};

MessageChain msgChain = new MessageChainBuilder()
.Poke(new PokeMessage.Body())//1-6点
.Build();
```

### 戳一戳(双击头像)
```C#
MessageChain msgChain = new MessageChain()
{
    new TouchMessage(123),//qq号
};

MessageChain msgChain = new MessageChainBuilder()
.Touch(123)//qq号
.Build();
```

### 音乐
```C#
MessageChain msgChain = new MessageChain()
{
    new MusicMessage(1,"qq"),//音乐id，来源qq/163
};

MessageChain msgChain = new MessageChainBuilder()
.Music(1,"qq")//qq号
.Build();
```
或者自定义：
```C#
MessageChain msgChain = new MessageChain()
{
    //MusicCustomMessage.Body中的属性请自行查看
    new MusicCustomMessage(new MusicCustomMessage.Body(){}),
};

MessageChain msgChain = new MessageChainBuilder()
.MusicCustom(new MusicCustomMessage.Body(){})
.Build();
```

### 位置
```C#
MessageChain msgChain = new MessageChain()
{
    new LocationMessage(new LocationMessage.Body(){
        Lat=123,
        Lon=321,//经纬度必填
    }),
};

MessageChain msgChain = new MessageChainBuilder()
.Location(new LocationMessage.Body(){})
.Build();
```

### 天气
```C#
MessageChain msgChain = new MessageChain()
{
    new WeatherMessage(new WeatherMessage.Body(){
        Code=123,//必填
        City="北京"
    }),
};

MessageChain msgChain = new MessageChainBuilder()
.Weather(new WeatherMessage.Body(){})
.Build();
```

### 链接分享
```C#
MessageChain msgChain = new MessageChain()
{
    new ShareMessage(new ShareMessage.Body()),//Body中的属性请自行查看
};

MessageChain msgChain = new MessageChainBuilder()
.Share(new ShareMessage.Body(){})
.Build();
```

### 礼物消息
```C#
MessageChain msgChain = new MessageChain()
{
    new GiftMessage(123,1),//qq号，礼物id
};

MessageChain msgChain = new MessageChainBuilder()
.Gift(123,1)
.Build();
```

### 合并转发
我也不知道有没有用，如果有人需要且没用，请反馈给我。
```C#
MessageChain msgChain = new MessageChain()
{
    //合并转发resid，我也不知道这个参数是个啥
    new MergeMessage(1),
};

MessageChain msgChain = new MessageChainBuilder()
.Merge(1)
.Build();
```

### 合并转发
我也不知道有没有用，如果有人需要且没用，请反馈给我。
```C#
MessageChain msgChain = new MessageChain()
{
    //消息ID，我也不知道这个参数是不是messageid
    new MergeNodeMessage(1),
};

MessageChain msgChain = new MessageChainBuilder()
.MergeNode(1)
.Build();
```

### Json消息
```C#
MessageChain msgChain = new MessageChain()
{
    new JsonMessage(new JsonMessage.Body()),
};

MessageChain msgChain = new MessageChainBuilder()
.Json(new JsonMessage.Body())
.Build();
```

### XML消息
暂不支持