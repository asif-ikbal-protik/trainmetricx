const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('e:/trainmetric/components');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/viewport=\{\{\s*once:\s*true\s*\}\}/g, 'viewport={{ once: true, margin: "0px 0px -100px 0px" }}');
    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log('Updated viewport in ' + file);
    }
});
