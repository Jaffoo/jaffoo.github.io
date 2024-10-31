import{_ as a,r as d,o as l,c as r,a as i,b as e,d as v,e as n}from"./app-1lXgMxGI.js";const u={},c=n(`<h2 id="接收消息" tabindex="-1"><a class="header-anchor" href="#接收消息" aria-hidden="true">#</a> 接收消息</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//所有消息
bot.MessageReceived.OfType&lt;MessageReceiverBase&gt;().Subscribe(x =&gt;
{
    //能接收到所有消息和事件
    Console.WriteLine(x.ToJsonStr());
});
bot.MessageReceived.OfType&lt;MessageReceiver&gt;().Subscribe(x =&gt;
{
    //只能接收到消息（所有类型）
    Console.WriteLine(x.ToJsonStr());
});
bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(x =&gt;
{
    //只能接收到群消息
    Console.WriteLine(x.ToJsonStr());
});
bot.MessageReceived.OfType&lt;PrivateReceiver&gt;().Subscribe(x =&gt;
{
    //只能接收到好友消息
    Console.WriteLine(x.ToJsonStr());

});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息构建" tabindex="-1"><a class="header-anchor" href="#消息构建" aria-hidden="true">#</a> 消息构建</h2><p>类 MessageChain 就是消息链，此类继承于<code>List&lt;Message&gt;</code>，你平时如何使用 List，此类依然适用。 <br></p><p>构建消息链：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new TextMessage(&quot;你好qq号是123的群友，我at了你！&quot;),
    new AtMessage(123),
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChainBuilder()
.Text(&quot;你好qq号是123的群友，我at了你！&quot;)
.At(123)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主动发送消息" tabindex="-1"><a class="header-anchor" href="#主动发送消息" aria-hidden="true">#</a> 主动发送消息</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>Connect connect = new(&quot;localhost&quot;, 3001, 3000);
Bot bot = new(connect);
//以下方法均支持重载，展示只是发送简单纯文本消息，发送复杂消息，请用消息链。
bot.SendGroupMessage(&quot;123&quot;, &quot;给群号为123的发送了一条消息&quot;);
bot.SendPrivateMessage(&quot;321&quot;,&quot;给好友号为321发送了一条消息&quot;);

var msgid1 = new MessageChain() { new TextMessage(&quot;给群号为123的发送了一条消息&quot;)}.SendGroup(bot,123);
var msgid2 = new MessageChain() { new TextMessage(&quot;给好友号为321发送了一条消息&quot;)}.SendPrivate(bot,321);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="被动动发送消息" tabindex="-1"><a class="header-anchor" href="#被动动发送消息" aria-hidden="true">#</a> 被动动发送消息</h2><p>当接收到消息时，无论是好友还是群消息，都可以快速回复 <br>例如：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>Connect connect = new(&quot;localhost&quot;, 3001, 3000);
Bot bot = new(connect);
bot.MessageReceived.OfType&lt;MessageReceiverBase&gt;().Subscribe(async x =&gt;
{
    if (x is GroupReceiver groupReceiver)
    {
        await groupReceiver.SendMessage(&quot;给接收到消息的群快速发送了一条消息&quot;);
    }
});
bot.MessageReceived.OfType&lt;MessageReceiver&gt;().Subscribe(async x =&gt;
{
    if (x is GroupReceiver groupReceiver)
    {
        await groupReceiver.SendMessage(&quot;给接收到消息的群快速发送了一条消息&quot;);
    }
});
bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(async x =&gt;
{
    await x.SendMessage(&quot;给接收到消息的群快速发送了一条消息&quot;);
});
bot.MessageReceived.OfType&lt;PrivateReceiver&gt;().Subscribe(async x =&gt;
{
    await x.SendMessage(&quot;快速给好友回了一条信息&quot;);

});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，以上的SendMessage方法支持重载</p><h2 id="消息类型" tabindex="-1"><a class="header-anchor" href="#消息类型" aria-hidden="true">#</a> 消息类型</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//类 MessageChain 继承于\`List&lt;Message&gt;\`，所以可以用add添加消息
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="at-消息" tabindex="-1"><a class="header-anchor" href="#at-消息" aria-hidden="true">#</a> at 消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本消息" tabindex="-1"><a class="header-anchor" href="#文本消息" aria-hidden="true">#</a> 文本消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new TextMessage(string msg),
};
//at
MessageChain msgChain = new MessageChainBuilder()
.Text(string msg)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片消息" tabindex="-1"><a class="header-anchor" href="#图片消息" aria-hidden="true">#</a> 图片消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//参数三选一，优先级filePath&gt;url&gt;base64
MessageChain msgChain = new MessageChain()
{
    new ImageMessage(string file = &quot;&quot;, string base64 = &quot;&quot;, string url = &quot;&quot;, ImageType type = 0, bool cache = true, bool proxy = true),
    new ImageByUrl(string url, ImageType type = 0, bool cache = true, bool proxy = true),
    new ImageByPath(string path, ImageType type = 0),
    new ImageByBase64(string base64, ImageType type = 0)
};

MessageChain msgChain = new MessageChainBuilder()
.ImageByPath(string path, ImageType type = 0)
.ImageByUrl(string url, ImageType type = 0, bool cache = true, bool proxy = true)
.ImageByBase64(string base64, ImageType type = 0)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="音频消息" tabindex="-1"><a class="header-anchor" href="#音频消息" aria-hidden="true">#</a> 音频消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    //参数三选一，优先级 file&gt;base64&gt;url
    new RecordMessage(string file = &quot;&quot;, string base64 = &quot;&quot;, string url = &quot;&quot;, bool magic = false, bool cache = true, bool proxy = true),
    new RecordByUrl(string url, bool cache = true, bool proxy = true),
    new RecordByPath(string path),
    new RecordByBase64(string base64),
};

MessageChain msgChain = new MessageChainBuilder()
.RecordByUrl(string url, bool cache = true, bool proxy = true)
.RecordByPath(string path)
.RecordByBase64(string base64)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视频消息" tabindex="-1"><a class="header-anchor" href="#视频消息" aria-hidden="true">#</a> 视频消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    VideoMessage(string file = &quot;&quot;, string base64 = &quot;&quot;, string url = &quot;&quot;, bool cache = true, bool proxy = true),
    new VideoByUrl(string url, bool cache = true, bool proxy = true),
    new VideoByPath(string path),
    new VideoByBase64(string base64),
};

MessageChain msgChain = new MessageChainBuilder()
.VideoByUrl(string url, bool cache = true, bool proxy = true)
.VideoByPath(string path)
.VideoByBase64(string base64)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表情消息" tabindex="-1"><a class="header-anchor" href="#表情消息" aria-hidden="true">#</a> 表情消息</h3>`,27),t={href:"https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},m=n(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new FaceMessage(int id)
};

MessageChain msgChain = new MessageChainBuilder()
.Face(int i)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回复消息" tabindex="-1"><a class="header-anchor" href="#回复消息" aria-hidden="true">#</a> 回复消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new ReplyMessage(long msgId),//消息id
};

MessageChain msgChain = new MessageChainBuilder()
.Reply(long msgId)//消息id
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="猜拳表情" tabindex="-1"><a class="header-anchor" href="#猜拳表情" aria-hidden="true">#</a> 猜拳表情</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new RpsMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Rps()
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="骰子表情" tabindex="-1"><a class="header-anchor" href="#骰子表情" aria-hidden="true">#</a> 骰子表情</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new DiceMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Dice()
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="戳一戳表情" tabindex="-1"><a class="header-anchor" href="#戳一戳表情" aria-hidden="true">#</a> 戳一戳表情</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new PokeMessage(int type, int id, string name = &quot;&quot;),
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="音乐" tabindex="-1"><a class="header-anchor" href="#音乐" aria-hidden="true">#</a> 音乐</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new MusicMessage(string musicId, string type = &quot;qq&quot;),//音乐id，来源qq/163
};

MessageChain msgChain = new MessageChainBuilder()
.Music(string musicId, string type = &quot;qq&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者自定义：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new MusicMessage(string url,string audio,string title,string content=&quot;&quot;,string image=&quot;&quot;)//自定义音乐分享
};

MessageChain msgChain = new MessageChainBuilder()
.MusicCustom(string url, string audio, string title, string content = &quot;&quot;, string image = &quot;&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new LocationMessage(double lat, double lon, string title = &quot;&quot;, string content = &quot;&quot;)
};

MessageChain msgChain = new MessageChainBuilder()
.Location(double lat, double lon, string title = &quot;&quot;, string content = &quot;&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接分享" tabindex="-1"><a class="header-anchor" href="#链接分享" aria-hidden="true">#</a> 链接分享</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new ShareMessage(string url, string title, string content = &quot;&quot;, string image=&quot;&quot;)
};

MessageChain msgChain = new MessageChainBuilder()
.Share(string url, string title, string content = &quot;&quot;, string image = &quot;&quot;)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并转发" tabindex="-1"><a class="header-anchor" href="#合并转发" aria-hidden="true">#</a> 合并转发</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new NodeMessage(long msgId),
    new NodeMessage(long qq, string nickname, string msg)//合并转发自定义节点
};

MessageChain msgChain = new MessageChainBuilder()
.Node(long msgId)
.Node(long qq, string nickname, string msg)
.Node(long qq, string nickname, MessageChain msg)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-消息" tabindex="-1"><a class="header-anchor" href="#json-消息" aria-hidden="true">#</a> Json 消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new JsonMessage(string json)
};

MessageChain msgChain = new MessageChainBuilder()
.Json(string json)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xml-消息" tabindex="-1"><a class="header-anchor" href="#xml-消息" aria-hidden="true">#</a> XML 消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new XmlMessage(string xml)
};

MessageChain msgChain = new MessageChainBuilder()
.Xml(string xml)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推荐好友-群" tabindex="-1"><a class="header-anchor" href="#推荐好友-群" aria-hidden="true">#</a> 推荐好友/群</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new ContactMessage(string type, string qq),
    new QQContact(string qq),
    new GroupContact(string qq),
};

MessageChain msgChain = new MessageChainBuilder()
.ContactFriend(long qq)
.ContactGroup(long qq)
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="窗口抖动-戳一戳" tabindex="-1"><a class="header-anchor" href="#窗口抖动-戳一戳" aria-hidden="true">#</a> 窗口抖动（戳一戳）</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new ShakeMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Shake()
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名发消息-开启匿名的前提下" tabindex="-1"><a class="header-anchor" href="#匿名发消息-开启匿名的前提下" aria-hidden="true">#</a> 匿名发消息（开启匿名的前提下）</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>MessageChain msgChain = new MessageChain()
{
    new AnonymousMessage(),
};

MessageChain msgChain = new MessageChainBuilder()
.Anonymous()
.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function g(b,o){const s=d("ExternalLinkIcon");return l(),r("div",null,[c,i("p",null,[e("表情 ID 可以到"),i("a",t,[e("这里"),v(s)]),e("查看")]),m])}const C=a(u,[["render",g],["__file","message.html.vue"]]);export{C as default};
