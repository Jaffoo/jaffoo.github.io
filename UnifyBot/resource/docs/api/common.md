## 机器人API

```C#
Connect connect = new("localhost", 3001, 3000);
Bot bot = new(connect);
```

<table>
<tr>
<th>名称</th>
<th>类型</th>
<th>使用</th>
<th>参数</th>
<th>说明</th>
</tr>

<tr>
<td>好友</td>
<td>属性</td>
<td>bot.Friends</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>群</td>
<td>属性</td>
<td>bot.Groups</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>onebot版本</td>
<td>属性</td>
<td>bot.Version</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>onebot状态</td>
<td>属性</td>
<td>bot.Status</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>检查是否可以发送语音</td>
<td>方法</td>
<td>bot.CanSendRecord</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>检查是否可以发送图片</td>
<td>方法</td>
<td>bot.CanSendImage</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>重启</td>
<td>方法</td>
<td>bot.Restart</td>
<td>delay：延迟重启</td>
<td>无</td>
</tr>

<tr>
<td>发送私聊消息</td>
<td>方法</td>
<td>bot.SendPrivateMessage</td>
<td>qq/friend：qq号/好友对象；msg：消息内容</td>
<td>存在重载，自行查看</td>
</tr>

<tr>
<td>发送群聊消息</td>
<td>方法</td>
<td>bot.SendGroupMessage</td>
<td>groupQQ/group：qq群号/群对象；msg：消息内容</td>
<td>存在重载，自行查看</td>
</tr>

<tr>
<td>扩展api方法</td>
<td>方法</td>
<td>bot.GetAsync</td>
<td>apiEndpoint：请求端点；paramStr：请求参数字符串（url格式拼接好）</td>
<td>onebot实现框架的扩展api通用调用方法；存在重载，自行查看</td>
</tr>

<tr>
<td>扩展api方法</td>
<td>方法</td>
<td>bot.PostAsync</td>
<td>apiEndpoint：请求端点；data：请求body数据(json字符串)</td>
<td>onebot实现框架的扩展api通用调用方法；存在重载，自行查看</td>
</tr>

<tr>
<td>资源释放</td>
<td>方法</td>
<td>bot.Dispose</td>
<td>无</td>
<td>无</td>
</tr>
</table>

## 群对象

```C#
Connect connect = new("localhost", 3001, 3000,"111");
Bot bot = new(connect);
var group = bot.Groups[0];
```

<table>
<tr>
<th>名称</th>
<th>类型</th>
<th>使用</th>
<th>参数</th>
<th>说明</th>
</tr>

<tr>
<td>群成员列表</td>
<td>属性</td>
<td>group.Members</td>
<td>无</td>
<td>[群成员对象](#群成员对象)</td>
</tr>

<tr>
<td>群荣誉</td>
<td>属性</td>
<td>group.Honor</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>发送消息</td>
<td>方法</td>
<td>group.SendMessage</td>
<td>msg：消息内容</td>
<td>存在重载，自行查看</td>
</tr>

<tr>
<td>全体禁言</td>
<td>方法</td>
<td>group.EnableGroupBan</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>取消全体禁言</td>
<td>方法</td>
<td>group.DisableGroupBan</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>允许匿名聊天</td>
<td>方法</td>
<td>group.EnableAnonymous</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>禁止匿名聊天</td>
<td>方法</td>
<td>group.DisableAnonymous</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>设置群名</td>
<td>方法</td>
<td>group.SetGroupName</td>
<td>name：新群名</td>
<td>无</td>
</tr>

<tr>
<td>退出群聊</td>
<td>方法</td>
<td>group.LeaveGroup</td>
<td>dissolve：是否解散，如果登录号是群主，则仅在此项为 true 时能够解散</td>
<td>无</td>
</tr>
</table>


## 群成员对象

```C#
Connect connect = new("localhost", 3001, 3000,"111");
Bot bot = new(connect);
var member = bot.Groups[0].Members[0];
```

<table>
<tr>
<th>名称</th>
<th>类型</th>
<th>使用</th>
<th>参数</th>
<th>说明</th>
</tr>

<tr>
<td>设置群组专属头衔</td>
<td>方法</td>
<td>member.SetTitle</td>
<td>title：专属头衔，不填或空字符串表示删除专属头衔；time：专属头衔有效期，单位秒，-1表示永久</td>
<td>无</td>
</tr>

<tr>
<td>成员在群的昵称</td>
<td>方法</td>
<td>member.SetNickname</td>
<td>name：成员在群的昵称，不填或空字符串表示删除昵称，使用qq昵称</td>
<td>无</td>
</tr>

<tr>
<td>任命管理</td>
<td>方法</td>
<td>member.SetAdmin</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>卸任管理</td>
<td>方法</td>
<td>member.RemoveAdmin</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>禁言</td>
<td>方法</td>
<td>member.Ban</td>
<td>time?：禁言时间，单位秒</td>
<td>无</td>
</tr>

<tr>
<td>取消禁言</td>
<td>方法</td>
<td>member.CancelBan</td>
<td>无</td>
<td>无</td>
</tr>

<tr>
<td>踢出群聊</td>
<td>方法</td>
<td>member.Kick</td>
<td>reject?：拒绝此人的加群请求</td>
<td>无</td>
</tr>

<tr>
<td>点赞</td>
<td>方法</td>
<td>member.Like</td>
<td>times?：次数</td>
<td>非好友可能操作失败</td>
</tr>

<tr>
<td>发送消息</td>
<td>方法</td>
<td>member.SendMessage</td>
<td>msg：消息内容</td>
<td>非好友大概率发送失败；存在重载</td>
</tr>
</table>

## 好友对象

```C#
Connect connect = new("localhost", 3001, 3000,"111");
Bot bot = new(connect);
var friend = bot.Friends[0];
```

<table>
<tr>
<th>名称</th>
<th>类型</th>
<th>使用</th>
<th>参数</th>
<th>说明</th>
</tr>

<tr>
<td>发送消息</td>
<td>方法</td>
<td>group.SendMessage</td>
<td>msg：消息内容</td>
<td>存在重载，自行查看</td>
</tr>

<tr>
<td>点赞</td>
<td>方法</td>
<td>group.Like</td>
<td>times?：次数</td>
<td>存在重载，自行查看</td>
</tr>
</table>

## 群聊对象

```C#
 bot.MessageReceived.OfType<GroupReceiver>().Subscribe(gr =>
 {

 });
```

<table>
<tr>
<th>名称</th>
<th>类型</th>
<th>使用</th>
<th>参数</th>
<th>说明</th>
</tr>

<tr>
<td>群消息</td>
<td>属性</td>
<td>gr.Group</td>
<td>无</td>
<td>[群对象](#群对象)</td>
</tr>

<tr>
<td>发送消息</td>
<td>方法</td>
<td>gr.SendMessage</td>
<td>msg：消息内容</td>
<td>存在重载，自行查看</td>
</tr>

<tr>
<td>撤回消息</td>
<td>方法</td>
<td>gr.Recall</td>
<td>无</td>
<td>无</td>
</tr>
</table>

## 框架扩展API

onebot机器人实现框架会有一些自己的API（非onebot标准），此框架由于是按照onebot标准实现的，所以不提供也不会支持这些扩展api，不过此框架的[机器人api](#机器人api)中的提供了扩展API调用的方法，通过此方法可以调用这些API。例如：

```C#
//例如框架扩展的api是upload_file，接口返回值假设是FileInfo类，需要传入path参数，则调用方法如下
bot.GetAsync("upload_file","?path=xxxxx");
bot.GetAsync<FileInfo>("upload_file","?path=xxxxx");
bot.PostAsync("upload_file",new {path="xxx"}.ToJsonStr());
bot.PostAsync<FileInfo>("upload_file",new {path="xxx"}.ToJsonStr());
```