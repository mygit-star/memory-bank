// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for demonstration
const mockNews = [
  {
    id: 1,
    title: "全球太阳能发电成本持续下降，创历史新低",
    source: "新能源网",
    date: "2024-03-20",
    content: "根据最新报告，全球太阳能发电成本在过去一年中下降了15%，预计未来几年将持续走低..."
  },
  {
    id: 2,
    title: "风能技术突破：新一代风机效率提升20%",
    source: "清洁能源杂志",
    date: "2024-03-19",
    content: "科学家们研发出新型风力涡轮机叶片设计，显著提升了风能转换效率..."
  },
  {
    id: 3,
    title: "电动汽车市场增长带动锂电池产业快速发展",
    source: "科技日报",
    date: "2024-03-18",
    content: "随着电动汽车市场的蓬勃发展，锂电池技术不断进步，成本持续降低..."
  },
  {
    id: 4,
    title: "氢能产业链逐步完善，商业化应用加速推进",
    source: "能源观察",
    date: "2024-03-17",
    content: "氢能在交通、工业等领域的应用日益广泛，产业链上下游协同发展..."
  },
  {
    id: 5,
    title: "储能技术成为新能源发展的关键支撑",
    source: "电力周刊",
    date: "2024-03-16",
    content: "储能技术的快速发展为新能源并网提供了重要保障，市场规模不断扩大..."
  }
];

const mockTools = [
  {
    id: 1,
    name: "太阳能发电收益计算器",
    description: "根据安装面积、日照时间等因素计算太阳能发电收益"
  },
  {
    id: 2,
    name: "风能潜力评估工具",
    description: "基于地理位置和气候数据评估风能开发潜力"
  },
  {
    id: 3,
    name: "碳减排量计算器",
    description: "计算新能源项目产生的碳减排效果"
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Renewable Energy Aggregator API' });
});

// Get latest news
app.get('/api/news/latest', (req, res) => {
  res.json(mockNews);
});

// Get news by category
app.get('/api/news/:category', (req, res) => {
  const { category } = req.params;
  // For demo purposes, return all news regardless of category
  res.json(mockNews.filter(news => news.title.toLowerCase().includes(category)));
});

// Get specific news by ID
app.get('/api/news/detail/:id', (req, res) => {
  const { id } = req.params;
  const news = mockNews.find(item => item.id === parseInt(id));
  if (news) {
    res.json(news);
  } else {
    res.status(404).json({ error: 'News not found' });
  }
});

// Get available tools
app.get('/api/tools', (req, res) => {
  res.json(mockTools);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;