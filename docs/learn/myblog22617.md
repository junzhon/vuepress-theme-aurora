---
# date是手动设置此篇文章编写的时间
date: "2022/6/17 11:48" 
# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: vue,springboot,src,port,idea

# 设置description
description: localhost上的文件和自己本地的不同解决方法
# 手动设置标题，否则使用h1标签作为标题
title: localhost文件系统与本地文件内容不同导致Property or method xxx is not defined on the instance but referenced during render. 



tag: [IDEA,Tomcat,vue] 

# 这里设置类别，数组形式
categories: [类别,常见错误总结]
---
按F12见检查《源代码》->《页面》->《top：localhost：xxxx》
发现js目录下的vue.js未更新
弹出错误
Property or method “xxx“ is not defined on the instance but referenced during render.

解决方法：
1：清理端口文件
2：换端口运行


2022年6月17日星期五 10:50
