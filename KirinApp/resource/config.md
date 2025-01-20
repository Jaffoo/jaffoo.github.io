# 窗体配置类(WinConfig)说明

## AppName-应用程序名称
类型：string

可空：是

默认：''

说明：

## Icon-应用程序图标
类型：string

可空：是

默认：''

说明：

## AppType-应用程序类型
类型：WebAppType

可空：否

默认：WebAppType.RawString

说明：

## Url-地址
类型：string

可空：是

默认：''

说明：仅当[AppType](#apptype)为Http/Static时有效

## RawString-字符串
类型：string

可空：是

默认：''

说明：仅当[AppType](#apptype)为RawString时有效

## BlazorComponent-Blazor组件
类型：Type

可空：是

默认：null

说明：仅当[AppType](#apptype)为Blazor时有效

## Chromeless-无边框
类型：bool

可空：是

默认：false

说明：

## Debug-调试模式
类型：bool

可空：是

默认：false

说明：

## TopMost-置顶
类型：bool

可空：是

默认：false

说明：

## Height/Width-窗口宽高
类型：int/int

可空：是

默认：600/800

说明：

## Size-窗口大小
类型：Size

可空：是

默认：null

说明：配置此属性会覆盖Height/Width属性

## ResizeAble-大小调整
类型：bool

可空：是

默认：true

说明：

## Center-窗口居中
类型：bool

可空：是

默认：true

说明：

## Left/Top-窗口位置
类型：int/int

可空：是

默认：0/0

说明：仅当[Center](#center)为false时有效

## MinimumHeigh/MinimumWidth-最小宽高
类型：int/int

可空：是

默认：0/0

说明：0表示不限制

## MinimumSize-窗口最小尺寸
类型：Size

可空：是

默认：null

说明：配置此属性会覆盖MinimumHeigh/MinimumWidth属性

## MaximumHeigh/MaximumWidth-最大宽高
类型：int/int

可空：是

默认：0/0

说明：0表示不限制

## MaximumSize-窗口最大尺寸
类型：Size

可空：是

默认：null

说明：配置此属性会覆盖MaximumHeigh/MaximumWidth属性

## 补充说明
**当然，如果不想使用WinConfig类，可以直接实例化无参KirinApp构造函数，然后通过KirinApp的属性或者设置属性的方法来配置窗口，属性名称和WinConfig一致，方法会在属性前加上Set/Is/Use，例如：SetAppType,IsDebug,UseRawString等。**

注：0.0.1-bate后，修改属性的方法前缀会统一改成Set，方法可以链式调用，KirinApp().SetAppName("1").SetIcon("logo.ico")。

注：这些属性和方法，必须在创建窗口前调用，否则无效，如果需要在创建窗口后调用，请查看[窗体属性API](/window)