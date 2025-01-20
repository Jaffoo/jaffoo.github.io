# AppType的类型

## RawString
```csharp
 WinConfig winConfig = new()
 {
     AppName = "KirinApp",
     AppType = WebAppType.RawString,
     RawString = "<span style='color:red'>将会加载字符串，文字是红色的</span>",
 };
```

## Http
```csharp
 WinConfig winConfig = new()
 {
     AppName = "KirinApp",
     AppType = WebAppType.Http,
     Url="https://github.com/Jaffoo/KirinApp"
 }
 ```

 ## Static
 假设在wwwroot下有一个静态文件index.html，我们可以这样加载
```csharp
 WinConfig winConfig = new()
 {
     AppName = "KirinApp",
     AppType = WebAppType.Static,
     Url="wwwroot/index.html"//如果用相对路径，则相对于项目根目录
 }
```

 ## Blazor
 如果要使用Blazor，请先修改[配置](/project#修改项目配置)
```csharp
 WinConfig winConfig = new()
 {
     AppName = "KirinApp",
     AppType = WebAppType.Blazor,
     BlazorComponent=typeof(App)//Blazor组件入口类
 }
```