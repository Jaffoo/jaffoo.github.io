import{_ as t,o as e,c as d,e as n}from"./app-PzQAEeMs.js";const i={},s=n(`<h2 id="事件监听说明" tabindex="-1"><a class="header-anchor" href="#事件监听说明" aria-hidden="true">#</a> 事件监听说明</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//所有事件消息
bot.EventReceived.OfType&lt;EventBase&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;事件基类：&quot; + msg.ToJsonString());
    if (msg.EventType == PostEventType.Friend)//v1.0.0暂无此属性，下一个版本加上
    {
        var resq = msg as FriendAddEvent;
        if (resq == null) return;
        Console.WriteLine(&quot;好友请求事件：&quot; + msg.ToJsonString());
    }
})
//或者具体事件消息
bot.EventReceived.OfType&lt;FriendAddEvent&gt;().Subscribe(async msg =&gt;{
    await Console.Out.WriteLineAsync(&quot;好友请求事件：&quot; + msg.ToJsonString());
})


//ws断开事件
bot.DisconnectionHappened.Subscribe(e =&gt;
{
    Console.WriteLine(&quot;webscoket断开连接：&quot; + e);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h2><table><tr><th>事件名称</th><th>枚举类型</th><th>特殊说明</th></tr><tr><td>添加好友请求</td><td>PostEventType.Friend</td><td>此对象扩展方法可以快速处理请求</td></tr><tr><td>加群请求／邀请</td><td>PostEventType.Group</td><td>此对象扩展方法可以快速处理请求</td></tr><tr><td>群成员增加事件</td><td>PostEventType.GroupIncrease</td><td>扩展方法/属性自行查看</td></tr><tr><td>群成员减少事件</td><td>PostEventType.GroupDecrease</td><td>扩展方法/属性自行查看</td></tr><tr><td>私聊消息撤回</td><td>PostEventType.FriendRecall</td><td>扩展方法/属性自行查看</td></tr><tr><td>群聊消息撤回</td><td>PostEventType.GroupRecall</td><td>扩展方法/属性自行查看</td></tr><tr><td>群管理员变动</td><td>PostEventType.GroupAdmin</td><td>扩展方法/属性自行查看</td></tr><tr><td>群文件上传</td><td>PostEventType.GroupUpload</td><td>扩展方法/属性自行查看</td></tr><tr><td>私聊文件上传</td><td>PostEventType.PrivateUpload</td><td>扩展方法/属性自行查看</td></tr><tr><td>群禁言</td><td>PostEventType.GroupBan</td><td>扩展方法/属性自行查看</td></tr><tr><td>群成员名片变动</td><td>PostEventType.GroupCard</td><td>扩展方法/属性自行查看</td></tr><tr><td>精华消息</td><td>PostEventType.Essence</td><td>扩展方法/属性自行查看</td></tr><tr><td>头像戳一戳</td><td>PostEventType.Poke</td><td>扩展方法/属性自行查看</td></tr><tr><td>群头衔变更</td><td>PostEventType.Title</td><td>扩展方法/属性自行查看</td></tr></table>`,4),r=[s];function a(l,v){return e(),d("div",null,r)}const c=t(i,[["render",a],["__file","event.html.vue"]]);export{c as default};
