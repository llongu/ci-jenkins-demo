# jenkins 自动化部署

## 环境

- windows/mac 本地开发环境
- github/xxx
- jenkins 测试服务器
- server 线上服务器

## 流程

    本机开发完成 → 测试成功 push -> github(触发webhook) -> jenkins(hook自动拉取/手动拉取)
    ↓
    测试成功 -> 发送邮件 -> 自动提交至线上服务器
    测试失败 -> 发送邮件

## 配置

1.  建立 github 仓库 拉取至本地初始化 写代码 ...
2.  测试服务器安装 java jdk/jenkins 并启动
3.  登录 jenkins 配置插件
    - Jenkins Location
      ![avatar](../1.jpg)
    - github server
