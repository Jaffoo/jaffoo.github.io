import{_ as t,o as e,c as d,e as n}from"./app-LGl6Qalc.js";const r={},i=n(`<h2 id="事件监听说明" tabindex="-1"><a class="header-anchor" href="#事件监听说明" aria-hidden="true">#</a> 事件监听说明</h2><p>以下所有事件都可以有两种方法监听，你只需要选择其中一个就行。</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.EventReceived.OfType&lt;EventBase&gt;().Subscribe(async msg =&gt;
{
    if (msg.EventType == EventType.friend)
    {
        var resq = msg as FriendAddEvent;
        if (resq == null) return;
        Console.WriteLine(&quot;好友请求事件：&quot; + msg.ToJsonString());
    }
});
//或者
bot.EventReceived.OfType&lt;FriendAddEvent&gt;().Subscribe(async msg =&gt;
{
    Console.WriteLine(&quot;好友请求事件：&quot; + msg.ToJsonString());
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h2><table><tr><th>事件名称</th><th>枚举类型</th><th>特殊说明</th></tr><tr><td>添加好友请求</td><td>EventType.friend</td><td>此对象扩展方法可以快速处理请求</td></tr><tr><td>加群请求／邀请</td><td>EventType.group</td><td>此对象扩展方法可以快速处理请求</td></tr><tr><td>群成员增加事件</td><td>EventType.group_increase</td><td>扩展方法/属性自行查看</td></tr><tr><td>群成员减少事件</td><td>EventType.group_decrease</td><td>扩展方法/属性自行查看</td></tr><tr><td>私聊消息撤回</td><td>EventType.friend_recall</td><td>扩展方法/属性自行查看</td></tr><tr><td>群聊消息撤回</td><td>EventType.group_recall</td><td>扩展方法/属性自行查看</td></tr><tr><td>群管理员变动</td><td>EventType.group_admin</td><td>扩展方法/属性自行查看</td></tr><tr><td>群文件上传</td><td>EventType.group_upload</td><td>扩展方法/属性自行查看</td></tr><tr><td>私聊文件上传</td><td>EventType.private_upload</td><td>扩展方法/属性自行查看</td></tr><tr><td>群禁言</td><td>EventType.group_ban</td><td>扩展方法/属性自行查看</td></tr><tr><td>群成员名片变动</td><td>EventType.group_card</td><td>扩展方法/属性自行查看</td></tr><tr><td>精华消息</td><td>EventType.essence</td><td>扩展方法/属性自行查看</td></tr><tr><td>头像戳一戳</td><td>EventType.poke</td><td>扩展方法/属性自行查看</td></tr><tr><td>群头衔变更</td><td>EventType.title</td><td>扩展方法/属性自行查看</td></tr></table>`,5),s=[i];function a(l,v){return e(),d("div",null,s)}const o=t(r,[["render",a],["__file","event.html.vue"]]);export{o as default};
