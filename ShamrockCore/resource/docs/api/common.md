## 群聊相关API

```C#
bot.MessageReceived.OfType<GroupReceiver>().Subscribe(async msg =>
{
    //具体看表格
})
```

<table>
<tr>
<th>名称</th>
<th>调用方法</th>
<th>说明</th>
</tr>
<tr>
<td>禁言</td>
<td>msg.Sender.Ban(10)</td>
<td>单位：秒</td>
</tr>

<tr>
<td>解禁</td>
<td>msg.Sender.NoBan()</td>
<td></td>
</tr>

<tr>
<td>戳一戳</td>
<td>msg.Sender.Touch()</td>
<td></td>
</tr>

<tr>
<td>踢出群聊</td>
<td>msg.Sender.Kick()</td>
<td></td>
</tr>

<tr>
<td>设置头衔</td>
<td>msg.Sender.SetSpecialTitle()</td>
<td></td>
</tr>

<tr>
<td>设置为管理员</td>
<td>msg.Sender.SetAdmin()</td>
<td></td>
</tr>

<tr>
<td>移除管理员</td>
<td>msg.Sender.RemoveAdmin()</td>
<td></td>
</tr>

<tr>
<td>设置成员群名片</td>
<td>msg.Sender.SetCard()</td>
<td></td>
</tr>

<tr>
<td>成员资料卡点赞</td>
<td>msg.Sender.Like()</td>
<td></td>
</tr>
</table>

## 群成员相关API
Member和上面的Sender是同一个对象，所有API同上。

## 群相关API
```C#
var bot = new Bot(new Config())
var group = bot.Groups.FirstOrDefault();
```
<table>
<tr>
<th>名称</th>
<th>调用方法</th>
<th>说明</th>
</tr>

<tr>
<td>群成员</td>
<td>group.Members</td>
<td></td>
</tr>

<tr>
<td>被禁言列表</td>
<td>group.BanList</td>
<td></td>
</tr>

<tr>
<td>群精华消息</td>
<td>group.EssenceMsg</td>
<td></td>
</tr>

<tr>
<td>群文件系统信息</td>
<td>group.FilesSystemInfo</td>
<td></td>
</tr>

<tr>
<td>群根目录</td>
<td>group.RootFiles</td>
<td></td>
</tr>

<tr>
<td>群荣誉</td>
<td>group.Honor</td>
<td></td>
</tr>

<tr>
<td>群公告</td>
<td>group.Notice</td>
<td></td>
</tr>

<tr>
<td>群系统消息</td>
<td>group.SystemMsg</td>
<td>不知道什么结果哦</td>
</tr>

<tr>
<td>机器人可@全体成员的剩余次数</td>
<td>group.AtAllCount</td>
<td>如果机器人不是管理，次数为0</td>
</tr>

<tr>
<td>全体禁言/取消禁言</td>
<td>group.AllBan(true/false)</td>
<td></td>
</tr>

<tr>
<td>获取群历史聊天</td>
<td>group.GetHistoryMsg()</td>
<td></td>
</tr>

<tr>
<td>群打卡</td>
<td>group.Sign()</td>
<td></td>
</tr>

<tr>
<td>发送群公告</td>
<td>group.SendNotice()</td>
<td>我没有发送成功，暂不知哪里出了问题</td>
</tr>

<tr>
<td>退出群聊</td>
<td>group.Leave()</td>
<td></td>
</tr>

<tr>
<td>设置群名</td>
<td>group.SetName()</td>
<td></td>
</tr>

<tr>
<td>创建文件夹</td>
<td>group.CreateFolder()</td>
<td></td>
</tr>

<tr>
<td>上传到群文件</td>
<td>group.UploadFilesByPath()</td>
<td>UploadFilesByUrl()，UploadFilesByBase64()</td>
</tr>

<tr>
<td>设置群备注</td>
<td>group.SetGroupRemark()</td>
<td></td>
</tr>

<tr>
<td>机器人可@全体成员的剩余次数</td>
<td>group.AtAllCount</td>
<td></td>
</tr>
</table>

## 好友相关API
```C#
var bot = new Bot(new Config())
var friend = bot.Firends.FirstOrDefault();
```
<table>
<tr>
<th>上传文件</th>
<th>friend.UploadFilesByPath()</th>
<th>friend.UploadFilesByUrl(),friend.UploadFilesByBase64()</th>
</tr>

<tr>
<td>成员资料卡点赞</td>
<td>friend.Like()</td>
<td></td>
</tr>
</table>

## 频道相关API
```C#
var bot = new Bot(new ReverseConnectConfig())
```
<table>
<tr>
<th>频道系统内BOT的资料</th>
<th>bot.GuildBotInfo</th>
<th></th>
</tr>
<tr>
<th>频道列表</th>
<th>bot.GuildList</th>
<th></th>
</tr>
<tr>
<th>频道元数据</th>
<th>bot.GuildList[0].GuildMeta</th>
<th></th>
</tr>
<tr>
<th>频道角色列表</th>
<th>bot.GuildList[0].Roles</th>
<th></th>
</tr>
<tr>
<th>频道成员列表</th>
<th>bot.GuildList[0].GuildMember()</th>
<th></th>
</tr>
<tr>
<th>频道成员更多信息</th>
<th>bot.GuildList[0].GuildMember()[0].MoreInfo</th>
<th></th>
</tr>
<tr>
<th>设置角色</th>
<th>bot.GuildList[0].GuildMember()[0].SetRole()</th>
<th></th>
</tr>
<tr>
<th>移除角色</th>
<th>bot.GuildList[0].GuildMember()[0].RemoveRole()</th>
<th></th>
</tr>
<tr>
<th>频道成员列表</th>
<th>bot.GuildList[0].GuildMember()</th>
<th></th>
</tr>
<tr>
<th>子频道列表</th>
<th>bot.GuildList[0].Channels()</th>
<th></th>
</tr>
<tr>
<th>获取频道帖子广场帖子</th>
<th>bot.GuildList[0].GuildFeeds()</th>
<th></th>
</tr>
</table>

## 其他API
```C#
var bot = new Bot(new Config())
```
<table>
<tr>
<th>名称</th>
<th>调用方法</th>
<th>说明</th>
</tr>

<tr>
<td>登录用户信息</td>
<td>bot.LoginInfo</td>
<td></td>
</tr>

<tr>
<td>群列表</td>
<td>bot.Groups</td>
<td></td>
</tr>

<tr>
<td>好友列表</td>
<td>bot.Friends</td>
<td></td>
</tr>

<tr>
<td>手机电池信息</td>
<td>bot.Battery</td>
<td></td>
</tr>

<tr>
<td>shamrock启动时间</td>
<td>bot.StartTime</td>
<td></td>
</tr>

<tr>
<td>获取好友系统消息</td>
<td>bot.FriendSysMsg</td>
<td>未能正确获取到数据</td>
</tr>

<tr>
<td>登录用户信息</td>
<td>bot.LoginInfo</td>
<td></td>
</tr>

<tr>
<td>是否在黑名单中</td>
<td>bot.InBlack(123)</td>
<td></td>
</tr>

<tr>
<td>是否在黑名单中</td>
<td>bot.InBlack(123)</td>
<td></td>
</tr>

<tr>
<td>获取图片</td>
<td>bot.GetImage("md5")</td>
<td>不知道可用不可用</td>
</tr>

<tr>
<td>获取语音</td>
<td>bot.GetRecord("md5")</td>
<td>不知道可用不可用<br>要使用此接口, 需要安装ffmpeg, 请参考 OpenShamrock 文档</td>
</tr>

<tr>
<td>获取消息</td>
<td>bot.GetMsg(123)</td>
<td></td>
</tr>

<tr>
<td>获取历史消息</td>
<td>bot.GetHistoryMsg(MessageType.Text)</td>
<td></td>
</tr>

<tr>
<td>设置QQ个人资料</td>
<td>bot.SetQQProfile(new())</td>
<td></td>
</tr>

<tr>
<td>清除本地缓存消息</td>
<td>bot.ClearMsgs()</td>
<td></td>
</tr>

<tr>
<td>获取陌生人资料</td>
<td>bot.StrangerInfo(132)</td>
<td></td>
</tr>

<tr>
<td>日志</td>
<td>bot.GetLog()</td>
<td></td>
</tr>
</table>
