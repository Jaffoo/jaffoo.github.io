import{_ as a,r as d,o as l,c as r,a as i,b as e,d as v,e as n}from"./app-Hb2a7Tbe.js";const u={},c=n(`<h2 id="接收消息" tabindex="-1"><a class="header-anchor" href="#接收消息" aria-hidden="true">#</a> 接收消息</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//所有消息
bot.MessageReceived.OfType&lt;MessageReceiverBase&gt;().Subscribe(async msg =&gt;
{
    if (msg.Type == PostMessageType.Group)
    {
        var msg1 = msg as GroupReceiver;
        await Console.Out.WriteLineAsync(&quot;群消息：&quot; + msg1.ToJsonString());
    }
    if (msg.Type == PostMessageType.Friend)
    {
        var msg1 = msg as FriendReceiver;
        await Console.Out.WriteLineAsync(&quot;好友消息：&quot; + msg1.ToJsonString());
    }
});
//或者分开
bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;群消息：&quot; + msg.ToJsonString());
})

bot.MessageReceived.OfType&lt;FriendReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;好友消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息类型转换" tabindex="-1"><a class="header-anchor" href="#消息类型转换" aria-hidden="true">#</a> 消息类型转换</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(async msg =&gt;
{
    await Console.Out.WriteLineAsync(&quot;群消息：&quot; + msg.ToJsonString());
    foreach (var item in msg.Message)
    {
        if (item.Type == MessageType.Text)
        {
            var textMsg = item.ConvertTo&lt;TextMessage&gt;();
        }
        if (item.Type == MessageType.Image)
        {
            var imageMsg = item.ConvertTo&lt;ImageMessage&gt;();
        }
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息构建" tabindex="-1"><a class="header-anchor" href="#消息构建" aria-hidden="true">#</a> 消息构建</h2><p>类MessageChain就是消息链，此类继承于<code>List&lt;Message&gt;</code>，你平时如何使用List，此类依然适用。 <br></p><p>构建消息链：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new TextMessage(&quot;你好qq号是123的群友，我at了你！&quot;),
    new AtMessage(123),
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChainBuilder()
.Text(&quot;你好qq号是123的群友，我at了你！&quot;)
.At(123)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主动发送消息" tabindex="-1"><a class="header-anchor" href="#主动发送消息" aria-hidden="true">#</a> 主动发送消息</h2><p>发送消息分为主动和被动发送，主动调用静态类（MessageManager）可发送消息。（请勿在初始化前调用） <br>示例：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//以下方法均支持重载，展示只是发送简单纯文本消息，发送复杂消息，请用消息链。
await MessageManager.SendGroupMsgAsync(123,&quot;这是群号为123的群吗?&quot;);
await MessageManager.SendPrivateMsgAsync(123,&quot;你的qq才有3位数诶。&quot;);
//还有更多发送消息的方法，比如合并转发等。如需使用，请自行查看
//由于本人精力有限，合并转发等特殊发消息未作测试，如使用有问题，请反馈给我，会尽快处理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="被动动发送消息" tabindex="-1"><a class="header-anchor" href="#被动动发送消息" aria-hidden="true">#</a> 被动动发送消息</h2><p>当接收到消息时，无论是好友还是群消息，都可以快速回复 <br>例如：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//群
bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(async msg =&gt;{
    await msg.SendGroupMsgAsync(&quot;你好，我收到消息了&quot;)
    await msg.Member.SendPrivateMsgAsync(&quot;群友，你好&quot;);
    //目前openshamrock不支持发送临时消息，所以此方法需要加好友。
})

//好友
bot.MessageReceived.OfType&lt;FriendReceiver&gt;().Subscribe(async msg =&gt;{
    await msg.SendPrivateMsgAsync(&quot;你好，我收到消息了&quot;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，以上方法支持重载</p><h2 id="消息类型" tabindex="-1"><a class="header-anchor" href="#消息类型" aria-hidden="true">#</a> 消息类型</h2><h3 id="at消息" tabindex="-1"><a class="header-anchor" href="#at消息" aria-hidden="true">#</a> at消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本消息" tabindex="-1"><a class="header-anchor" href="#文本消息" aria-hidden="true">#</a> 文本消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new TextMessage(&quot;123&quot;),
};
//at
MessageChain msgChain = new MessageChainBuilder()
.Text(&quot;123&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片消息" tabindex="-1"><a class="header-anchor" href="#图片消息" aria-hidden="true">#</a> 图片消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//参数三选一，优先级filePath&gt;url&gt;base64
MessageChain msgChain = new MessageChain()
{
    new ImageMessage(&quot;filePath&quot;,&quot;url&quot;,&quot;base64&quot;),
};

MessageChain msgChain = new MessageChainBuilder()
.ImageByPath(&quot;path&quot;)
.ImageByUrl(&quot;url&quot;)
.ImageByBase64(&quot;base64&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="音频消息" tabindex="-1"><a class="header-anchor" href="#音频消息" aria-hidden="true">#</a> 音频消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//参数二选一，优先级filePath&gt;url&gt;base64
MessageChain msgChain = new MessageChain()
{
    new RecordMessage(&quot;filePath&quot;,&quot;url&quot;),
};

MessageChain msgChain = new MessageChainBuilder()
.RecordByPath(&quot;path&quot;)
.RecordByUrl(&quot;url&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视频消息" tabindex="-1"><a class="header-anchor" href="#视频消息" aria-hidden="true">#</a> 视频消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new VideoMessage(&quot;filePath&quot;),
};

MessageChain msgChain = new MessageChainBuilder()
.Video(&quot;path&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表情消息" tabindex="-1"><a class="header-anchor" href="#表情消息" aria-hidden="true">#</a> 表情消息</h3>`,29),m={href:"https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},g=n(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new FaceMessage(1),//表情id
};

MessageChain msgChain = new MessageChainBuilder()
.Face(1)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回复消息" tabindex="-1"><a class="header-anchor" href="#回复消息" aria-hidden="true">#</a> 回复消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new ReplyMessage(1),//消息id
};

MessageChain msgChain = new MessageChainBuilder()
.Reply(1)//消息id
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="篮球表情" tabindex="-1"><a class="header-anchor" href="#篮球表情" aria-hidden="true">#</a> 篮球表情</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new BallMessage(Data.Model.Ball.ZZ),
};

MessageChain msgChain = new MessageChainBuilder()
.Ball(Data.Model.Ball.ZZ)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="猜拳表情" tabindex="-1"><a class="header-anchor" href="#猜拳表情" aria-hidden="true">#</a> 猜拳表情</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new RpsMessage(Data.Model.Rps.ST),
};

MessageChain msgChain = new MessageChainBuilder()
.Rps(Data.Model.Rps.ST)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="骰子表情" tabindex="-1"><a class="header-anchor" href="#骰子表情" aria-hidden="true">#</a> 骰子表情</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new DiceMessage(6),//1-6点
};

MessageChain msgChain = new MessageChainBuilder()
.Dice(6)//1-6点
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="戳一戳表情" tabindex="-1"><a class="header-anchor" href="#戳一戳表情" aria-hidden="true">#</a> 戳一戳表情</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new PokeMessage(new PokeMessage.Body()),
};

MessageChain msgChain = new MessageChainBuilder()
.Poke(new PokeMessage.Body())//1-6点
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="戳一戳-双击头像" tabindex="-1"><a class="header-anchor" href="#戳一戳-双击头像" aria-hidden="true">#</a> 戳一戳(双击头像)</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new TouchMessage(123),//qq号
};

MessageChain msgChain = new MessageChainBuilder()
.Touch(123)//qq号
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="音乐" tabindex="-1"><a class="header-anchor" href="#音乐" aria-hidden="true">#</a> 音乐</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new MusicMessage(1,&quot;qq&quot;),//音乐id，来源qq/163
};

MessageChain msgChain = new MessageChainBuilder()
.Music(1,&quot;qq&quot;)//qq号
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者自定义：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    //MusicCustomMessage.Body中的属性请自行查看
    new MusicCustomMessage(new MusicCustomMessage.Body(){}),
};

MessageChain msgChain = new MessageChainBuilder()
.MusicCustom(new MusicCustomMessage.Body(){})
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new LocationMessage(new LocationMessage.Body(){
        Lat=123,
        Lon=321,//经纬度必填
    }),
};

MessageChain msgChain = new MessageChainBuilder()
.Location(new LocationMessage.Body(){})
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="天气" tabindex="-1"><a class="header-anchor" href="#天气" aria-hidden="true">#</a> 天气</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new WeatherMessage(new WeatherMessage.Body(){
        Code=123,//必填
        City=&quot;北京&quot;
    }),
};

MessageChain msgChain = new MessageChainBuilder()
.Weather(new WeatherMessage.Body(){})
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接分享" tabindex="-1"><a class="header-anchor" href="#链接分享" aria-hidden="true">#</a> 链接分享</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new ShareMessage(new ShareMessage.Body()),//Body中的属性请自行查看
};

MessageChain msgChain = new MessageChainBuilder()
.Share(new ShareMessage.Body(){})
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="礼物消息" tabindex="-1"><a class="header-anchor" href="#礼物消息" aria-hidden="true">#</a> 礼物消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new GiftMessage(123,1),//qq号，礼物id
};

MessageChain msgChain = new MessageChainBuilder()
.Gift(123,1)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并转发" tabindex="-1"><a class="header-anchor" href="#合并转发" aria-hidden="true">#</a> 合并转发</h3><p>我也不知道有没有用，如果有人需要且没用，请反馈给我。</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    //合并转发resid，我也不知道这个参数是个啥
    new MergeMessage(1),
};

MessageChain msgChain = new MessageChainBuilder()
.Merge(1)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并转发-1" tabindex="-1"><a class="header-anchor" href="#合并转发-1" aria-hidden="true">#</a> 合并转发</h3><p>我也不知道有没有用，如果有人需要且没用，请反馈给我。</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    //消息ID，我也不知道这个参数是不是messageid
    new MergeNodeMessage(1),
};

MessageChain msgChain = new MessageChainBuilder()
.MergeNode(1)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json消息" tabindex="-1"><a class="header-anchor" href="#json消息" aria-hidden="true">#</a> Json消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new JsonMessage(new JsonMessage.Body()),
};

MessageChain msgChain = new MessageChainBuilder()
.Json(new JsonMessage.Body())
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xml消息" tabindex="-1"><a class="header-anchor" href="#xml消息" aria-hidden="true">#</a> XML消息</h3><p>暂不支持</p>`,35);function t(b,h){const s=d("ExternalLinkIcon");return l(),r("div",null,[c,i("p",null,[e("表情ID可以到"),i("a",m,[e("这里"),v(s)]),e("查看")]),g])}const C=a(u,[["render",t],["__file","message.html.vue"]]);export{C as default};
