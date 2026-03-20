# 新能源资讯聚合应用

## 项目概述

这是一个专注于新能源领域的资讯聚合、工具服务和技术推广的小程序应用，旨在助力企业和个人提升资产价值。

## 项目结构

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
├── memory-bank/              # Vibe Coding文档
│   ├── game-design-document.md # 项目设计文档
│   ├── tech-stack.md         # 技术栈文档
│   ├── implementation-plan.md # 实施计划
│   ├── progress.md           # 进度跟踪
│   └── architecture.md       # 架构文档
└── README.md                 # 项目说明
```

## 技术栈

- 前端：微信小程序原生框架 (WXML/WXSS/JavaScript)
- 后端：Node.js + Express
- 数据库：待集成 (MongoDB/MySQL)
- 缓存：Redis (待集成)

## 快速开始

### 后端服务

1. 进入后端目录：
```bash
cd backend
```

2. 安装依赖：
```bash
npm install
```

3. 启动服务：
```bash
npm start
```

或者使用开发模式（自动重启）：
```bash
npm run dev
```

服务将在 `http://localhost:3000` 启动。

### 前端小程序

1. 下载并安装微信开发者工具
2. 打开微信开发者工具
3. 选择 "新建" -> "项目"
4. 选择项目目录为 `frontend/miniprogram`
5. 输入AppID（如果没有可以申请测试号）
6. 点击确定即可预览和调试

## API 接口

- `GET /api/news/latest` - 获取最新资讯
- `GET /api/news/:category` - 按类别获取资讯
- `GET /api/news/detail/:id` - 获取特定资讯详情
- `GET /api/tools` - 获取可用工具列表

## 当前进展

此项目目前处于 Phase 1: 项目初始化 阶段，已完成基本的前后端结构搭建。