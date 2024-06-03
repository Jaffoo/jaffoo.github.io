import{_ as l,r,o as t,c,b as e,a as n,d,w as a,e as i}from"./app-Sx5Z5IIA.js";const v={},o=i(`<h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h2><p>克隆或下载此库，编译找到UnifyBot使用；或者直接将【UnifyBot】项目添加到你项目中使用。</p><h2 id="nuget安装" tabindex="-1"><a class="header-anchor" href="#nuget安装" aria-hidden="true">#</a> Nuget安装</h2><p>Nuget搜索UnifyBot即可下载使用即可。（推荐此方法）</p><h3 id="可能需要的命名空间如下" tabindex="-1"><a class="header-anchor" href="#可能需要的命名空间如下" aria-hidden="true">#</a> 可能需要的命名空间如下</h3><details><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Reactive.Linq;
using UnifyBot;
using UnifyBot.Model;
using UnifyBot.Receiver;
using UnifyBot.Receiver.EventReceiver;
using UnifyBot.Receiver.EventReceiver.Notice;
using UnifyBot.Receiver.MessageReceiver;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>分为两种，主动websocket和被动websocket。</p><p><strong>什么是主动websocket</strong>：QQ机器人框架做为websocket服务端，UnifyBot作为websocket客户端</p><p><strong>什么时候选择主动</strong>：如果你的程序里，有且仅有一个webscoket功能，也就是websocket之用于接收QQ消息，没有其他用途，选这个。</p><p><strong>什么是被动websocket</strong>：QQ机器人框架做为websocket客户端，UnifyBot作为websocket服务端</p><p><strong>什么时候选择被动</strong>：如果你的程序里除了用websocket接受QQ消息意外，还有其他功能需要使用websocket，那么这个时候用这个合适。 举个例子：比如你用了主动websocket，你的前端还需要和你的后端建立websocket连接发送消息，这个时候意味着你程序里有两个websocket一个作为客户端和QQ通信，一个作为服务端和前端通信， 这种情况选择被动websocket，这样QQ机器人框架和你的项目都是客户端，一同访问使用UnifyBot服务端发送消息，这样一来，就只需要一个websocket服务端就可以实现同时和QQ，前端通信的功能。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//主动websocket连接
Connect connect = new(&quot;127.0.0.1&quot;, 3001, 3000,&#39;token&#39;);//token可选参数
Bot bot = new(connect);
await bot.StartAsync();

//被动websocket连接
var config = new ConnectConfig(&quot;192.168.2.10&quot;, 3001, 3000, true, &#39;token&#39;);//token可选参数);
using Bot bot = new(config);
await bot.Start();
//注意被动websocket的服务地址是0.0.0.0。所以使用被动ws填入QQ机器人框架时候分为以下2中情况：

//在内网环境使用：ws://127.0.0.1:WsPort（ws://127.0.0.1:3001）或者ws://localhost:WsPort（ws://localhost:3001）；

//在公网环境使用：请自行填入公网ip地址填入例如 ：ws://{IP}:WsPort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3>说明：</h3><br>`,15),u=n("br",null,null,-1),b=n("br",null,null,-1),m=n("br",null,null,-1),h=n("h2",{id:"接收消息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#接收消息","aria-hidden":"true"},"#"),e(" 接收消息")],-1),g=i(`<h3 id="接收所有消息" tabindex="-1"><a class="header-anchor" href="#接收所有消息" aria-hidden="true">#</a> 接收所有消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;MessageReceiverBase&gt;().Subscribe(x =&gt;
{
    //能接收到所有消息和事件
    Console.WriteLine(x.ToJsonStr());
});
bot.MessageReceived.OfType&lt;MessageReceiver&gt;().Subscribe(x =&gt;
{
    //只能接收到消息（所有类型）
    Console.WriteLine(x.ToJsonStr());
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="群消息" tabindex="-1"><a class="header-anchor" href="#群消息" aria-hidden="true">#</a> 群消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.MessageReceived.OfType&lt;GroupReceiver&gt;().Subscribe(x =&gt;
{
    //只能接收到群消息
    Console.WriteLine(x.ToJsonStr());
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="好友消息" tabindex="-1"><a class="header-anchor" href="#好友消息" aria-hidden="true">#</a> 好友消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> bot.MessageReceived.OfType&lt;PrivateReceiver&gt;().Subscribe(x =&gt;
 {
     //只能接收到好友消息
     Console.WriteLine(x.ToJsonStr());

 });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件消息" tabindex="-1"><a class="header-anchor" href="#事件消息" aria-hidden="true">#</a> 事件消息</h3>`,7),p=i(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> bot.EventReceived.OfType&lt;MessageReceiverBase&gt;().Subscribe(x =&gt;
 {
     //能接收到所有消息和事件
     Console.WriteLine(x.ToJsonStr());
 });
 bot.EventReceived.OfType&lt;EventReceiver&gt;().Subscribe(x =&gt;
 {
     //只能接收到事件（所有类型）
     Console.WriteLine(x.ToJsonStr());
 });
 bot.EventReceived.OfType&lt;FriendAdd&gt;().Subscribe(x =&gt;
 {
     //只能接收到特定事件（传入什么类型就是什么事件）此处为好友申请事件FriendAdd
     Console.WriteLine(x.ToJsonStr());
 });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="未知消息" tabindex="-1"><a class="header-anchor" href="#未知消息" aria-hidden="true">#</a> 未知消息</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.UnknownMessageReceived.OfType&lt;string&gt;().Subscribe(x =&gt;
{
    //未知事件
    Console.WriteLine(x);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阻塞线程" tabindex="-1"><a class="header-anchor" href="#阻塞线程" aria-hidden="true">#</a> 阻塞线程</h3><p>正常来说，ws属于长连接，所以要保证ws所在的线程不被释放。</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>while (true)
{
    //Thread.Sleep(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(x,w){const s=r("RouterLink");return t(),c("div",null,[o,e("Host：必填，纯IP地址，请勿带协议前缀如：http "),u,e("WsPort：必填，正向/反向ws端口 "),b,e("http_port：必填，http接口端口 "),m,e("token：选填，建议公网使用token "),h,n("p",null,[d(s,{to:"/api/event.html#%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E8%AF%B4%E6%98%8E"},{default:a(()=>[e("更多")]),_:1})]),g,n("p",null,[d(s,{to:"/api/message.html#%E6%8E%A5%E6%94%B6%E6%B6%88%E6%81%AF"},{default:a(()=>[e("更多")]),_:1})]),p])}const k=l(v,[["render",f],["__file","start.html.vue"]]);export{k as default};
