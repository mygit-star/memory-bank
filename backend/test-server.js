// test-server.js - A simplified version to test our API logic without external dependencies
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
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
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Test server running - Renewable Energy Aggregator API' });
});

// Get latest news
app.get('/api/news/latest', (req, res) => {
  res.json(mockNews);
});

// Start server
app.listen(PORT, () => {
  console.log(`Test server is running on port ${PORT}`);
});