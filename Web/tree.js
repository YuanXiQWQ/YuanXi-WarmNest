const fs = require('fs');
const path = require('path');

// 配置要忽略的文件和文件夹名称
const ignoreList = ['node_modules', '.git', 'ignore'];

function generateFileTree(dir, indent = '') {
    const files = fs.readdirSync(dir).filter(file => !ignoreList.includes(file));
    let fileTree = '';

    files.forEach((file, index) => {
        const filePath = path.join(dir, file);
        const isDir = fs.statSync(filePath).isDirectory();
        const prefix = index === files.length - 1 ? '└── ' : '├── ';

        fileTree += `${indent}${prefix}${file}\n`;

        if (isDir) {
            const newIndent = indent + (index === files.length - 1 ? '    ' : '│   ');
            fileTree += generateFileTree(filePath, newIndent);
        }
    });

    return fileTree;
}

const projectDir = './2800_2024_BBY10';
const fileTree = generateFileTree(projectDir);

fs.writeFileSync('PROJECT_STRUCTURE.md', `# 项目目录结构\n\n\`\`\`\n${fileTree}\`\`\`\n`, 'utf-8');

console.log('项目目录结构已生成并写入到PROJECT_STRUCTURE.md文件中');
