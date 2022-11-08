const path = require('path');
const fs = require('fs/promises');
const { readFileSync } = require('fs');

const ReadFiles = fs.readdir( path.join(__dirname, './secret-folder'), 
                {withFileTypes: true} );
ReadFiles.then(ReadFiles => ReadFiles.forEach( file => {
    if (file.isFile()) {
        const FilePath = path.join(__dirname, 'secret-folder', file.name);
        const FileName = path.parse(FilePath).name;
        const FilePermit = path.extname(FilePath).slice(1);
        fs.stat(FilePath).then(stats => {
            console.log(`${FileName} - ${FilePermit} - ${stats.size}b`);
        } );
    };
    
}));