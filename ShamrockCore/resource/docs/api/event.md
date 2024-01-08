## 事件监听说明
以下所有事件都可以有两种方法监听，你只需要选择其中一个就行。
```C#
bot.EventReceived.OfType<EventBase>().Subscribe(async msg =>
{
    if (msg.EventType == PostEventType.Friend)
    {
        var resq = msg as FriendAddEvent;
        if (resq == null) return;
        Console.WriteLine("好友请求事件：" + msg.ToJsonString());
    }
});
//或者
bot.EventReceived.OfType<FriendAddEvent>().Subscribe(async msg =>
{
    Console.WriteLine("好友请求事件：" + msg.ToJsonString());
});
```

## 事件类型
<table>
<tr><th>事件名称</th><th>枚举类型</th><th>特殊说明</th></tr>
<tr><td>添加好友请求</td><td>PostEventType.Friend</td><td>此对象扩展方法可以快速处理请求</td></tr>
<tr><td>加群请求／邀请</td><td>PostEventType.Group</td><td>此对象扩展方法可以快速处理请求</td></tr>
<tr><td>群成员增加事件</td><td>PostEventType.GroupIncrease</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>群成员减少事件</td><td>PostEventType.GroupDecrease</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>私聊消息撤回</td><td>PostEventType.FriendRecall</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>群聊消息撤回</td><td>PostEventType.GroupRecall</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>群管理员变动</td><td>PostEventType.GroupAdmin</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>群文件上传</td><td>PostEventType.GroupUpload</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>私聊文件上传</td><td>PostEventType.PrivateUpload</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>群禁言</td><td>PostEventType.GroupBan</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>群成员名片变动</td><td>PostEventType.GroupCard</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>精华消息</td><td>PostEventType.Essence</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>头像戳一戳</td><td>PostEventType.Poke</td><td>扩展方法/属性自行查看</td></tr>
<tr><td>群头衔变更</td><td>PostEventType.Title</td><td>扩展方法/属性自行查看</td></tr>
</table>