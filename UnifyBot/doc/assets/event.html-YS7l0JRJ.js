import{_ as e,o as t,c as d,e as r}from"./app-0NPKodNv.js";const n={},i=r(`<h2 id="事件监听说明" tabindex="-1"><a class="header-anchor" href="#事件监听说明" aria-hidden="true">#</a> 事件监听说明</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>bot.EventReceived.OfType&lt;MessageReceiverBase&gt;().Subscribe(x =&gt;
{
    var ev = x as RequestFriend;
    //能接收到所有消息和事件
    Console.WriteLine(ev.ToJsonStr());
});
bot.EventReceived.OfType&lt;EventReceiver&gt;().Subscribe(x =&gt;
{
    var ev = x as RequestFriend;
    //只能接收到事件（所有类型）
    Console.WriteLine(ev.ToJsonStr());
});
bot.EventReceived.OfType&lt;RequestFriend&gt;().Subscribe(async x =&gt;
{
    //只能接收到特定事件（传入什么类型就是什么事件）
    Console.WriteLine(x.ToJsonStr());
    await x.Agree();
});

//ws断开事件
bot.DisconnectionHappened.Subscribe(e =&gt;
{
    Console.WriteLine(&quot;webscoket断开连接：&quot; + e);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h2><h3 id="元事件" tabindex="-1"><a class="header-anchor" href="#元事件" aria-hidden="true">#</a> 元事件</h3><p>命名空间: <code>UnifyBot.Receiver.EventReceiver.Meta</code></p><table><tr><th>事件名称</th><th>类名</th><th>扩展属性/方法</th></tr><tr><td>心跳事件</td><td>HeartBeat</td><td>无</td></tr><tr><td>生命周期</td><td>Lifecycle</td><td>无</td></tr></table><h3 id="通知事件" tabindex="-1"><a class="header-anchor" href="#通知事件" aria-hidden="true">#</a> 通知事件</h3><p>命名空间: <code>UnifyBot.Receiver.EventReceiver.Notice</code></p><table><tr><th>事件名称</th><th>类名</th><th>扩展属性/方法</th></tr><tr><td>好友添加</td><td>FriendAdd</td><td>Friend-好友信息</td></tr><tr><td>好友消息撤回</td><td>FriendMsgRecall</td><td>Message-撤回的消息</td></tr><tr><td>群管理员变动</td><td>GroupAdminChange</td><td>Admin：管理员信息</td></tr><tr><td>群禁言</td><td>GroupBan</td><td>Banner-被禁用者</td></tr><tr><td>群文件上传</td><td>GroupFileUpload</td><td>无</td></tr><tr><td>群成员荣誉变更</td><td>GroupHonor</td><td>User-被变更人</td></tr><tr><td>红包运气王</td><td>GroupLucky</td><td>User-运气王</td></tr><tr><td>群成员减少</td><td>GroupMemberDecrease</td><td>无</td></tr><tr><td>群成员增加</td><td>GroupMemberIncrease</td><td>User-新人信息</td></tr><tr><td>群消息撤回</td><td>GroupMsgRecall</td><td>Message-撤回的消息</td></tr><tr><td>群戳一戳</td><td>GroupPoke</td><td>Poke-戳一戳人信息；Poked-被戳人信息</td></tr></table><h3 id="请求事件" tabindex="-1"><a class="header-anchor" href="#请求事件" aria-hidden="true">#</a> 请求事件</h3><p>命名空间: <code>UnifyBot.Receiver.EventReceiver.Request</code></p><table><tr><th>事件名称</th><th>类名</th><th>扩展属性/方法</th></tr><tr><td>好友添加请求</td><td>RequestFriend</td><td>Agree()-同意；Reject(&quot;&quot;)-拒绝</td></tr><tr><td>加群请求／邀请</td><td>RequestGroup</td><td>Group-群信息；Agree()-同意；Reject(&quot;&quot;)-拒绝</td></tr></table>`,12),s=[i];function a(c,l){return t(),d("div",null,s)}const o=e(n,[["render",a],["__file","event.html.vue"]]);export{o as default};
