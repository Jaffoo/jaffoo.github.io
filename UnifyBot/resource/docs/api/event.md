## 事件监听说明

```C#
bot.EventReceived.OfType<MessageReceiverBase>().Subscribe(x =>
{
    var ev = x as RequestFriend;
    //能接收到所有消息和事件
    Console.WriteLine(ev.ToJsonStr());
});
bot.EventReceived.OfType<EventReceiver>().Subscribe(x =>
{
    var ev = x as RequestFriend;
    //只能接收到事件（所有类型）
    Console.WriteLine(ev.ToJsonStr());
});
bot.EventReceived.OfType<RequestFriend>().Subscribe(async x =>
{
    //只能接收到特定事件（传入什么类型就是什么事件）
    Console.WriteLine(x.ToJsonStr());
    await x.Agree();
});

//ws断开事件
bot.DisconnectionHappened.Subscribe(e =>
{
    Console.WriteLine("webscoket断开连接：" + e);
});
```

## 事件类型

### 元事件

命名空间: `UnifyBot.Receiver.EventReceiver.Meta`

<table>
<tr><th>事件名称</th><th>类名</th><th>扩展属性/方法</th></tr>
<tr><td>心跳事件</td><td>HeartBeat</td><td>无</td></tr>
<tr><td>生命周期</td><td>Lifecycle</td><td>无</td></tr>
</table>

### 通知事件
命名空间: `UnifyBot.Receiver.EventReceiver.Notice`

<table>
<tr><th>事件名称</th><th>类名</th><th>扩展属性/方法</th></tr>
<tr><td>好友添加</td><td>FriendAdd</td><td>Friend-好友信息</td></tr>
<tr><td>好友消息撤回</td><td>FriendMsgRecall</td><td>Message-撤回的消息</td></tr>
<tr><td>群管理员变动</td><td>GroupAdminChange</td><td>Admin：管理员信息</td></tr>
<tr><td>群禁言</td><td>GroupBan</td><td>Banner-被禁用者</td></tr>
<tr><td>群文件上传</td><td>GroupFileUpload</td><td>无</td></tr>
<tr><td>群成员荣誉变更</td><td>GroupHonor</td><td>User-被变更人</td></tr>
<tr><td>红包运气王</td><td>GroupLucky</td><td>User-运气王</td></tr>
<tr><td>群成员减少</td><td>GroupMemberDecrease</td><td>无</td></tr>
<tr><td>群成员增加</td><td>GroupMemberIncrease</td><td>User-新人信息</td></tr>
<tr><td>群消息撤回</td><td>GroupMsgRecall</td><td>Message-撤回的消息</td></tr>
<tr><td>群戳一戳</td><td>GroupPoke</td><td>Poke-戳一戳人信息；Poked-被戳人信息</td></tr>
</table>

### 请求事件
命名空间: `UnifyBot.Receiver.EventReceiver.Request`

<table>
<tr><th>事件名称</th><th>类名</th><th>扩展属性/方法</th></tr>
<tr><td>好友添加请求</td><td>RequestFriend</td><td>Agree()-同意；Reject("")-拒绝</td></tr>
<tr><td>加群请求／邀请</td><td>RequestGroup</td><td>Group-群信息；Agree()-同意；Reject("")-拒绝</td></tr>
</table>