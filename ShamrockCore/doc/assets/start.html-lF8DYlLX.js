import{_ as r,r as t,o,c,b as n,a as e,d as a,w as d,e as i}from"./app-v6blIrSf.js";const l={},u=i(`<h2 id="nuget安装" tabindex="-1"><a class="header-anchor" href="#nuget安装" aria-hidden="true">#</a> Nuget安装</h2><p>Nuget搜索ShamrockCore即可下载使用，同时，你可能还需要安装Manganese和System.Reactive.Linq。</p><h3 id="可能需要的命名空间如下" tabindex="-1"><a class="header-anchor" href="#可能需要的命名空间如下" aria-hidden="true">#</a> 可能需要的命名空间如下</h3><details><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Manganese.Text;
using ShamrockCore.Reciver;
using ShamrockCore.Reciver.Events;
using ShamrockCore.Reciver.MsgChain;
using ShamrockCore.Reciver.Receivers;
using ShamrockCore.Utils;
using System.Reactive.Linq;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>分为两种，主动websocket和被动websocket。</p><p><strong>什么是主动websocket</strong>：openshamrock做为websocket服务端，ShamrockCore.NET作为websocket客户端</p><p><strong>什么时候选择主动</strong>：如果你的程序里，有且仅有一个webscoket功能，也就是只需要获取qq消息，选这个。</p><p><strong>什么是被动websocket</strong>：openshamrock做为websocket客户端，ShamrockCore.NET作为websocket服务端</p><p><strong>什么时候选择被动</strong>：如果你的程序里其他功能还需要websocket，那么这个时候用这个合适。 举个例子：比如你用了主动websocket，你的前端还需要和你的后端建立websocket连接发送消息，这个时候意味着你程序里有两个websocket一个作为客户端和QQ通信，一个作为服务端和前端通信， 这种情况选择被动websocket，这样openshamrock和你的前端都是客户端，一同访问ShamrockCore.NET的服务端，这样一来，就只需要一个websocket服务端就可以实现同时和QQ，前端通信的功能。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//主动websocket连接
var config = new ConnectConfig(Host:&quot;192.168.2.10&quot;, WsPort:5800, HttpPort:5700, Token:&quot;token&quot;);
using Bot bot = new(config);
await bot.Start();

//被动websocket连接
var config = new ConnectConfig(Host:&quot;192.168.2.10&quot;, WsPort:5800, HttpPort:5700, Token:&quot;token&quot;, Reverse:true);
//此处token无用，下个版本看情况加上还是删除
using Bot bot = new(config);
await bot.Start();
//注意被动websocket的服务地址是0.0.0.0。所以当你填入**openshamnrock**时候分为以下2中情况：

//内网环境：ws://127.0.0.1:WsPort（ws://127.0.0.1:5800）或者ws://localhost:WsPort（ws://localhost:5800）；

//公网环境：请自行查询公网ip地址填入例如 ：ws://{IP}:WsPort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3>说明：</h3><br>`,13),v=e("br",null,null,-1),b=e("br",null,null,-1),h=e("br",null,null,-1),m=e("h2",{id:"接收消息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#接收消息","aria-hidden":"true"},"#"),n(" 接收消息")],-1),g=e("h3",{id:"群消息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#群消息","aria-hidden":"true"},"#"),n(" 群消息")],-1),p=i(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;群消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="好友消息" tabindex="-1"><a class="header-anchor" href="#好友消息" aria-hidden="true">#</a> 好友消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;FriendReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;好友消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="频道消息" tabindex="-1"><a class="header-anchor" href="#频道消息" aria-hidden="true">#</a> 频道消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;GuildReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;频道消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件消息" tabindex="-1"><a class="header-anchor" href="#事件消息" aria-hidden="true">#</a> 事件消息</h3>`,6),k=i(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.EventReceived.OfType&lt;FriendAddEvent&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;好友请求事件：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="未知消息" tabindex="-1"><a class="header-anchor" href="#未知消息" aria-hidden="true">#</a> 未知消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.UnknownMessageReceived.Subscribe(msg =&gt;
{
    Console.WriteLine(&quot;未知消息：&quot; + msg);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阻塞线程" tabindex="-1"><a class="header-anchor" href="#阻塞线程" aria-hidden="true">#</a> 阻塞线程</h3><p>正常来说，ws属于长连接，所以要保证ws所在的线程不被释放。</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>while (true)
{
    //Thread.Sleep(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(C,_){const s=t("RouterLink");return o(),c("div",null,[u,n("Host：必填，纯IP地址，请勿带协议前缀如：http "),v,n("WsPort：必填，正向/反向ws端口 "),b,n("http_port：必填，http接口端口 "),h,n("token：选填，建议公网使用token "),m,g,e("p",null,[a(s,{to:"/api/event.html#%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E8%AF%B4%E6%98%8E"},{default:d(()=>[n("更多")]),_:1})]),p,e("p",null,[a(s,{to:"/api/message.html#%E6%8E%A5%E6%94%B6%E6%B6%88%E6%81%AF"},{default:d(()=>[n("更多")]),_:1})]),k])}const x=r(l,[["render",w],["__file","start.html.vue"]]);export{x as default};
