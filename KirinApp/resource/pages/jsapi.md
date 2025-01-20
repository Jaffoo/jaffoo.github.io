# 默认JS API
`以下API方法均在window.external对象中`

## sendMessage
说明：发送消息到C#中

参数：message-消息内容

## receiveMessage
说明：接收C#发送的消息

参数：callback-回调函数

## max
说明：最大化窗口

## min
说明：最小化窗口

## hide
说明：隐藏窗口

## show
说明：显示窗口

## focus
说明：窗口获取焦点

## close
说明：关闭窗口

## drag
说明：窗口拖动

参数：dom-拖动元素

## move
说明：窗口移动，绝对定位

参数：
- x：x坐标
- y：y坐标

## moveTo
说明：窗口移动，相对定位

参数：
- x：x坐标
- y：y坐标

## change
说明：窗口改变大小

参数：
- width：宽度
- height：高度

## normal
说明：窗口恢复到默认设置