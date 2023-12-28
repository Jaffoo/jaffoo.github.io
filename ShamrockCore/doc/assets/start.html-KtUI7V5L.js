import{_ as a,o as s,c as d,b as e,e as i,a as n}from"./app-RsnX7yEo.js";const r={},t=i(`<h2 id="nuget安装" tabindex="-1"><a class="header-anchor" href="#nuget安装" aria-hidden="true">#</a> Nuget安装</h2><p>Nuget搜索ShamrockCore即可下载使用，同时，你可能还需要安装Manganese和System.Reactive.Linq。</p><h3 id="命名空间如下" tabindex="-1"><a class="header-anchor" href="#命名空间如下" aria-hidden="true">#</a> 命名空间如下</h3><details><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Manganese.Text;
using ShamrockCore.Reciver;
using ShamrockCore.Reciver.Events;
using ShamrockCore.Reciver.MsgChain;
using ShamrockCore.Reciver.Receivers;
using ShamrockCore.Utils;
using System.Reactive.Linq;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var config = new ConnectConfig(&quot;Host&quot;, websocket_port, http_port, &quot;token&quot;);
using Bot bot = new(config);
await bot.Start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3>说明：</h3><br>`,8),l=n("br",null,null,-1),c=n("br",null,null,-1),o=n("br",null,null,-1),u=i(`<h2 id="接收消息" tabindex="-1"><a class="header-anchor" href="#接收消息" aria-hidden="true">#</a> 接收消息</h2><h3 id="群消息" tabindex="-1"><a class="header-anchor" href="#群消息" aria-hidden="true">#</a> 群消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;群消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="好友消息" tabindex="-1"><a class="header-anchor" href="#好友消息" aria-hidden="true">#</a> 好友消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;FriendReceiver&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;好友消息：&quot; + msg.ToJsonString());
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件消息" tabindex="-1"><a class="header-anchor" href="#事件消息" aria-hidden="true">#</a> 事件消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//所有事件消息
bot.EventReceived.OfType&lt;EventBase&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;事件基类：&quot; + msg.ToJsonString());
})
//具体事件消息
bot.EventReceived.OfType&lt;FriendAddEvent&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;好友请求事件：&quot; + msg.ToJsonString());
})
//ws断开事件
bot.DisconnectionHappened.Subscribe(e =&gt;
{
    Console.WriteLine(&quot;webscoket断开连接：&quot; + e);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="未知消息" tabindex="-1"><a class="header-anchor" href="#未知消息" aria-hidden="true">#</a> 未知消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.UnknownMessageReceived.Subscribe(msg =&gt;
{
    Console.WriteLine(&quot;未知消息：&quot; + msg);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阻塞线程" tabindex="-1"><a class="header-anchor" href="#阻塞线程" aria-hidden="true">#</a> 阻塞线程</h3><p>正常来说，ws属于长连接，所以要保证ws所在的线程不被释放。</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>while (true)
{
    //Thread.Sleep(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function v(b,h){return s(),d("div",null,[t,e("Host：必填，纯IP地址，请勿带协议前缀如：http "),l,e("websocket_port：必填，主动webscoket端口 "),c,e("http_port：必填，http接口端口 "),o,e("token：选填，建议公网使用token "),u])}const g=a(r,[["render",v],["__file","start.html.vue"]]);export{g as default};
