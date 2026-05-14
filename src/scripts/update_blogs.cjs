const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter
    const match = content.match(/^---([\s\S]+?)---/);
    if (match) {
        let frontmatter = match[1];
        
        // Skip if already updated (has tags)
        if (frontmatter.includes('tags:')) return;
        
        // Basic parsing/adding
        const slug = file.replace('.md', '');
        
        // Insert new fields before the closing ---
        const newFields = `author: "Shahbaz Fareed"\ntags: ["tech"]\nslug: "${slug}"\n`;
        
        // Find a good place to insert (after pubDate)
        if (frontmatter.includes('pubDate:')) {
            frontmatter = frontmatter.replace(/(pubDate: .*\n)/, `$1${newFields}`);
        } else {
            frontmatter += newFields;
        }
        
        const newContent = content.replace(/^---[\s\S]+?---/, `---${frontmatter}---`);
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${file}`);
    }
});
