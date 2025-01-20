# 窗体API(KirinApp类)

## KirinApp
说明：构造函数

参数：无

## KirinApp
说明：构造函数

参数：
- winConfig(WinConfig)-必填-窗体配置
- parent(KirinApp)-选填-父窗体

## Run
说明：创建并显示窗体

参数：无


## LoadStatic
说明：重新加载内容为静态资源

参数：path(string)-资源路径-必填

## LoadUrl
说明：重新加载内容为网页内容

参数：url(string)-网页url-必填

## LoadRawString
说明：重新加载内容为静态资源

参数：content(string)-字符串-必填

## LoadBlazor&lt;T&gt;
说明：重新加载内容为Blazor组件

参数：T(Type)-组件类型-必填

## Hide
说明：隐藏窗体

参数：无

## Show
说明：显示窗体

参数：无

## Exit
说明：关闭窗体

参数：无

## Change
说明：改变窗体大小

参数：
- width(int)-宽度-必填
- height(int)-高度-必填

## Change
说明：改变窗体大小

参数：size(Size)-大小-必填

## Focus
说明：获取焦点

参数：无

## MoveTo
说明：移动窗体

参数：
- x(int)-x坐标-必填
- y(int)-y坐标-必填

## Minimize
说明：最小化窗体

参数：无

## Maximize
说明：最大化窗体

参数：无

## Normal
说明：还原窗体

参数：无

## Invoke
说明：通过主线程调用方法

参数：action(Action)-方法-必填

## InvokeAsync
说明：通过主线程调用方法

参数：action(Func&lt;Task&gt;)-方法-必填