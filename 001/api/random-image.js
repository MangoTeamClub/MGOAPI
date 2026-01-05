// 直接引入我们准备好的数据
const imageData = require('../images.json');

export default function handler(request, response) {
  // 设置响应头，允许跨域访问（重要）
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Content-Type', 'application/json');

  // 从 images 数组中随机选取一个
  const randomIndex = Math.floor(Math.random() * imageData.images.length);
  const randomImageUrl = imageData.images[randomIndex];

  // 返回 JSON 格式的结果
  response.status(200).json({
    image: randomImageUrl
  });
}
