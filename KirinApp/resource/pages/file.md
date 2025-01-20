# 文件(KirinApp类/FileManage静态类)

## OpenFile
说明：选择文件

参数：
- filePath(string)-初始路径-选填 
- fileTypeFilter(Dictionary<string, string>)-文件类型过滤-选填

返回：
- selected(bool)-是否选中
- file(File)-文件

## OpenFiles
说明：选择文件(多选)

参数：
- filePath(string)-初始路径-选填 
- fileTypeFilter(Dictionary<string, string>)-文件类型过滤-选填

返回：
- selected(bool)-是否选中
- files(List&lt;File&gt;)-文件列表

## OpenDirectory
说明：选择文件夹

参数：
- initialDir(string)-初始路径-选填

返回：
- selected(bool)-是否选中
- directory(Directory)-文件夹

注：此页面的方法，请在主线程中调用，非主线程可能会导致异常