# KirinApp属性

## MainMonitor-主显示器
包含主显示器的宽高信息

## OS-操作系统
包含操作系统的信息

## IsMainThread-是否为主线程
用于给判断当前线程是否是主线程，当需要更新UI且不知道是不是主线程的时候，可以使用此属性来判断，如果不是，可以通过[Invoke](/window#Invoke)方法执行你的方法

## OsVersion-操作系统版本
包含操作系统的版本信息