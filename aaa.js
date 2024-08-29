const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 计算文件的SHA256哈希值
function sha256(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

// 下载图片并保存到本地
async function downloadImage(url, outputPath) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const hash = sha256(buffer);
    const extension = '.png';  // 尝试获取原始扩展名，默认.png
    const fileName = `${hash}${extension}`;
    const filePath = path.join(outputPath, fileName);

    fs.writeFileSync(filePath, buffer);
    return filePath;
}

// 处理Markdown文件
async function processMarkdown(inputFile, outputFile) {
    const data = fs.readFileSync(inputFile, 'utf8');
    const outputPath = path.join(__dirname, 'imgs');

    // 如果 imgs 文件夹不存在，则创建
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }

    // 匹配所有的图片链接
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;
    let updatedData = data;

    while ((match = imageRegex.exec(data)) !== null) {
        const imageUrl = match[1];

        // 只处理非本地文件
        if (!imageUrl.startsWith('http') && !imageUrl.startsWith('https')) continue;

        console.log(`Downloading image from: ${imageUrl}`);
        const localPath = await downloadImage(imageUrl, outputPath);
        updatedData = updatedData.replace(imageUrl, path.relative(path.dirname(outputFile), localPath));
    }

    // 将更新后的内容写入新的Markdown文件
    fs.writeFileSync(outputFile, updatedData, 'utf8');
    console.log(`Updated markdown saved to: ${outputFile}`);
}

// 调用函数处理Markdown文件
const inputFile = 'start/base_knowledge.md';  // 输入的Markdown文件

processMarkdown(inputFile, inputFile).catch(err => console.error(err));
