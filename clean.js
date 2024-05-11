const fs = require('fs');

const recover = (path) => {
    fs.copyFile(path + '.bak', path, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Successfully restored ${path}`);
    });
    fs.unlink(path + '.bak', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Successfully deleted ${path}.bak`);
    });
}

const files = ['start/changelog.md', 'main_page.vue', ".vitepress/config.mts"];

files.forEach((file) => {
    recover(file)
})