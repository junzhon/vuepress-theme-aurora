---
# date是手动设置此篇文章编写的时间
date: "2022/6/17 11:48" 
# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: vue,token

# 设置description
description: SyntaxErrorUnexpected token.

# 手动设置标题，否则使用h1标签作为标题
title:  缺括号导致Unexpected token  





# 这是设置标签，数组形式
tag: [vue,SyntaxError] 

# 这里设置类别，数组形式
categories: [类别,vue] 
---

因为没有把元素用{ }包括住
            text: 'life',
                ^

SyntaxError: Unexpected token ':'
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1033:15)

解决方法：
在对应
 text: 'life',
                上面加上{


11:05
2022年6月17日星期五