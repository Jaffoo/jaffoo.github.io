# 自托管API服务


## 什么时候需要用到自托管API服务？
用于在非API项目中使用API服务。例如在winfom，控制台程序中，需要使用API服务。在此项目中，不提供API服务，所以需要自己托管API服务。

## 如何使用自托管API服务？
此处用Kestrel来托管ASP.NET Core API服务。

新建一个控制台项目，然后使用ASP.NET Core API服务模板来创建API服务。

下面是代码示例：
```csharp
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace ConsoleApp1;

class Program
{
    [STAThread]
    static void Main()=>InitAPI().Run();

    public static WebApplication InitAPI()
    {
        var builder = WebApplication.CreateBuilder();
        builder.Services.AddControllers().AddApplicationPart(Assembly.GetExecutingAssembly());

        var app = builder.Build();

        app.UseStaticFiles(new StaticFileOptions
        {
            ServeUnknownFileTypes = true
        });

        app.UseCors(builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

        app.UseRouting();

        app.MapControllers();

        return app;
    }
}

[Route("{controller}/{action}")]
public class HomeController : Controller
{
    [HttpGet("/")]
    [HttpGet]
    public IActionResult Index()
    {
        return Content("api is running");
    }
}
```
然后可以在你实例化KirinApp的地方调用InitAPI().Run()/InitAPI().RunAsync()来启动API服务。

需要注意的是，调用InitAPI().Run()会阻塞主线程，所以你应该开辟新线程来启动API服务；相反如果你在主线程中调用InitAPI().RunAsync()，那么主线程不会阻塞，但是api服务所在的线程可能会被释放。所以建议开辟新线程使用InitAPI().Run()来启动API服务。