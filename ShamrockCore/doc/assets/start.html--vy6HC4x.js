import{_ as r,r as t,o as l,c,b as n,a as e,d as s,w as d,e as i}from"./app-UA-XK0GY.js";const o={},u=i(`<h2 id="nuget安装" tabindex="-1"><a class="header-anchor" href="#nuget安装" aria-hidden="true">#</a> Nuget安装</h2><p>Nuget搜索ShamrockCore即可下载使用，同时，你可能还需要安装Manganese和System.Reactive.Linq。</p><h3 id="可能需要的命名空间如下" tabindex="-1"><a class="header-anchor" href="#可能需要的命名空间如下" aria-hidden="true">#</a> 可能需要的命名空间如下</h3><details><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Manganese.Text;
using ShamrockCore.Reciver;
using ShamrockCore.Reciver.Events;
using ShamrockCore.Reciver.MsgChain;
using ShamrockCore.Reciver.Receivers;
using ShamrockCore.Utils;
using System.Reactive.Linq;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var config = new ConnectConfig(&quot;Host&quot;, websocket_port, http_port, &quot;token&quot;);
using Bot bot = new(config);
await bot.Start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3>说明：</h3><br>`,8),v=e("br",null,null,-1),h=e("br",null,null,-1),m=e("br",null,null,-1),b=e("h2",{id:"接收消息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#接收消息","aria-hidden":"true"},"#"),n(" 接收消息")],-1),g=e("h3",{id:"群消息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#群消息","aria-hidden":"true"},"#"),n(" 群消息")],-1),p=i(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;群消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="好友消息" tabindex="-1"><a class="header-anchor" href="#好友消息" aria-hidden="true">#</a> 好友消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;FriendReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;好友消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件消息" tabindex="-1"><a class="header-anchor" href="#事件消息" aria-hidden="true">#</a> 事件消息</h3>`,4),_=i(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.EventReceived.OfType&lt;FriendAddEvent&gt;().Subscribe(async msg =&gt;{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function C(f,x){const a=t("RouterLink");return l(),c("div",null,[u,n("Host：必填，纯IP地址，请勿带协议前缀如：http "),v,n("websocket_port：必填，主动webscoket端口 "),h,n("http_port：必填，http接口端口 "),m,n("token：选填，建议公网使用token "),b,g,e("p",null,[s(a,{to:"/api/event.html#%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E8%AF%B4%E6%98%8E"},{default:d(()=>[n("更多")]),_:1})]),p,e("p",null,[s(a,{to:"/api/message.html#%E6%8E%A5%E6%94%B6%E6%B6%88%E6%81%AF"},{default:d(()=>[n("更多")]),_:1})]),_])}const k=r(o,[["render",C],["__file","start.html.vue"]]);export{k as default};
