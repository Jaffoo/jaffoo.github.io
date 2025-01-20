# 创建项目

## 通过控制台创建项目
1. 打开Visual Studio 2022，创建一个控制台应用程序
2. 安装KirinApp库，在NuGet包管理器中搜索KirinApp（请勾选包括预发行版），安装最新版本
3. 在Program.cs文件中添加以下代码
```csharp
using KirinAppCore;
using KirinAppCore.Model;

class Program
{
    [STAThread]
    static void Main()
    {
        WinConfig winConfig = new WinConfig()
        {
            AppName = "KirinApp",
            Height = 1000,
            Width = 1200,
            AppType = WebAppType.RawString,
            RawString = "<span style='color:red'>这个是字符串</span>",
        };
        var kirinApp = new KirinApp(winConfig);
        kirinApp.Run();
    }
}
```
4. 运行程序，即可看到一个窗口，窗口中显示了一个红色的字符串

## 修改项目配置
- 如果不想显示控制台窗口，可以右键项目-属性-应用程序-输出类型 改成Windows应用程序

或者修改项目配置文件(yourproject.csproj)，添加以下代码
```xml
<PropertyGroup>
    <OutputType>WinExe</OutputType>
</PropertyGroup>
```

- 应用程序图标修改同理，不再赘述

- Blazor支持
如果你想使用Blazor来开发桌面应用程序，需要修改项目配置文件(yourproject.csproj)，修改代码如下(通常在第一行)
```xml
<Project Sdk="Microsoft.NET.Sdk"> 
修改为：
<Project Sdk="Microsoft.NET.Sdk.Razor">
```
### 恭喜你，你已经创建了你的第一个KirinApp程序！
### AppType不同，加载的内容也不同，具体请前往[加载类型](/content)查看