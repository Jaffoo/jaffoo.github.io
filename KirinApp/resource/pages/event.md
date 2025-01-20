# 生命周期及事件

## 生命周期
整个生命周期分为三个阶段：
- 窗口创建前
- 窗口创建完成（webview初始化前）
- 页面加载完成（webview初始化完成）
- 窗口关闭

## 事件
### OnCreate-窗口创建前
```csharp
var kirinApp = new KirinApp();
kirinApp.OnCreate += (s, e) =>
{
    Console.WriteLine("OnCreate");
};
kirinApp.Run();
```

### Created-窗口创建完成
```csharp
var kirinApp = new KirinApp();
kirinApp.Created += (s, e) =>
{
    Console.WriteLine("Created");
};
kirinApp.Run();
```

### Loaded-页面加载完成
```csharp
var kirinApp = new KirinApp();
kirinApp.Loaded += (s, e) =>
{
    Console.WriteLine("Loaded");
};
kirinApp.Run();
```

### OnClose-窗口关闭
```csharp
var kirinApp = new KirinApp();
kirinApp.OnClose += (s, e) =>
{
    return true;//返回true表示关闭窗口，返回false表示不关闭窗口
}
kirinApp.Run();
```

### WebMessageReceived-webview消息接收
```csharp
var kirinApp = new KirinApp();
kirinApp.WebMessageReceived += (s, e) =>
{
    Console.WriteLine(e.Message);
};
kirinApp.Run();
```

### SizeChange-窗口大小改变
```csharp
var kirinApp = new KirinApp();
kirinApp.SizeChange += (s, e) =>
{ 
    Console.WriteLine(e.Width + ":" + e.Height); 
};
kirinApp.Run();
```

### PositionChange-窗口位置改变
```csharp
var kirinApp = new KirinApp();
kirinApp.PositionChange += (s, e) =>
{
    Console.WriteLine(e.X + ":" + e.Y);
};
kirinApp.Run();
```

注：事件注册均可以异步注册，但是异步注册的事件不会在主线程执行，所以更新UI或者使用File和Dialog API时需要注意。