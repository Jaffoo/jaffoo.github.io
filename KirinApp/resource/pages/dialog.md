# 对话框(KirinApp类/DialogManage静态类)

## ShowDialog
说明：显示对话框

参数：
- title(string)-必填-标题
- message(string)-必填-内容
- btns(MsgBtns)-选填-按钮

返回：result(MsgResult)-选填-结果

#### MsgBtns
- Ok-确定
- OkCancel-确定取消
- YesNo-是否
- YesNoCancel-是否取消

#### MsgResult
- Ok-确定
- Cancel-取消
- Yes-是,
- No-否

注：此页面的方法，请在主线程中调用，非主线程可能会导致异常