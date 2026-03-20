# Architecture Document

## System Overview
新能源资讯聚合应用是一个轻量级的小程序平台，采用前后端分离架构，专注于新能源领域的资讯聚合、工具服务和技术推广。系统由微信小程序前端和Node.js后端API组成。

## Components
### 前端组件 (微信小程序)
- app.js: 小程序入口文件，定义全局变量和生命周期函数
- app.json: 小程序全局配置，定义页面路径、窗口表现等
- pages/: 页面组件集合
  - index/: 首页，展示最新资讯和快速访问入口
  - news/: 资讯页面，展示分类资讯列表
  - tools/: 工具页面，提供各种新能源相关的计算工具
  - profile/: 个人中心/技术推广页面

### 后端组件 (Node.js + Express)
- server.js: 服务器入口文件，定义API路由和服务配置
- API路由:
  - /api/news/latest: 获取最新资讯
  - /api/news/:category: 按类别获取资讯
  - /api/news/detail/:id: 获取特定资讯详情
  - /api/tools: 获取可用工具列表

## Data Flow
1. 小程序前端发起API请求到后端服务器
2. 后端处理请求，从数据库或第三方API获取数据
3. 后端返回JSON格式的数据给前端
4. 前端解析数据并渲染到页面上

## File Structure
```
memory-bank/
├── frontend/                 # 前端小程序代码
│   └── miniprogram/          # 微信小程序源码
│       ├── app.js            # 小程序入口文件
│       ├── app.json          # 小程序全局配置
│       ├── sitemap.json      # 小程序页面索引配置
│       └── pages/            # 页面文件
│           └── index/        # 首页
│               ├── index.wxml # 页面结构
│               ├── index.js   # 页面逻辑
│               └── index.wxss # 页面样式
├── backend/                  # 后端API服务
│   ├── package.json          # 项目依赖配置
│   └── server.js             # 服务器入口文件
```

## Technologies Used
- 前端: 微信小程序原生框架 (WXML/WXSS/JavaScript)
- UI组件: 待集成 (WeUI 或 Vant Weapp)
- 后端: Node.js + Express.js
- HTTP客户端: Axios
- 环境配置: Dotenv
- 跨域支持: Cors

## Design Patterns
- 前后端分离架构: 前端负责UI展示，后端提供API服务
- RESTful API设计: 遵循REST原则设计API接口
- 组件化开发: 小程序页面按功能模块划分
- 单一职责原则: 每个页面和组件专注单一功能